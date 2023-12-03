import { AxiosResponse } from "axios";

const interceptor = (response : AxiosResponse<any>) => {
    response.data = JSON.parse(response.data);
    return response;
}

export default interceptor;