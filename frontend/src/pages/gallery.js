import React, { Component, Fragment } from 'react';
import axios from 'axios';
class gallery extends Component {
  state = {
    id: '',
    pw: '',
    name: '',
    logged: false,
  };
  onLogin = () => {
    axios('http://121.132.88.200/api/user', {
      method: 'post',
      data: {
        id: this.state.id,
        pwd: this.state.pw,
      },
      withCredentials: true,
    })
      .then(response => {
        if (response.data.success) {
          this.setState({
            logged: true,
            name: response.data.userId,
          });
        }
        localStorage.setItem('name', response.data.userId);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  onLogout = () => {
    axios('http://121.132.88.200/api/user/logout', {
      method: 'post',
      withCredentials: true,
    })
      .then(response => {
        this.setState({ logged: false, id: '', pw: '' });
        localStorage.removeItem('name');
      })
      .catch(error => {
        console.log(error);
      });
  };
  check = () => {
    const name = localStorage.getItem('name');
    if (!name) {
      return;
    }
    this.setState({
      logged: true,
    });
    axios(`http://121.132.88.200/api/user/check/${name}`, {
      method: 'get',
      withCredentials: true,
    })
      .then(response => {
        if (response.data.success) {
          this.setState({
            name: name,
          });
        }
      })
      .catch(error => {
        localStorage.removeItem('name');
        this.setState({
          logged: false,
        });
      });
  };
  getTest = () => {
    axios('http://121.132.88.200/api/user', {
      method: 'get',
      withCredentials: true,
    })
      .then(response => {
        console.log('getTest', response);
      })
      .catch(err => {
        console.log(err);
      });
  };
  onChangeId = e => {
    this.setState({
      id: e.target.value,
    });
  };
  onChangePw = e => {
    this.setState({
      pw: e.target.value,
    });
  };
  componentDidMount() {
    this.check();
  }
  render() {
    return this.state.logged ? (
      <Fragment>
        로그인 성공! {this.state.name} 님 안녕하세요.
        <button onClick={() => this.onLogout()}>로그아웃</button>
        <button onClick={() => this.getTest()}>getTest</button>
      </Fragment>
    ) : (
      <Fragment>
        id : <input type="text" onChange={this.onChangeId} />
        <br />
        pw : <input type="password" onChange={this.onChangePw} />
        <button onClick={() => this.onLogin()}>로그인</button>
        <button onClick={() => this.getTest()}>getTest</button>
        {/* <button onClick={() => this.check()}>check!!</button> */}
      </Fragment>
    );
  }
}

export default gallery;
