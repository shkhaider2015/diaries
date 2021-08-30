import { FC } from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAction } from "../../State/Actions/useAction";
import { Diary } from "../../State/DataTypes/diary";
import { VisibleSVG, InvisibleSVG, ThreeDots } from "../../Static/Static";
import { useDropDown } from "../useDropDown";

type propTypes = {
    item : Diary,
    userId : string
}

export const DiaryCard: FC<propTypes> = ({item, userId}) => {

    const navigate = useNavigate();
    const { DeleteDiaryAction } = useAction();

    const { ref, isComponentVisible, setIsComponentVisible } = useDropDown(false);

    const handleDeleteDiary = () => {
        let req = {
            userId,
            diaryId : item.id
        }
        DeleteDiaryAction({req})
        setIsComponentVisible(!isComponentVisible)
    }

    return <div className=" pt-2 pb-2 ps-2 row m-1 shadow-sm rounded" >
        <div className="col-10  " onClick={() => navigate(`/${item.id}/entries`)}   >
            {
                item.access === "private"
                    ? <InvisibleSVG width="1rem" height="1rem" />
                    : <VisibleSVG width="1rem" height="1rem" />
            }
            <span className="" style={{ fontWeight: 'bold', marginLeft: '5%', fontSize: 12 }} > {item.title} </span>
        </div>
        <div className="col-2 " >
            <ThreeDots width="1rem" height="1rem" className="" onClick={() => setIsComponentVisible(!isComponentVisible)} />
            <Dropdown.Menu show={isComponentVisible} ref={ref} >
                <Dropdown.Item
                    onClick={() => handleDeleteDiary() }
                >Delete</Dropdown.Item>
                <Dropdown.Item
                    onClick={() => {
                        setIsComponentVisible(!isComponentVisible)
                    }}
                >Item 2</Dropdown.Item>
            </Dropdown.Menu>
        </div>
    </div>
}