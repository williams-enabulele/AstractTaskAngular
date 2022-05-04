export interface Task {
    id: string,
    title: string,
    description: string,
    deadline: string,
    taskCategoryId: string,
    userId: string,
    isCompleted: boolean
}