export interface User {
    id : string
    username : string
    email : string
    password : string
    diaryIds? : string[]
}

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

export interface Entry {
    id? : string
    title : string
    desc : string
    createdAt : number
    diaryId? : string
}