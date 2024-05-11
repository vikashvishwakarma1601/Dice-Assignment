export const urlBuilder = (url: string, params: string[], paramsData: any) => {
  const reqUrl = new URL(url);

  params.forEach((param) => {
    if (paramsData[param]) {
      reqUrl.searchParams.set(param, paramsData[param]);
    }
  });
  return reqUrl;
};
