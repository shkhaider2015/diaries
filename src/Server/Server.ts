import { belongsTo, createServer, Factory, hasMany, Model } from "miragejs";
import { AllDiariesRoute, CREATE_USER_DIARY, 
  CREATE_USER_ENTRY, DELETE_USER_DIARY, DELETE_USER_ENTRY, DiariesRoute, EntriesRoute, 
  GetCheckRoute, LoginRoute, PostCheckRoute, 
  SignupRoute, 
  UPDATE_USER_ENTRY} from "./Routes";


export const MirageServer = () =>
{
    createServer({
        models: {
            entry: Model.extend({
              diary: belongsTo(),
            }),
            diary: Model.extend({
              entry: hasMany(),
              user: belongsTo(),
            }),
            user: Model.extend({
              diary: hasMany(),
            }),
          },
      
          factories: {
            user: Factory.extend({
              username: 'test',
              password: 'password',
              email: 'test@email.com',
              diary : []
            }),
            entry : Factory.extend({
              title : "empty",
              desc : "empty",
              createdAt : 0
            }),
            diary : Factory.extend({
              access : 'public',
              title : '',
              desc : '',
              createdAt : 0,
              updatedAt : 0,
              entry : []
            })
          },
      
          seeds: (server): any => {
            const entry1 = server.create("entry", { title : "test Title", desc : "test Description", createdAt : Date.now() })
            const diary1 = server.create("diary", { title : 'test diary', desc : 'test Diary Desc', entry : [entry1], access : 'public', createdAt : Date.now(),  })
           server.create("user", { diary : [ diary1 ], username : 'shakeel', password : 'bbg', email : 'shk@test.com' },   )


           const entry2 = server.create("entry", { title : "test Title", desc : "test Description", createdAt : Date.now() })
            const diary2 = server.create("diary", { title : 'test diary2',desc : 'test Diary2 Desc', entry : [entry2], access : 'public', createdAt : Date.now(),  })
           server.create("user", { diary : [ diary2 ], username : 'shahid', password : 'bbg', email : 'shd@test.com' },   )
            
          },

          routes() : void {
              this.get("/api/checkget/:id", GetCheckRoute)
              this.get("/api/checkpost", PostCheckRoute)
              // Post Request For Login
              this.post("/api/user/login", LoginRoute )
              // Post Request For signup
              this.post("/api/user/signup", SignupRoute)
              // Get Request For user's Diaries
              this.get("/api/user/:userid/diaries", DiariesRoute)
              // Get Request for Diary's Entries
              this.get("/api/user/:diaryid/entries", EntriesRoute)
              // Get Request For All diaries
              this.get("/api/alldiaries", AllDiariesRoute)
              

              // Create Diary
              this.post("/api/user/diary/create", CREATE_USER_DIARY)
              // Delete Diary
              this.post("/api/user/diary/delete", DELETE_USER_DIARY)

              // Create Entry
              this.post("/api/user/entry/create", CREATE_USER_ENTRY)
              //update entry
              this.post("/api/user/entry/update", UPDATE_USER_ENTRY )
              //delete entry
              this.post("/api/user/entry/delete", DELETE_USER_ENTRY )
          }

    })
}