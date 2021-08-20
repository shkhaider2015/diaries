import { FC } from "react";
import { useAppDispatch, useAppSelector } from "./State/hook";
import { Login, Signup } from "./State/Slices/Authentications";

const App:FC = () =>
{
    const auth = useAppSelector((state) => state.AuthReducer)
    const dispatch = useAppDispatch()

    return <div>
        <h1>Home </h1>
        {console.log("Login data : ", auth.login.data)}
        {console.log("Signup data : ", auth.signup.isSignup)}
        <button onClick={() => dispatch(Login({ type : 'success', payload : "Yes Login" }))} >Login</button>
        <button onClick={() => dispatch(Signup({ type : 'success', payload : "Sucsess signup " }))} >Signup</button>
    </div>
}

export default App