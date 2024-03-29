import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';
import {toast} from 'react-toastify';
import { getToken } from './token';
import { BACKEND_URL, REQUEST_TIMEOUT, APIRoute } from '../const';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ error: string; config: AxiosRequestConfig }>) => {
      if (error.response && shouldDisplayError(error.response)) {
        if (error.config.url === APIRoute.Login &&
            error.config.method === 'get') {
          throw error;
        }
        if (error.config.url === APIRoute.Login &&
          error.config.method === 'post') {
          throw error;
        }
        if (error.config.url && (error.config.url.includes('/films/') || error.config.url.includes('/comments/'))) {
          throw error;
        }
        toast.warn(error.response.data.error);
        // eslint-disable-next-line no-console
        console.log(error.config.url);
      }
      throw error;
    }
  );

  return api;
};
