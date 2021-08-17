import './App.css';
import { useState } from 'react';
import { Diary, Entry, User } from './State/DataTypes/user';

function App() {
  const [user, setUser] = useState<User>();
  const [diary, setDiary] = useState<Diary[]>();
  const [entry, setEntry] = useState<Entry[]>();


  const Login = () =>
  {
    let URL:string = "/api/user/login"
  //  axios.get("/api/checkget/2")
  //   .then(res => res.data)
  //   .then(json => {
  //     console.log("Login request : ", json)
  //     setUser(json)
  //   })
  //   .catch(err => console.log("GET Error : ", err))

  }
  const getDiaries = (x:User) =>
  {
    let URL:string = "/api/user/diaries";

  }
  const getEntries = (x:Diary) =>
  {
    let URL:string = "/api/user/entries";
  }

  return (
    <div className="App">
      <h1>Home</h1>
      <button onClick={() => Login()} >Signin</button> &nbsp; &nbsp;
      <button>Signout</button>

      {
        user
        ? <div>
            <h1> {user.email} </h1>
            <button onClick={() => getDiaries(user)} >Get Diaries</button> 
              {
                diary
                ? <div>
                    {
                      diary.map((item:Diary, index:number) => <button key={index} onClick={() => getEntries(item) } > {item.title} </button>)
                    }
                    {
                      entry
                      ? <div>
                          {
                            entry.map((item:Entry, index:number) => <div key={index} > {item.title} </div>)
                          }
                        </div>
                      : <span>No Entry Records</span>
                    }
                  </div>
                : <span>No Diary Record</span>
              }
          </div>
        : <div>Please Login</div>
      }
    </div>
  );
}

export default App;
