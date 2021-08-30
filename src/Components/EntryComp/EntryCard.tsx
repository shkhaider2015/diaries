import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAction } from "../../State/Actions/useAction";
import { Entry } from "../../State/DataTypes/entry";
import { WaveSVG, ThreeDots } from "../../Static/Static";
import { useDropDown } from "../useDropDown";

type propTypes = {
    item: Entry,
    diaryId : string
}

export const EntryCardComp = ({ item, diaryId }: propTypes) => {

    const { ref, isComponentVisible, setIsComponentVisible } = useDropDown(false);
    const { DeleteEntryAction } = useAction();

    const navigate = useNavigate();

    const getFormattedTime = (num: number): string => {
        const date: Date = new Date(num);
        const day: number = date.getDate();
        const month: number = date.getMonth() + 1;
        const year: number = date.getFullYear();

        return `${day}-${month}-${year}`
    }


    return <div
        style={{ width: '18rem', height: '11.2rem', backgroundColor: 'white' }}
        className="shadow mt-3 rounded position-relative" >

        <div className="d-flex flex-direction-row justify-content-between ps-2 pe-2 pt-2" >
            <p className="font-weight-bold" > {item.title} </p> <div className="d-flex " > <p style={{ fontSize: '0.7rem', opacity: 0.5 }} > {getFormattedTime(item.createdAt)} </p>
                <ThreeDots width="1.3rem" height="1.3rem" className="dropdown" onClick={() => setIsComponentVisible(!isComponentVisible)} />
                <Dropdown.Menu show={isComponentVisible} ref={ref} >
                    <Dropdown.Item
                     title="haider 1"
                      onClick={() => {
                                setIsComponentVisible(!isComponentVisible)
                                navigate(`/${diaryId}/${item.id}/updateentry`)
                            }}
                    >Edit</Dropdown.Item>

                    <Dropdown.Item
                     title="haider 2"
                     onClick={() => {
                         setIsComponentVisible(!isComponentVisible)
                         DeleteEntryAction({req : {entryId : item.id, diaryId : diaryId}})
                    }}
                      >Delete</Dropdown.Item>
                    
                </Dropdown.Menu>
                
            </div>
        </div>
        <p className="ps-2 pe-2" >
            {item.desc}
        </p>
        <div className="rounded position-absolute bottom-0" >
            <WaveSVG width="18rem" />
        </div>
    </div>
}