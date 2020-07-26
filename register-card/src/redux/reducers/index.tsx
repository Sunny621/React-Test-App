import { combineReducers } from "redux";
import { handleActions, Action } from "redux-actions";

import { TOGGLE_MENU } from "../actions";

interface RegisterState {
  isMenuOpen: boolean;
}

const initialState: RegisterState = {
  isMenuOpen: false,
};

export const registerReducerMap = {
  [TOGGLE_MENU]: (state = initialState, action: Action<boolean>) => ({
    ...state,
    isMenuOpen: action.payload,
  }),
};

export const reducers = combineReducers({
  registerReducer: handleActions<RegisterState, boolean>(
    registerReducerMap,
    initialState
  ),
});
