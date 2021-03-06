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

    // const Diaries = user._schema.diaries.all();
    // console.log("Diaries : ", Diaries)

    // const Entries = user._schema.entries.all();
    // console.log("Entries : ", Entries)

    return entry.attrs
}
export const PostCheckRoute = (schema:any, request:Request) => {
    // const res = request.params
    return {}
}

export const SignupRoute = (schema:any, request:Request) => {
    let attrs = JSON.parse(request.requestBody);
    let body = JSON.parse(attrs.body);
    let email = body.email;
    // let password = body.password;

    let user = schema.users.findBy({ email : email });

    if(user)
    {
        return new Response(401)
    }


    
    return schema.users.create(body);
}
export const LoginRoute = (schema:any, request:Request) => {
    let req = JSON.parse(request.requestBody);
    let body = JSON.parse(req.body)
    let email = body.email;

    let user = schema.users.findBy({email});

    if(!user)
    {
        return new Response(401)
    }
    else
    {
    }

    return user.attrs;
}
export const DiariesRoute = (schema:any, request:Request) => {
    let userId = request.params.userid;
    if(!userId) return new Response(401);

    let user = schema.users.find(userId);
    if(!user) return new Response(402);

    return schema.users.find(userId).diary
}
export const EntriesRoute = (schema:any, request:Request) => {
    let diaryId = request.params.diaryid;
    if(!diaryId) return new Response(401)

    let diary = schema.diaries.find(diaryId);
    if(!diary) return new Response(402)

    return schema.diaries.find(diaryId).entry;
}

export const AllDiariesRoute = (schema:any) => {

    return schema.diaries.all();
}

export const CREATE_USER_DIARY = (schema:any, request:Request) =>
{
    let req = JSON.parse(request.requestBody);
    let body = JSON.parse(req.body);

    let user = schema.users.find(body.userId);

    if(!user) return new Response(400)

    let jj = schema.diaries.create(body)
    user.diaryIds.push(jj.attrs.id)

    return schema.users.find(body.userId).diary
}

export const CREATE_USER_ENTRY = (schema:any, request:Request) =>
{
    let req = JSON.parse(request.requestBody);
    let body = JSON.parse(req.body);
    
    let diary = schema.diaries.find(body.diaryId);

    if(!diary) return new Response(400)

    let newEntry = schema.entries.create(body)
    diary.entryIds.push(newEntry.attrs.id)

    return schema.diaries.find(body.diaryId).entry
}

export const UPDATE_USER_ENTRY = (schema:any, request:Request) => {
    let req = JSON.parse(request.requestBody);
    let body = JSON.parse(req.body);
    let entryId = body.entryId;
    let diaryId = body.diaryId;
    let title = body.title;
    let desc = body.desc;
    let updatedAt = body.updatedAt;

    schema.db.entries.update(entryId, {title : title, desc : desc, updatedAt : updatedAt})

    return schema.diaries.find(diaryId).entry;
}

export const DELETE_USER_ENTRY = (schema:any, request:Request) => {
    let req = JSON.parse(request.requestBody);
    let body = JSON.parse(req.body);
    let entryId = body.entryId;
    let diaryId = body.diaryId;

    schema.entries.find(entryId).destroy();

    return schema.diaries.find(diaryId).entry
}

export const DELETE_USER_DIARY = (schema:any, request:Request) => {
    let req = JSON.parse(request.requestBody);
    let body = JSON.parse(req.body);
    let userId = body.userId;
    let diaryId = body.diaryId;

    schema.diaries.find(diaryId).destroy();

    return schema.users.find(userId).diary
}
