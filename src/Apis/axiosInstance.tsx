import axios from 'axios';
import { login } from '../redux/auth/authSlice';
const instance = axios.create();
import { useSelector } from 'react-redux';
// Request interceptor

instance.interceptors.request.use(
  function (config) {
    // Thực hiện các thay đổi trước khi request được gửi
    // Ví dụ: Thêm header Authorization
  //  const token =useSelector((state)=>state.auth.token)
    config.headers.authorization = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzUzMTdkZTIxOTc1NDg1MGMyZmM1ZCIsInVzZXJuYW1lIjoibmh1ZHVjMDUwNiIsImZ1bGxOYW1lIjoiRGluaCBOaHUgRFVjIiwicGhvbmUiOiIwOTQ5NDA0OTY0IiwiaWF0IjoxNzAzNjcwMjU5fQ.0d9xRE3XQxpKxNg4Mqsi1XzQb5WslwTvQ_7VWvOUxfk';

    return config;
  },
  function (error) {
    // Xử lý lỗi khi request không thành công
    {
      console.log('chasn')
    }
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  function (response) {
    // Xử lý data trả về từ response
    return response;
  },
  function (error) {
    // Xử lý lỗi khi response không thành công
    return Promise.reject(error);
  }
);

export default instance;