export interface Entry {
    id? : string
    title : string
    desc : string
    createdAt : number
    diaryId? : string
}

export interface IEntryState {
    loading : boolean
    error : string | null
    items : Entry[] | null
}