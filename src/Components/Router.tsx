import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "../State/hook";
import { LoginComp } from "./AuthComponents/LoginComp";
import { SignupComp } from "./AuthComponents/SignupComp";
import { HomeComp } from "./HomeComp";

export const RouterComp:FC = () =>
{
    const loginState = useAppSelector(state => state.LoginReducer);

    return <Routes>
        <Route path="/" element={loginState.items ? <HomeComp /> : <LoginComp /> } />
        <Route path="/login" element={<LoginComp />} />
        <Route path="/signup" element={<SignupComp />} />
    </Routes>

}