import React, { Component, Fragment } from "react";
import axios from "axios";
class gallery extends Component {
  state = {
    id: "",
    pw: ""
  };
  onLogin = () => {
    console.log(this.state.id);
    console.log(this.state.pw);
    // axios
    //   .post("http://112.149.167.79/api/user", {
    //     id: this.state.id,
    //     pwd: this.state.pw
    //   })
    axios("http://112.149.167.79/api/user", {
      method: "post",
      data: {
        id: this.state.id,
        pwd: this.state.pw
      },
      withCredentials: true
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log("@@@@@");
  };
  check = () => {
    axios("http://112.149.167.79/api/user/check", {
      method: "get",
      withCredentials: true
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log("########");
  };
  onChangeId = e => {
    this.setState({
      id: e.target.value
    });
  };
  onChangePw = e => {
    this.setState({
      pw: e.target.value
    });
  };
  render() {
    return (
      <Fragment>
        id : <input type="text" onChange={this.onChangeId} />
        <br />
        pw : <input type="password" onChange={this.onChangePw} />
        <button onClick={() => this.onLogin()}>로그인</button>
        <button onClick={() => this.check()}>check!!</button>
      </Fragment>
    );
  }
}

export default gallery;
