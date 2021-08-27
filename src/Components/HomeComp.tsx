import { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { PrivateSVG } from "../Static/Static";

export const HomeComp: FC = () => {

    const navigate = useNavigate();

    return <div className="row" >
        <div className="col-2 pt-3" style={{ backgroundColor: 'white' }} >

            <div className="p-2" >
                <button className="btn btn-primary w-100" onClick={() => navigate("/newdiary")} >Create New</button>
            </div>

            {/* First element */}
            <div className="pt-2 ps-2 row  " >
                <div className="col-10 ">
                    <img src={PrivateSVG} alt="private logo" width='10%' />
                    <span className=" " style={{ fontWeight: 'bold', marginLeft: '5%', fontSize: 12 }} >Diary Name</span>
                </div>
                <div className="col-2" >
                    {/* <button>Remove</button> */}
                </div>
            </div>


        </div>
        <div className="col-10 ps-5">
           <Outlet />
        </div>
    </div>
}