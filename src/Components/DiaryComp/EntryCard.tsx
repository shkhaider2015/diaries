import { Entry } from "../../State/DataTypes/entry";
import { WaveSVG } from "../../Static/Static";

type propTypes = {
    item : Entry
}

export const EntryCardComp = ({ item }:propTypes) =>
{
    const getFormattedTime = (num:number) : string => {
        const date:Date = new Date(num);
        const day:number = date.getDate();
        const month:number = date.getMonth()+1;
        const year:number = date.getFullYear();

        return `${day}-${month}-${year}`
    }

    return <div 
    style={{ width : '18rem', height : '11.2rem' , backgroundColor : 'white' }} 
    className="shadow mt-3 rounded position-relative" >

    <div className="d-flex flex-direction-row justify-content-between ps-2 pe-2" >
        <p className="font-weight-bold" > {item.title} </p> <p> {getFormattedTime(item.createdAt)} </p>
    </div>
    <p className="ps-2 pe-2" >
        {item.desc}
    </p>
    <div className="rounded position-absolute bottom-0" >
        <WaveSVG width="18rem" />
    </div>
</div>
}