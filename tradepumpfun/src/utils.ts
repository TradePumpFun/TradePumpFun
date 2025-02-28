export const apiHost = "https://api.tradepump.fun/v1" as const;

export const isFailedStatus = (status: number) => {
  return status < 200 || status >= 300;
};
