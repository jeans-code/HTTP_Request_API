import type { Config, Context } from "@netlify/functions";
import axios from "axios";
import type { AxiosResponse, AxiosPromise, AxiosError, AxiosRequestConfig } from "axios";


export default async (req: Request, context: Context) => {
  //axios.defaults.maxContentLength = 20 * 1024 * 1024; // 20 MB
  //axios.defaults.maxBodyLength = 20 * 1024 * 1024; // 20 MB

  
  


  
}

export const config: Config = {
  path: "/api/simple/GetRequest",
}
