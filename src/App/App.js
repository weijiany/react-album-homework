import React, { Component } from 'react';
import './App.scss';
import { fetchAlbums, fetchUser } from '../apiUtil';
import Header from '../Header/Header';
import Albums from '../Albums/Albums';
import UserInfo from '../UserInfo/UserInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        company: {
          name: '',
        },
      },
      albums: [],
    };
  }

  componentDidMount() {
    fetchUser().then((user) => {
      this.setState({
        user,
      });
    });

    fetchAlbums().then((albums) => {
      this.setState({
        albums,
      });
    });
  }

  render() {
    const { albums, user } = this.state;
    return (
      <div data-testid="app" className="App">
        <Header user={user} />
        <main className="content">
          <Albums albums={albums} />
          <UserInfo user={user} />
        </main>
      </div>
    );
  }
}

export default App;
