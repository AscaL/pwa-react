import React, { Component } from 'react';
import Helmet from 'react-helmet';
import logo from './logo.svg';
import './App.css';
import UserCardContainer from './containers/UserCardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="React PWA" />
        <header className="sticky">
          <label for="drawer-checkbox" className="button drawer-toggle" />
          <span href="#" className="logo">
            Mock App
          </span>
        </header>

        <UserCardContainer />
        <div className="container">
          <div className="row cols-sm-12 cols-md-10 cols-lg-8" id="content-area" />
        </div>
        <footer>
          <div className="row cols-sm-12 cols-md-10 cols-lg-8">
            <div className="col-md-offset-1 col-lg-offset-2">
              <p>
                This mock app was created as part of{' '}
                <a
                  href="https://medium.com/@chalarangelo/a-begginners-guide-to-progressive-web-apps-the-frontend-web-424b6d697e35"
                  target="_blank"
                >
                  this article
                </a>.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
