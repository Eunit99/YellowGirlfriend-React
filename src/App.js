import React, { Component } from 'react';
import AppContainer from './components/AppContainer/AppContainer';
import './App.css'
import Loading from './components/AppContainer/loading/Loading';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    },
    2000)
  }
  
  render() {
    let loadingState = this.state.isLoading;

    return (
     <div>
      { loadingState ?
        <Loading /> :
        <AppContainer />
      }
     </div>
    );
  }
}

export default App;