import type { Config, Context } from "@netlify/functions";
import axios from "axios";
import type { AxiosResponse, AxiosPromise, AxiosError } from "axios";


export default async (req: Request, context: Context) => {
  
}

export const config: Config = {
  path: "/api/simple/GetRequest",
}
