import React, { Component } from 'react';
import AppContainer from './components/AppContainer/AppContainer';
import './App.css'
import Loading from './components/AppContainer/loading/Loading';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      isChatLoading: true,
      readBriefDescription: false, // Brief description of Yellow Girlfriend on message screen
    }
    this.didReadBriefDescription = this.didReadBriefDescription.bind(this);
  }


  didReadBriefDescription = () => {
    this.setState({
      readBriefDescription: true, // Sets read status of brief description to true
    })

    // console.log(`readBriefDescription? ${this.state.readBriefDescription}`)
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,

        if(readBriefDescription) {
          this.setState({
            isChatsLoading: false
          })
        }

      })
    },
    2000)
  }

  render() {
    let loadingState = this.state.isLoading,
        isChatsLoading = this.state.isChatsLoading;

    return (
      <div>
      { loadingState ?
        <Loading /> :
        <AppContainer
          isChatsLoading={isChatsLoading}
          didReadBriefDescription={this.didReadBriefDescription}
          readBriefDescription={this.state.readBriefDescription}
        />
      }
      </div>
    );
  }
}

export default App;