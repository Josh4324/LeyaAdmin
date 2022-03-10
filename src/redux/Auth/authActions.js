import * as actionTypes from "./types";
import axios from "axios";

import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

//const url = 'http://142.93.58.146:2304/users/login';

const url = "http://localhost:4200/api/v1/user/login";

export const loginUser = (userData, history) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(url, userData);

    const { data } = response;
    console.log(data);
    if (data.status === "Success") {
      dispatch(setLoading(false));
      localStorage.setItem("jwtToken", data.token);
      setAuthToken(data.token);
      //dispatch(fetchAccessList());
      const decoded = jwt_decode(data.token);
      console.log(decoded);
      dispatch(setCurrentUser(decoded));
      history.push("/app");
    }

    dispatch(setLoading(false));
  } catch (error) {
    console.log("errors", error);
    dispatch(setLoading(false));
    dispatch({
      type: actionTypes.SET_ERRORS,
      // payload: error.response.data.responseMessage,
    });
  }
};

export const getUserData = (history) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    console.log("running");
    const response = await axios.get("http://localhost:4200/api/v1/user", {
      headers: {
        authorization: "Token " + localStorage.getItem("jwtToken"),
      },
    });
    const { data } = response;
    console.log(data.data[0]);
    if (data.status === "Success") {
      dispatch(setLoading(false));
      dispatch(setCurrentUser(data.data[0]));
    }
    dispatch(setLoading(false));
  } catch (error) {
    console.log("errors", error);
    dispatch(setLoading(false));
    dispatch({
      type: actionTypes.SET_ERRORS,
      // payload: error.response.data.responseMessage,
    });
  }
};

const fetchAccessList = () => () => {
  try {
    const response = axios.get("http://142.93.58.146:2304/users/getaccesslist");
    console.log(response.data);

    if (response.data) {
      localStorage.setItem("accessList", response.data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const setCurrentUser = (decoded) => {
  // console.log(decoded);

  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: decoded,
  };
};

export const setLoading = (state) => {
  return {
    type: actionTypes.LOGIN_LOADING,
    payload: state,
  };
};

export const clearErrors = () => {
  return {
    type: actionTypes.CLEAR_LOGIN_ERROR,
  };
};
