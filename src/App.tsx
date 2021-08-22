import { FC } from "react";
import { useAppDispatch, useAppSelector } from "./State/hook";
import { Login, Signup } from "./State/Slices/Authentications";
import * as actioncreator from "./State/Actions/Actions"
import { bindActionCreators } from "redux";

const App: FC = () => {
    const signup = useAppSelector((state) => state.SignupReducer)
    const dispatch = useAppDispatch()
    const { SignupAction } = bindActionCreators(actioncreator, dispatch);


    const Signup = () => {
        let email: string = "igi2022@gmail.com";
        let password: string = "17352015";
        
        SignupAction({
            email,
            password
        });
    }

    return <div>
        <h1>Home </h1>
        {console.log("Login data : ", signup.loading)}
        {console.log("Signup data : ", signup.item)}
        <h1> {signup.loading ? "Loading" : null} </h1>
        <button >Login</button>
        <button onClick={() => Signup()} >Signup</button>
    </div>
}

export default App