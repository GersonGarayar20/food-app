import { api } from "../axios";

export function AxiosInterceptor() {
  api.interceptors.response.use(
    function (response) {
      return response.data;
    },
    function (error) {
      return error.response.data;
    }
  );
}
