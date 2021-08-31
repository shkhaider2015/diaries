import { FC, useEffect, useState } from "react";
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
    const [userId, setUserId] = useState<string | undefined>();

    useEffect(
        () => {
            if (user.items) {
                DiaryAction({ userid: user.items.id })
                setUserId(user.items.id);
            }
            // eslint-disable-next-line
        }, [user]
    )


    return <div className="row" >
       

<div className="col-3 col-sm-3 col-md-2 col-lg-2 pt-3" style={{ backgroundColor: '#f2f2f2', height: '90vh' }} >

        <div className="p-2" >
            <button className="btn btn-primary w-100" onClick={() => navigate("/newdiary")} >Create New</button>
        </div>
        {
            diary.items?.map(
                (item: Diary, index: number) => userId ? <DiaryCard key={index} item={item} userId={userId} /> : null
            )
        }
    </div>
        <div className="col-9 col-sm-9 col-md-10 col-lg-10 ps-5">
            <Outlet />
        </div>
    </div>
}