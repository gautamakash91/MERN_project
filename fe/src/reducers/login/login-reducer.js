import {

} from "../../constants/login/ActionTypes";

const initial_state = {
  name: "",
  email: "",
  phone: "",
  joining_date: "",
  message: ""
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case "SET_EMAIL":
      return state = { ...state, email: action.payload };
    case "SET_NAME":
      return state = { ...state, name: action.payload };
    case "SET_PHONE":
      return state = { ...state, phone: action.payload };
    case "SET_JOINING":
      return state = { ...state, joining_date: action.payload };
    case "SET_SNACKBAR":
      return state = { ...state, message: action.payload };
    default:
      return state;
  }
}