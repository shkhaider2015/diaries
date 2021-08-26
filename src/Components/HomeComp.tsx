import { FC } from "react";
import { Dropdown, Nav, NavDropdown } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import { PrivateSVG, ThreeDots, AddNewEntry } from "../Static/Static";
import { EntryCardComp } from "./DiaryComp/EntryCard";

export const HomeComp: FC = () => {
    
    // const handleSubmit = (x: any) => {
    //     x.preventDefault();
    //     const value: string = x.target.addDiary.value


    //     x.target.addDiary.value = ""
    // }

    const navigate = useNavigate();

    return <div className="row" >
        <div className="col-2 pt-3" style={{ backgroundColor: 'white' }} >

            {/* <div className="p-2 row  " >
                <div className="col-12">
                    <form onSubmit={(e) => handleSubmit(e)} className="d-flex justify-content-between " style={{ width: '100%' }} >
                        <input name="addDiary" placeholder="Add New Diary" type="text" required className="w-75 shadow-sm border " />
                        <button type="submit" className="btn btn-primary ms-3" >Add</button>
                    </form>
                </div>
            </div> */}

            <div className="p-2" >
                <button className="btn btn-primary w-100" onClick={() => navigate("/newdiary")} >Create New</button>
            </div>

            {/* First element */}
            <div className="pt-2 ps-2 row  " >
                <div className="col-10 ">
                    <img src={PrivateSVG} width='10%' />
                    <span className="btn " style={{ fontWeight: 'bold', marginLeft: '5%', fontSize: 12 }} >Diary Name</span>
                </div>
                <div className="col-2" >
                    {/* <button>Remove</button> */}
                </div>
            </div>

            {/* second element */}
            <div className="p-2 row  " >
                <div className="col-10 ">
                    <img src={PrivateSVG} width='10%' />
                    <span style={{ fontWeight: 'bold', marginLeft: '5%', fontSize: 12 }} >Diary Name</span>
                </div>
                <div className="col-1" >
                    {/* <img src={ThreeDots} alt="" width="5" /> */}
                </div>
            </div>

            {/* Thired element */}
            <div className="p-2 row  " >
                <div className="col-10 ">
                    <img src={PrivateSVG} width='10%' />
                    <span style={{ fontWeight: 'bold', marginLeft: '5%', fontSize: 12 }} >Diary Name</span>
                </div>
                <div className="col-1" >
                    {/* <img src={ThreeDots} alt="" width="5" /> */}
                </div>
            </div>


        </div>
        <div className="col-10 ps-5">
           <Outlet />
        </div>
    </div>
}