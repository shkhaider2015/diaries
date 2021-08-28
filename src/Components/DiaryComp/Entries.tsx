import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAction } from "../../State/Actions/useAction";
import { Entry } from "../../State/DataTypes/entry";
import { useAppSelector } from "../../State/hook";
import { AddNewEntry } from "../../Static/Static";
import { EntryCardComp } from "./EntryCard";

export const Entries: FC = () => {

    const navigate = useNavigate();
    const { diaryid } = useParams();
    const { EntryAction } = useAction();
    const entries = useAppSelector(state => state.EntryReducer);

    useEffect(
        () => {
            if (diaryid) {
                EntryAction({ diaryId: diaryid })
            }
        }, [diaryid]
    )

    if (diaryid) {

        if(entries.loading)
        {
            return <div style={{ height : '90vh', display : 'grid', placeItems : 'center' }} >
                <h1>...Loading</h1>
            </div>
        }

        return <div className="row"  >
            <div className="col-4" >
                <div
                    onClick={() => navigate(`/${diaryid}/newentry`)}
                    style={{ width: '18rem', height: '11.2rem', backgroundColor: 'white', display: 'grid', placeItems: 'center' }}
                    className="shadow mt-3 rounded btn" >

                    <div>
                        <AddNewEntry width="5rem" height="5rem" />
                        <h6>New Entry</h6>
                    </div>
                </div>
            </div>
            {
                entries.items?.map(
                    (item: Entry, index: number) => <div key={index} className="col-4" >
                        <EntryCardComp item={item} />
                        <button onClick={() => navigate(`/${diaryid}/${item.id}/updateentry`)} >Update</button>
                    </div>
                )
            }
        </div>
    }

    return <div className="row"  >
        <div className="col-4" >
            {/* <div
                onClick={() => navigate("/diaryid/newentry")}
                style={{ width: '18rem', height: '11.2rem', backgroundColor: 'white', display: 'grid', placeItems: 'center' }}
                className="shadow mt-3 rounded btn" >

                <div>
                    <AddNewEntry width="5rem" height="5rem" />
                    <h6>New Entry</h6>
                </div>
            </div> */}
        </div>
        {/* {
            entries.items?.map(
                (item: Entry, index: number) => <div key={index} className="col-4" >
                    <EntryCardComp item={item} />
                </div>
            )
        } */}
        <h2>No Diary Selected</h2>
    </div>
}