export interface Diary {
    id? : string
    title : string
    desc : string
    access : "public" | "private"
    createdAt? : number
    updatedAt? : number
    userId? : string
    entryIds? : string[]
}

export enum TGetDiary {
    REQUEST = "get-diary-request", 
    SUCCESS = "get-diary-success", 
    FAILURE= "get-diary-failure",
}
export enum TAddDiary {
    REQUEST = "add-diary-request", 
    SUCCESS = "add-diary-success", 
    FAILURE= "add-diary-failure",
}
export enum TUpdateDiary {
    REQUEST = "update-diary-request", 
    SUCCESS = "update-diary-success", 
    FAILURE= "update-diary-failure",
}
export enum TDeleteDiary {
    REQUEST = "delete-diary-request", 
    SUCCESS = "delete-diary-success", 
    FAILURE= "delete-diary-failure",
}

export interface IDiaryState {
    loading : boolean
    error : string | null
    items : Diary[] | null
} 