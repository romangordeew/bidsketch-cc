import * as actions from '../actions/types';
import {times} from "lodash";
import {NuMBER_OF_PAGES} from "../utils/const";

const initialState = {
  flowStarted: false,
  checkboxes: times(NuMBER_OF_PAGES * 2, id => ({checked: false, id})),
  activePage: 0,
  editingLocked: false
};

export default function document(state = initialState, action) {
  switch (action.type) {
    case actions.GUIDED_FLOW_STARTED:
      return {
        ...state,
        flowStarted: true
      };
    case actions.CHECKBOX_SWITCHED:
      return {
        ...state,
        checkboxes: state.checkboxes.map((c, i) => action.id === i
          ? ({
            ...c,
            checked: !c.checked
          })
          : c)
      };
    case actions.PAGE_ACTIVATED:
      return {
        ...state,
        activePage: action.i
      };
    case actions.LOCKED_EDITING:
      return {
        ...state,
        editingLocked: true
      };
    default:
      return state;
  }
}
