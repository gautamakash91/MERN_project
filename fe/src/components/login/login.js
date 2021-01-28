import React from "react";
import { Button, Dialog, DialogContent, DialogTitle, Grid, Icon, IconButton, TextField } from "@material-ui/core";

export default class Employees extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      add_dialog: false
    }

  }

  handleDialog = (val) => {
    this.setState({
      add_dialog: val
    })
  }
  
  render() {
    const {
      login
    } = this.props;

    return (
      <div>
        <IconButton onClick={() => { this.handleDialog(true) }}>
          <Icon>
            add
          </Icon>
        </IconButton>

        <Dialog open={this.state.add_dialog}>
          <DialogTitle>
            ADD USER
          </DialogTitle>
          <DialogContent>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  label="name"
                  value={login.name}
                  variant="outlined"
                  onChange={(e) => { this.props.set_name(e.target.value) }}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="email"
                  value={login.email}
                  variant="outlined"
                  fullWidth
                  onChange={(e) => { this.props.set_email(e.target.value) }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="phone"
                  value={login.phone}
                  variant="outlined"
                  fullWidth
                  onChange={(e) => { this.props.set_phone(e.target.value) }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="joining date"
                  value={login.joining_date}
                  variant="outlined"
                  fullWidth
                  onChange={(e) => { this.props.set_joining(e.target.value) }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  color="secondary"
                  variant="contained"
                  onClick={()=>{
                    this.props.addUser(login)
                  }}
                >
                  ADD USER
                </Button>
              </Grid>
              <Grid item xs={12}>
                {login.message}
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}