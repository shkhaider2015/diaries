import { belongsTo, createServer, Factory, hasMany, Model } from "miragejs";
import { DiariesRoute, EntriesRoute, GetCheckRoute, LoginRoute, PostCheckRoute } from "./Routes";


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
              this.post("/api/user/login", LoginRoute )
              this.get("/api/user/diaries", DiariesRoute)
              this.get("/api/user/entries", EntriesRoute)

          }
    })
}