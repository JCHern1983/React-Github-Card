import React from 'react';
import axios from 'axios';
import User from './User';
import Followers from './Followers';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      followers: []
    }
  }

  componentDidMount() {
    this.getUser()
    this.getFollowers()
  }

  getUser= () => {
    axios.get(`https://api.github.com/users/JChern83`)
      .then(res =>
        this.setState({
          username: res.data
        }))
        .catch(err => console.log(err))
  }

  getFollowers = () => {
    axios.get(`https://api.github.com/users/JChern83/followers`)
      .then(res => this.setState({followers:res.data}))
      .catch(err => console.log(err))
  }

  render(){
    console.log(this.state)
    return (
      <div className="whole-container">
        <h1>GitHub User Cards</h1>
        <User username={this.state.username} />
        {this.state.followers.map(follower => <Followers name={follower.login} id={follower.id} image={follower.avatar_url} html_url={follower.html_url}/>)}
      </div>
    )
  }
}

export default App;