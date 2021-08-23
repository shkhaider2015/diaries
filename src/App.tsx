import { FC } from "react";
import { useAppSelector } from "./State/hook";
import { useAction } from "./State/Actions/useAction";

const App: FC = () => {
    const signup = useAppSelector((state) => state.SignupReducer)
    const login = useAppSelector((state) => state.LoginReducer)
    const { LoginAction, SignupAction } = useAction()


    const Signup = () => {
        let email: string = "igi2022@gmail.com";
        let password: string = "17352015";
        
        SignupAction({
            email,
            password
        });
    }
    const Login = () => {
        let email: string = "igi2022@gmail.com";
        let password: string = "17352015";
        
        LoginAction({
            email,
            password
        });
    }

    return <div>
        <h1>Home </h1>
        <h1> {signup.loading ? "Loading" : null} </h1>
        <h1> {login.loading ? "Loading" : null} </h1>
        <button onClick={() => Login()}  >Login</button>
        <button onClick={() => Signup()} >Signup</button>
    </div>
}

export default App