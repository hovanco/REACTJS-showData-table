import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';
class App extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    const url = `${API_URL}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ users: data })
     })
  }
  render() {
    return (
      <div className="container">
      <div className="col-xs-8">
        <h1>React Axios Example</h1>
          <div className="panel-body">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>id</th>
                  <th>name</th>
                  <th>price</th>
                  <th>category</th>
                  <th>quantity</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user, index) => (
                    <tr key ={index}>
                      <td>{index + 1}</td>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.username}</td>
                      <td>{user.phone}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

