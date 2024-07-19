import axios, { AxiosResponse } from 'axios';

interface ApiClient {
  get<T>(url: string): Promise<AxiosResponse<T>>;
}

const apiClient: ApiClient = {
  async get<T>(url: string): Promise<AxiosResponse<T>> {
    return await axios.get<T>(url);
  }
};

export default apiClient;
