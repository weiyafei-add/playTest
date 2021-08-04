import axios, { Method, AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs";

export enum ContentType {
  ApplicationJson = "application/json",
  ApplicationFormData = "multipart/form-data",
  ApplicationForm = "application/x-www-form-urlencoded",
}

export interface NetworkResponseType {
  success: boolean;
  message: string;
  data: any;
  code?: string;
  config?: any;
}

const responseHandleSuccess = (
  response: AxiosResponse<NetworkResponseType>
): any | NetworkResponseType => {
  return { ...response.data, code: response.status, success: true };
};
const responseHandleFail = (
  response: AxiosResponse<NetworkResponseType>
): any | NetworkResponseType => {
  return {};
};

axios.interceptors.response.use((response) => {
  console.log(response);
  return response;
});

function fetch({
  path = "",
  method = "get" as Method,
  params = {},
  type = ContentType.ApplicationJson,
  headers = {},
}): Promise<NetworkResponseType> | null {
  const options: AxiosRequestConfig = {
    url: path,
    method,
    // withCredentials: true,
    // headers: {
    //   "x-requested-with": "xmlhttprequest",
    // },
  };

  if (
    options.method!.toLocaleUpperCase() === "GET" ||
    options.method!.toLocaleUpperCase() === "DELETE"
  ) {
    return axios({ ...options, params: { ...params } })
      .then(responseHandleSuccess)
      .catch(responseHandleFail);
  }

  if (
    options.method!.toLocaleUpperCase() === "POST" ||
    options.method!.toLocaleUpperCase() === "PUT"
  ) {
    const data =
      type === ContentType.ApplicationJson ? params : qs.stringify(params);
    return axios({ ...options, data, params: { _t: +new Date().getTime() } })
      .then(responseHandleSuccess)
      .catch(responseHandleFail);
  }

  return null;
}

export default fetch;
