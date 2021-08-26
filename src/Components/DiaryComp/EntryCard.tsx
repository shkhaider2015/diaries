import { WaveSVG } from "../../Static/Static";

export const EntryCardComp = () =>
{
    return <div 
    style={{ width : '18rem', height : '11.2rem' , backgroundColor : 'white' }} 
    className="shadow mt-3 rounded position-relative" >

    <div className="d-flex flex-direction-row justify-content-between ps-2 pe-2" >
        <p> Title </p> <p>1/2/2001</p>
    </div>
    <p className="ps-2 pe-2" >
        Lorem epsum tulu Lorem 
    </p>
    <div className="rounded position-absolute bottom-0" >
        <WaveSVG width="18rem" />
    </div>
</div>
}