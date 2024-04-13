import { api } from "../axios";

export function AxiosInterceptor() {
  api.interceptors.response.use(
    function (response) {
      console.log("interceptor", response.data);
      return response.data;
    },
    function (error) {
      return error.response.data;
    }
  );
}
