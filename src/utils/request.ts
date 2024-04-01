import axios, { AxiosRequestConfig } from 'axios';

type RequestConfig = AxiosRequestConfig & {
  showMsg?: boolean;
};

const instance = axios.create({
  baseURL: 'https://api.website-map.clovemu.com',
  timeout: 20 * 1000,
});

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    const config = response.config as RequestConfig;
    const showMsg = config.showMsg === false || true;
    if (showMsg) {
      // TODO: 消息弹窗
      console.error(showMsg);
    }
    // 对响应数据做点什么
    return response.data.data;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

export const request: <T = any>(config: RequestConfig) => Promise<T> = (config) => instance.request(config);
