import { TIMEOUT, DEFAULT_HEADERS } from "@/utils";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const request = (options) => {
  return new Promise((resolve, reject) => {
    // 获取 Token（Pinia 或本地存储）
    const token = uni.getStorageSync("token") || "";

    // 请求拦截：合并 Header
    const header = {
      ...DEFAULT_HEADERS,
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.header,
    };

    uni.request({
      url: BASE_URL + options.url,
      method: options.method || "GET",
      data: options.data || {},
      header,
      timeout: TIMEOUT,
      success: (res) => handleSuccess(res, resolve, reject),
      fail: (err) => handleError(err, reject),
    });
  });
};

const handleSuccess = (res, resolve, reject) => {
  if (res.statusCode === 200) {
    resolve(res.data);
  } else if (res.statusCode === 401) {
    uni.navigateTo({ url: "/pages/login/login" });
    reject(res.data);
  } else {
    // HTTP 状态码异常
    uni.showToast({ title: `HTTP错误：${res.statusCode}` });
    reject(res);
  }
};

const handleError = (err, reject) => {
  const isNetworkError = err.errMsg.includes("request:fail");
  uni.showToast({
    title: isNetworkError ? "网络连接失败" : "服务器异常",
    icon: "none",
  });
  reject(err);
};
