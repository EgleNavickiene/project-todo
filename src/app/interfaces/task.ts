import { User } from "./user";

export interface Task {
    id?: number,
    title: string,
    author: string,
    completed: boolean // true arba false
    priority? : string
    userId? : number
    user? : User   // http://localhost:3000/tasks?_expand=user
}
