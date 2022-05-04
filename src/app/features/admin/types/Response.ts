import { Task } from "./Task";
export interface Response {
    data: Array<Task>,
    succeeded: string,
    message: string,
    statusCode: boolean

}