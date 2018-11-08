import * as actions from '../actions/types';
import {times} from "lodash";

const initialState = {
  flowStarted: false,
  checkboxes: times(4, id => ({checked: false, id}))
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
    default:
      return state;
  }
}
