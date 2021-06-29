export function utilsNavigatorTo({
  domain,
  path = "",
  query = undefined,
  isNewTab = false,
}: utilsNavigatorToArgs) {
  // 如果跳转到其他域名，且域名存在于globalDomain内，则在url中加入ticket标识
  const _query: any = cloneDeep(query) || {};
  // @ts-ignore
  if (
    domain &&
    domain !== globalDomain.LETAO_SERVER_NAME &&
    Object.values(globalDomain).indexOf(domain) > -1
  ) {
    if (_query && Cookix.has("ticket")) _query["ticket"] = Cookix.get("ticket");
  }
  const url = utilsGetUrl({ domain, path, query: _query });
  // IE下使用跳转可能会出现不刷新的情况
  if (url === window.location.href) window.location.reload();
  if (isNewTab) {
    window.open(url);
  } else {
    window.location.href = url;
  }
}

export function utilsGetUrl({
  domain,
  path = "",
  query = undefined,
}: utilsGetUrlArgs) {
  let defaultDomain = "";
  if (typeof window !== "undefined") {
    // IE10 兼容
    defaultDomain =
      window.location.origin ||
      `${window.location.protocol}//${window.location.hostname}${
        window.location.port ? ":" + window.location.port : ""
      }`;
  }

  let url = `${domain || defaultDomain}${path}`;
  if (query) {
    const queryKeys: string[] = Object.keys(query);
    if (queryKeys.length > 0) {
      const queryArray = queryKeys.map((key) => {
        return `${key}=${query[key]}`;
      });
      url = `${url}?${queryArray.join("&")}`;
    }
  }

  return url;
}
