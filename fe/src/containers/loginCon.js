import React from "react";
import Employee from "../components/login/login";
import { connect } from "react-redux";
import {
  setName,
  setPhone,
  setEmail,
  setJoining,
  addUser
} from "../actions/login/loginActions";

class EmployeesCon extends React.Component {
  render() {
    return (
      <Employee {...this.props} />
    )
  }
}

export const mapStateToProps = (store) => {
  return {
    login: store.login
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    set_name: (name) => {
      dispatch(setName(name))
    },
    set_phone: (name) => {
      dispatch(setPhone(name))
    },
    set_email: (name) => {
      dispatch(setEmail(name))
    },
    set_joining: (name) => {
      dispatch(setJoining(name))
    },
    addUser: (user)=>{
      dispatch(addUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesCon);