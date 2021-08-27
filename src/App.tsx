import { FC } from "react";
import { RouterComp } from "./Components/Router";
import { NavComp } from "./Components/NavComp";

const App: FC = () => {

    return <div>
        <NavComp />
        <div className="" >
        <RouterComp />
        </div>
    </div>
}

export default App