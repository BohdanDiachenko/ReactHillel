type MyPick <T, K extends keyof T> = Pick<T, K>

interface State {
    name: string;
    age: number;
    isToggle: boolean;
    task: string;
    drawerOpen: boolean;
}

export type TaskState = MyPick <State, 'name' | 'age' | 'isToggle'>
export type AppState = MyPick <State, 'task' | 'drawerOpen'>

export interface Task {
    title: string;
    description: string;
}
