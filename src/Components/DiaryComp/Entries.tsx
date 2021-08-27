import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { AddNewEntry } from "../../Static/Static";
import { EntryCardComp } from "./EntryCard";

export const Entries: FC = () => {
    
    const navigate = useNavigate();

    return <div className="row"  >
        <div className="col-4" >
            <div
                onClick={() => navigate("/newentry")}
                style={{ width: '18rem', height: '11.2rem', backgroundColor: 'white', display: 'grid', placeItems: 'center' }}
                className="shadow mt-3 rounded btn" >

                <div>
                    <AddNewEntry width="5rem" height="5rem" />
                    <h6>New Entry</h6>
                </div>
            </div>
        </div>
        {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                .map((item: any, index: number) => <div key={index} className="col-4" >
                    <EntryCardComp />
                </div>)
        }
    </div>
}