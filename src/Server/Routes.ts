import { Request, Response } from "miragejs";

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

export const SignupRoute = (schema:any, request:Request) => {
    let attrs = JSON.parse(request.requestBody);
    let body = JSON.parse(attrs.body);
    let email = body.email;
    let password = body.password;

    let user = schema.users.findBy({ email : email });

    if(user)
    {
        console.log("User already exist")
        return new Response(401)
    }


    
    return schema.users.create(body);
}
export const LoginRoute = (schema:any, request:Request) => {
    let req = JSON.parse(request.requestBody);
    let body = JSON.parse(req.body)
    let userId = body.id;
    let email = body.email;
    let password = body.password;

    let user = schema.users.find(userId);

    if(!user)
    {
        return new Response(401)
    }
    else
    {
       console.log("Backend / Login / User : ", user)
    }

    return user.attrs;
}
export const DiariesRoute = (schema:any, request:any) => {

    return schema.users.all();
}
export const EntriesRoute = (schema:any, request:any) => {

    return schema.users.all();
}

export const AllDiariesRoute = (schema:any) => {

    return schema.diaries.all();
}

