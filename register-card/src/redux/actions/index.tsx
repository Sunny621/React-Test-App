import { Action } from "redux-actions";

export const TOGGLE_MENU = "TOGGLEMENU";

export const toggleMenu = (isMenuOpen:boolean):  Action<boolean> => ({
    type: TOGGLE_MENU,
    payload: isMenuOpen
})