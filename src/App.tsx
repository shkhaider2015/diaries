import { FC } from "react";
import { RouterComp } from "./Components/Router";
import { NavComp } from "./Components/NavComp";
import { useAppSelector } from "./State/hook";

const App: FC = () => {

    const diary = useAppSelector(state => state.DiaryReducer);
    const entry = useAppSelector(state => state.EntryReducer);
    const login = useAppSelector(state => state.LoginReducer);
    const signup = useAppSelector(state => state.SignupReducer);

    return <div>
        {console.log("Diary Rducer : ", diary.items)}
        {console.log("Entry Rducer : ", entry.items)}
        {console.log("Login Rducer : ", login.items)}
        {console.log("Signup Rducer : ", signup.isSignup)}
        <NavComp />
        <div className="" >
        <RouterComp />
        </div>
    </div>
}

export default App