import {CHECKBOX_SWITCHED, GUIDED_FLOW_STARTED, LOCKED_EDITING, PAGE_ACTIVATED} from "./types";

export const start = () => ({type: GUIDED_FLOW_STARTED});
export const switchCheckbox = (id) => ({type: CHECKBOX_SWITCHED, id});
export const activatePage = (i) => ({type: PAGE_ACTIVATED, i});
export const lockEditing = () => ({type: LOCKED_EDITING});