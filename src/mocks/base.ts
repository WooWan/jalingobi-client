export const baseURL = (path: string) => {
  return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
};
