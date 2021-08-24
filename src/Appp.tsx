import './App.css';
import { useState } from 'react';
import { Diary, Entry, User } from './State/DataTypes/user';
import axios from 'axios';

function App() {
  const [user, setUser] = useState<User>();
  const [diary, setDiary] = useState<Diary[]>();
  const [entry, setEntry] = useState<Entry[]>();
  const [isSignup, setSignup] = useState<boolean>(false)

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
    .then(res => {
      setSignup(!isSignup)
      console.log("Successfully Signup")
    })
    .catch(err => console.error("response error : ", err))

  }
  const Login = () =>
  {
    let URL:string = "/api/user/login";
    let email:string = "igi2022@gmail.com";
    let password:string = "17352015";

    let PostRequest = {
      method : "POST",
      body : JSON.stringify({
        email : email,
        password : password
      })
    }

    axios.post(URL, PostRequest)
    .then(res => setUser(res.data))
    .catch(err => console.error("Not Found User"))
  

  }
  const signout = () =>
  {
    setUser(undefined)
    setDiary(undefined)
    setEntry(undefined)
  }
  const createDiary = (userId:string) =>
  {
    let URL:string = "/api/user/diary/create";
    let myDiary:Diary = {
      title : "August",
      desc : "Diary for august month",
      access : "public",
      createdAt : Date.now(),
      userId : userId
    }
    let postRequest = {
      method : "POST",
      body : JSON.stringify(myDiary)
    }
    
    axios.post(URL, postRequest)
    .then(res => {
      console.log("create diary res : ", res)
      setDiary(res.data.diaries)
    })
    .catch(err => console.error("Error while creating diary"))
  }
  const createEntry = (diaryId:string|undefined) =>
  {
    let URL:string = "/api/user/entry/create";
    let myEntry:Entry = {
      title : "2021",
      desc : "This is my entry",
      createdAt : Date.now(),
      diaryId : diaryId
    }
    let postRequest = {
      method : "POST",
      body : JSON.stringify(myEntry)
    }
    
    axios.post(URL, postRequest)
    .then(res => {
      console.log("create entry res : ", res)
      setEntry(res.data.entries)
    })
    .catch(err => console.error("Error while creating entry"))
  }
  const getDiaries = (x:User) =>
  {
    let URL:string = `/api/user/${x.id}/diaries`;
    axios.get(URL)
    .then(res => {
      console.log("response : ", res)
      setDiary(res.data.diaries)
    })
    .catch(err => console.warn("No diareis"))


  }
  const getEntries = (x:Diary) =>
  {
    let URL:string = "/api/user/entries";
  }

  return (
    <div className="App">
      <h1>Home</h1>
      <button disabled={isSignup?false:true} onClick={() => Login()} >Signin</button> &nbsp; &nbsp;
      <button onClick={() => Signup()} >Signup</button> &nbsp; &nbsp;
      <button onClick={() => signout()} disabled={user===undefined?true:user?.id?false:true} >Signout</button>

      {
        user
        ? <div>
            <h1> {user.email} </h1>
            <div>
            {
              user.diaryIds
              ? null
              // : <button onClick={() => createDiary(user.id)} >Create Diary</button>
              : null
            }
            </div>
            <button onClick={() => getDiaries(user)} >Get Diaries</button>
              {
                diary
                ? <div>
                  
                    {
                      diary.map((item:Diary, index:number) => <div key={index} >
                        <button onClick={() => getEntries(item) } > {item.title} </button>
                        <button onClick={() => createEntry(item.id)} >Create Entry</button>
                      </div>)
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
