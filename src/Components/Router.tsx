import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "../State/hook";
import { LoginComp } from "./AuthComponents/LoginComp";
import { SignupComp } from "./AuthComponents/SignupComp";
import { AddDiary } from "./DiaryComp/AddDiary";
import { AddEntry } from "./DiaryComp/AddEntry";
import { Entries } from "./DiaryComp/Entries";
import { UpdateEntry } from "./DiaryComp/UpdateEntry";
import { HomeComp } from "./HomeComp";

export const RouterComp: FC = () => {
    const loginState = useAppSelector(state => state.LoginReducer);

    return <Routes>
        <Route path="/" element={loginState.items ? <HomeComp /> : <LoginComp />} >
            <Route path="/" element={<Entries />} />
            <Route path="/:diaryid/entries" element={<Entries />} />
            <Route path="/newdiary" element={<AddDiary />} />
            <Route path="/:diaryId/newentry" element={<AddEntry />} />
            <Route path="/:diaryId/:entryId/updateentry" element={<UpdateEntry />} />
        </Route>

        {/* <Route path="/home" element={<HomeComp />} >
            <Route path="/" element={<Entries />} />
            <Route path="/newdiary" element={<AddDiary />} />
            <Route path="/newentry" element={<AddEntry />} />
        </Route> */}

        <Route path="/login" element={<LoginComp />} />
        <Route path="/signup" element={<SignupComp />} />

    </Routes>

}