import { FC, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import { useAction } from "../State/Actions/useAction";
import { Diary } from "../State/DataTypes/diary";
import { useAppSelector } from "../State/hook";
import { DiaryCard } from "./DiaryComp/DiaryCard";

export const HomeComp: FC = () => {

    const navigate = useNavigate();
    const { DiaryAction } = useAction();
    const user = useAppSelector(state => state.LoginReducer);
    const diary = useAppSelector(state => state.DiaryReducer);
    const [userId, setUserId] = useState<string|undefined>();

    useEffect(
        () => {
            if (user.items) {
                DiaryAction({ userid: user.items.id })
                setUserId(user.items.id);
            }
        }, [user]
    )

    return <div className="row" >
        <div className="col-2 pt-3" style={{ backgroundColor: 'white', height: '90vh' }} >

            <div className="p-2" >
                <button className="btn btn-primary w-100" onClick={() => navigate("/newdiary")} >Create New</button>
            </div>
            <div className="pt-2 ps-2 row">
                <div className="col-10">
                    <span style={{ fontWeight: 'bold', marginLeft: '5%', fontSize: 12 }} >Public Diaries</span>
                </div>
                <div className="col-2">
                </div>
            </div>
            {
                diary.items?.map(
                    (item:Diary, index:number) => userId ? <DiaryCard key={index} item={item} userId={userId} /> : null
                )
            }
        </div>
        <div className="col-10 ps-5">
            <Outlet />
        </div>
    </div>
}