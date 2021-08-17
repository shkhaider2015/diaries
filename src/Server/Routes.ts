import { Request } from "miragejs";

export const GetCheckRoute = (schema:any, request:Request) => {
    const id = request.params.id;
    const user = schema.users.find(id);
    console.log("Users : ", user)

    // const id = request.params.id;
    const diary = schema.diaries.find(id);
    console.log("Diaries : ", diary)

    const entry = schema.entries.find(id)
    // console.log("Entries ", entry)

    const Diaries = user._schema.diaries.all();
    // console.log("Diaries : ", Diaries)

    const Entries = user._schema.entries.all();
    // console.log("Entries : ", Entries)

    return entry.attrs
}
export const PostCheckRoute = (schema:any, request:Request) => {
    const res = request.params
    return {}
}

export const SignupRoute = (schema:any, request:any) => {

    return schema.users.all();
}
export const LoginRoute = (schema:any, request:any) => {

    return schema.users.all();
}
export const DiariesRoute = (schema:any, request:any) => {

    return schema.users.all();
}
export const EntriesRoute = (schema:any, request:any) => {

    return schema.users.all();
}

