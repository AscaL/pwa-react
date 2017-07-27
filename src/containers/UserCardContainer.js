import React, { Component } from 'react';
import UserCard from '../components/UserCard';
import axios from 'axios';

export default class UserCardContainer extends Component {
  constructor() {
    super();
    this.getUsers = this.getUsers.bind(this);

    this.state = {
      usersArray: [],
      usersEndpoint:
        'https://randomuser.me/api?seed=%22ph%27nglui%20mglw%27nafh%20Cthulhu%20R%27lyeh%20wgah%27nagl%20fhtagn%22&results=25&nat=US',
    };
  }

  getUsers() {
    console.log('getus');
    axios
      .get(this.state.usersEndpoint)
      .then(response => this.setState({ usersArray: response.data.results }))
      .catch(error => console.log(error));
  }

  componentWillMount() {
    this.getUsers();
  }

  render() {
    return <UserCard usersArray={this.state.usersArray} />;
  }
}
