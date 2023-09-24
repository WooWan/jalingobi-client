import { rest } from 'msw';

import { baseURL } from '@/mocks/base';

export const emojiHandlers = [
  rest.put(baseURL(`/record/:recordId/emoji`), (req, res, ctx) => {
    return res(
      ctx.delay(500),
      ctx.status(200),
      ctx.json({
        isSuccess: true,
        code: 200,
        message: '요청에 성공하였습니다.',
      }),
    );
  }),
  rest.delete(baseURL(`/record/:recordId/emoji`), (req, res, ctx) => {
    return res(
      ctx.delay(500),
      ctx.status(200),
      ctx.json({
        isSuccess: true,
        code: 200,
        message: '요청에 성공하였습니다.',
      }),
    );
  }),
];
