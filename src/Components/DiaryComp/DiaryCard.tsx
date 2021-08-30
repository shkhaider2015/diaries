import { FC } from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DeleteDiaryAction } from "../../State/Actions/Actions";
import { Diary } from "../../State/DataTypes/diary";
import { PrivateSVG, ThreeDots } from "../../Static/Static";
import { useDropDown } from "../useDropDown";

type propTypes = {
    item : Diary,
    userId : string
}

export const DiaryCard: FC<propTypes> = ({item, userId}) => {

    const navigate = useNavigate();

    const { ref, isComponentVisible, setIsComponentVisible } = useDropDown(false);

    return <div className=" pt-2 ps-2 row " >
        <div className="col-10 " onClick={() => navigate(`/${item.id}/entries`)}   >
            {
                item.access === "private"
                    ? <img src={PrivateSVG} alt="private logo" width='10%' />
                    : null
            }
            <span className=" " style={{ fontWeight: 'bold', marginLeft: '5%', fontSize: 12 }} > {item.title} </span>
        </div>
        <div className="col-2" >
            <ThreeDots width="1rem" height="1rem" className="" onClick={() => setIsComponentVisible(!isComponentVisible)} />
            <Dropdown.Menu show={isComponentVisible} ref={ref} >
                <Dropdown.Item
                    onClick={() => {
                        setIsComponentVisible(!isComponentVisible)
                        DeleteDiaryAction({req : { userId : userId, diaryId : item.id }})
                    }}
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