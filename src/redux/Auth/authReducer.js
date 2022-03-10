import * as actionTypes from "./types";
import isEmpty from "../../utils/isEmpty";

const initialState = {
  loginLoading: false,
  loginError: null,
  isAuthenticated: false,
  user: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_LOADING:
      return {
        ...state,
        loginLoading: action.payload,
      };
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: action.payload ? true : false,
        user: action.payload,
        loginLoading: false,
      };
    case actionTypes.SET_ERRORS:
      return {
        ...state,
        loginError: action.payload,
        loginLoading: false,
      };

    default:
      return state;
  }
}
