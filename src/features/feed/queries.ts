import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import {
  getChallengeAchievement,
  getChallengeList,
  getChallengeRoomFeedList,
  getMyRoomFeedList,
} from '@/service/feed';
import {
  ChallengeRoomFeedListRequest,
  MyRoomFeedListRequest,
  ChallengeAchievementRequest,
} from '@/types/feed';

// TODO: 키값 한번에 관리하기

export const useChallengeRoomFeedList = ({
  challengeId,
  offsetRecordId,
}: ChallengeRoomFeedListRequest) => {
  return useQuery({
    queryKey: ['challengeRoomFeedList', challengeId, offsetRecordId],
    queryFn: () => getChallengeRoomFeedList({ challengeId, offsetRecordId }),
  });
};

export const useMyRoomFeedList = ({ offset }: MyRoomFeedListRequest) => {
  return useInfiniteQuery({
    queryKey: ['myRoomFeedList', offset],
    queryFn: ({ pageParam = offset }) =>
      getMyRoomFeedList({ offset: pageParam }),
    getNextPageParam: ({ result }) => {
      const isLastPage = result.current < 20;

      if (isLastPage) {
        return false;
      }
      return offset + result.current;
    },
  });
};

export const useChallengeAchievement = ({
  challengeId,
}: ChallengeAchievementRequest) => {
  return useQuery({
    queryKey: ['challengeAchievement', challengeId],
    queryFn: () => getChallengeAchievement({ challengeId }),
  });
};

export const useChallengeList = () => {
  return useQuery({
    queryKey: ['challengeList'],
    queryFn: getChallengeList,
  });
};
