import React from "react";
import data from "./data";
import "./App.css";
import List from "./list";
import { AiFillCloseSquare } from "react-icons/ai";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  delList = () => {
    this.setState({ show: false });
  };

  render() {
    let myheader;
    if (this.state.show) {
      myheader = <List data={data} />;
    }
    return (
      <div className="App">
        <div className="app-container ">
          {myheader}
          <AiFillCloseSquare className='close-icon' onClick={this.delList} /> 
        </div>
      </div>
    );
  }
}

export default App;
