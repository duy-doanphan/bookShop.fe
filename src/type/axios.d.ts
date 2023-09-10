// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios';

declare module 'axios' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export interface AxiosResponse<T = any> extends Promise<T> {}
}
