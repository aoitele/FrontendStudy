import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios';

//baseurlの設定
const AxiosClient = (options?: AxiosRequestConfig) => {
  const client: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PULIC_API_BASE_URL || 'http://localhost:3000/api',
  });

  // interceptorsでレスポンスを返す前にエラーを捕捉する
  client.interceptors.response.use(
    (response) => onSuccess(response),
    (error) => onError(error)
  );

  const onSuccess = (response: any) => response;
  const onError = (error: AxiosResponse<any>) => Promise.reject(error);

  return {
    client,
    get: <T = any, R = AxiosResponse<T>>(
      url: string,
      params?: Record<string, unknown>
    ): Promise<R> => {
      return client.get(url, params);
    },
    post: <T = any, R = AxiosResponse<T>>(
      url: string,
      data?: Record<string, unknown>
    ): Promise<R> => {
      return client.post(url, data);
    },
    delete: <T = any, R = AxiosResponse<T>>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<R> => {
      return client.post(url, config);
    },
  };
};

export { AxiosClient };
