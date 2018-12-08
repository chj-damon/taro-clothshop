import Taro from '@tarojs/taro';
import { baseUrl, noConsole } from '../config';

const requestData = {
  platform: 'wap',
  rent_mode: 2
};

export default options => {
  return Taro.request({
    url: baseUrl + options.url,
    data: {
      ...requestData,
      ...options.data
    },
    header: {
      'Content-Type': 'application-json'
    },
    method: options.method
  });
};
