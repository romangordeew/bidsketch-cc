import {CHECKBOX_SWITCHED, GUIDED_FLOW_STARTED} from "./types";

export const start = () => ({type: GUIDED_FLOW_STARTED});
export const checkboxSwitched = (id) => ({type: CHECKBOX_SWITCHED, id});