import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAction } from "../../State/Actions/useAction";
import { User } from "../../State/DataTypes/user";
import { useAppSelector } from "../../State/hook";

export const SignupComp : FC = () =>
{
    const signupState = useAppSelector(state => state.SignupReducer);
    const {SignupAction} = useAction()
    const navigate = useNavigate()

    const handleSubmit = (e:any) =>
    {
        e.preventDefault()
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const user:User = {
            username,
            email,
            password,
            diaryIds : []
        }
        SignupAction({user})

    }

    if(signupState.loading)
    {
        return <div style={{ display : 'grid', height : '90vh', placeItems : 'center' }} >
            <h1>...Loading</h1>
        </div>
    }

    return <div className="row " style={{ height: '90vh', display: 'grid', placeItems: 'center' }} >
        
    <div className="card p-5 shadow col-lg-6 col-md-8 col-sm-10 col-10" >
        <form className="text-center" onSubmit={(e) => handleSubmit(e)} >
            <legend>Signup</legend>
            {
                signupState.isSignup
                ? <span style={{ fontSize : '10px', color : 'green' }} > Successfully SigneUp </span>
                : signupState.error ? <span style={{ fontSize : '10px', color : 'red' }} >{signupState.error}</span> : ""
            }
            {console.log("Signup data ", signupState.isSignup)}
                <input className="w-100 p-2 mt-3 rounded border border-light shadow-sm " name="username" title="username" placeholder="Username" type="text" required />
            
                <input className="w-100 p-2 mt-3 rounded border border-light shadow-sm " name="email" title="email" placeholder="Email" type="email" required />
            
                <input className="w-100 p-2 mt-3 rounded border border-light shadow-sm " name="password" title="password" placeholder="Password" type="password" required />
            
            <button className="w-75 mt-5 btn btn-primary shadow-sm" type="submit" >Submit</button>
        </form>
        <div className="text-center pt-3">
            <span onClick={() => navigate("/login")} >Already have an account?</span>
        </div>
    </div>
</div>
}