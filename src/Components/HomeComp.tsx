import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAction } from "../State/Actions/useAction";
import { Diary } from "../State/DataTypes/diary";
import { useAppSelector } from "../State/hook";
import { PrivateSVG } from "../Static/Static";

export const HomeComp: FC = () => {

    const navigate = useNavigate();
    const { DiaryAction } = useAction();
    const user = useAppSelector(state => state.LoginReducer);
    const diary = useAppSelector(state => state.DiaryReducer);

    useEffect(
        () => {
            if (user.items) {
                DiaryAction({ userid: user.items.id })
            }
        }, [user]
    )

    return <div className="row" >
        {/* {console.log("Diary : ", diary.items )} */}
        <div className="col-2 pt-3" style={{ backgroundColor: 'white', height : '90vh' }} >

            <div className="p-2" >
                <button className="btn btn-primary w-100" onClick={() => navigate("/newdiary")} >Create New</button>
            </div>

            {
                diary.items?.map(
                    (item: Diary, index: number) => <div onClick={() => navigate(`/${item.id}/entries`)} key={index} className=" pt-2 ps-2 row " >
                        <div className="col-10 ">
                            {
                                item.access === "private"
                                ? <img src={PrivateSVG} alt="private logo" width='10%' />
                                : null
                            }
                            <span className=" " style={{ fontWeight: 'bold', marginLeft: '5%', fontSize: 12 }} > {item.title} </span>
                        </div>
                        <div className="col-2" >
                            {/* <button>Remove</button> */}
                        </div>
                    </div>
                )
            }
            {/* First element */}
            {/* <div className="pt-2 ps-2 row  " >
                <div className="col-10 ">
                    <img src={PrivateSVG} alt="private logo" width='10%' />
                    <span className=" " style={{ fontWeight: 'bold', marginLeft: '5%', fontSize: 12 }} >Diary Name</span>
                </div>
                <div className="col-2" >
                    <button>Remove</button>
                </div>
            </div> */}


        </div>
        <div className="col-10 ps-5">
            <Outlet />
        </div>
    </div>
}