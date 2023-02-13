import React from 'react'
import './App.css';
import AnotherScreen from './AnotherScreen';
import { Routes, Route} from 'react-router'
import Home from './Home'
import Greeting from './class-components/Greeting';

class App extends React.Component {
  constructor(props: any) {
    super(props)

    this.state = {
      enteredName: ""
    }
    this.onChangeName = this.onChangeName.bind(this)
  }

  state: { enteredName: string }
  onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      enteredName: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/another" element={<AnotherScreen />}></Route>
          </Routes>
          <input value={this.state.enteredName} onChange={this.onChangeName} />
          <Greeting name={this.state.enteredName}/>
        </header>
      </div>
    );
  }
}

export default App;
