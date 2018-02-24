import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          imageLink: "NULL"
      };
  }

  render() {
    return (
      <div className = "App">
          <div style={{
              background: 'lightblue',
              height: '150px'
          }}>
          </div>
          <div className = "pt-4">
              <p>Input an image URL here.</p>
          </div>
          <div className = "container-fluid col-md-8 col-sm-8 pb-4">
              <input type="text" className="form-control" onChange={this.onChange.bind(this)}/>
          </div>
          <div className = "pb-4">
              <button type="button" className="btn btn-default" style={{marginRight:'10px'}}>Generate Caption</button>
              <button type="button" className="btn btn-default" style={{marginLeft:'10px'}}>Show Statistics</button>
          </div>
          <div>
              <img src={this.state.imageLink} alt="Link Invalid"/>
          </div>
      </div>
    );
  }

  onChange(e){
      this.setState({imageLink: e.target.value});
  }

}

export default App;
