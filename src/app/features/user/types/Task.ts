export interface Task {
    id: string,
    title: string,
    description: string,
    deadLine: string,
    taskCategoryId: string,
    userId: string,
    isCompleted: boolean
}