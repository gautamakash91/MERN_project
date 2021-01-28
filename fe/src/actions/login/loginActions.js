
export function setName(name) {
  return {
    type: "SET_NAME",
    payload: name
  }
}

export function setPhone(phone) {
  return {
    type: "SET_PHONE",
    payload: phone
  }
}

export function setEmail(email) {
  return {
    type: "SET_EMAIL",
    payload: email
  }
}

export function setJoining(date) {
  return {
    type: "SET_JOINING",
    payload: date
  }
}

export function addUser(user) {
  return (dispatch) => {
    return fetch("http://localhost:8000/add_employee", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        phone: user.phone,
        joining_date: user.joining_date
      })
    }).then(res => res.json())
      .then((resJson) => {
        dispatch(set_snackbar(resJson.status, resJson.result));
      })
  }
}

export function set_snackbar(status, message){
  return {
    type: "SET_SNACKBAR",
    payload: message
  }
}
