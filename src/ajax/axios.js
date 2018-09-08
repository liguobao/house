import axios from 'axios';
import router from './../router';
import Vue from 'vue'

const vue = new Vue();

const $ajax = axios.create({
  timeout: 5000,
  baseURL: 'https://house-map.cn/api/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
});

$ajax.interceptors.request.use(
  config => {
    if(localStorage.token) {
      config.headers.token = localStorage.getItem('token')
    }
    return config;
  }
);

$ajax.interceptors.response.use(
  response => {
    if(response.data.success || response.data.isSuccess) {
      return response.data
    }else {
      const message = response.data.error ? response.data.error : '请求出错';
      vue.$message.error(message);
      throw new Error(message)
    }
  },
  error => {
    router.replace({
      path: '/'
    });
    return Promise.reject(error.response)
  }
);

export default $ajax