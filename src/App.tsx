import './App.css';
import { useState } from 'react';
import { Diary, Entry, User } from './State/DataTypes/user';
import axios from 'axios';

function App() {
  const [user, setUser] = useState<User>();
  const [diary, setDiary] = useState<Diary[]>();
  const [entry, setEntry] = useState<Entry[]>();

  const Signup = () => {
    let URL:string = "/api/user/signup";
    let email:string = "igi2022@gmail.com";
    let password:string = "17352015";
    let PostRequest = {
      method : "POST",
      body : JSON.stringify({
        email,
        password
      })
    }

    axios.post(URL, PostRequest)
    .then(res => setUser(res.data.user))
    .catch(err => console.error("response error : ", err))

  }
  const Login = () =>
  {
    let URL:string = "/api/user/login";
    let PostRequest = {
      method : "POST",
      body : JSON.stringify({
        id : user?.id,
        email : user?.email,
        password : user?.password
      })
    }

    axios.post(URL, PostRequest)
    .then(res => setUser(res.data))
    .catch(err => console.error("Not Found User"))
  

  }
  const createDiary = () =>
  {
    
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
      <button disabled={user===undefined?true:false} onClick={() => Login()} >Signin</button> &nbsp; &nbsp;
      <button onClick={() => Signup()} >Signup</button> &nbsp; &nbsp;
      <button disabled={user===undefined?true:user?.id?true:false} >Signout</button>

      {
        user
        ? <div>
            <h1> {user.email} </h1>
            <div>
            {
              user.diaryIds
              ? null
              : <button>Create Diary</button>
            }
            </div>
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
