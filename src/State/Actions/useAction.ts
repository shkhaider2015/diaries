import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "../hook";
import * as actioncreator from "./Actions";

export const useAction = () =>
{
    const dispatch = useAppDispatch()
    const bindActions = bindActionCreators(actioncreator, dispatch);

    return bindActions;
}