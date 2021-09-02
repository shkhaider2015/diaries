import { FC } from "react";
import { RouterComp } from "./Components/Router";
import { NavComp } from "./Components/NavComp";

const App: FC = () => {
    return <div style={{ width : '100vw', overflowX : 'hidden' }} >
        <NavComp />
        <div >
        <RouterComp />
        </div>
    </div>
}

export default App