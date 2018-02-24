import React, { Component } from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';
import './App.css';

var valAnger = 1;
var valContempt = 1;
var valDisgust = 1;
var valFear = 1;
var valHappiness = 1;
var valNeutral = 1;
var valSadness = 1;
var valSurprise = 1;
var valMoustache = 24;
var valSideburns = 12;
var valBeard = 54;

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          imageLink: "NULL",
          statDisplay: {display: "none"}
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
              <input type="text" className="form-control" onChange={this.onTextChange.bind(this)}/>
          </div>
          <div className = "pb-4">
              <button type="button" className="btn btn-default" style={{marginRight:'10px'}}>Generate Caption</button>
              <button type="button" className="btn btn-default" style={{marginLeft:'10px'}}
                  onClick={this.onStatBtnChange.bind(this)}>
                  {this.state.statDisplay.display === "none" ? "Show" : "Hide"} Statistics</button>
          </div>
          <div>
              <img src={this.state.imageLink} alt="Link Invalid"/>
          </div>
          <div style={this.state.statDisplay}>
              <Chart
                  chartType="PieChart"
                  data={[['Emotion', 'Level'],
                      ['Anger', valAnger],
                      ['Contempt', valContempt],
                      ['Disgust', valDisgust],
                      ['Fear', valFear],
                      ['Happiness', valHappiness],
                      ['Neutral', valNeutral],
                      ['Sadness', valSadness],
                      ['Surprise', valSurprise]]}
                  options={{}}
                  graph_id="PieChart"
                  width="100%"
                  height="400px"/>

          </div>
          <div style={this.state.statDisplay}>
              <Chart
              chartType="Gauge"
              data={[['Label', 'Value'],
                  ['Moustache', valMoustache],
                  ['Beard', valBeard],
                  ['Sideburns', valSideburns]]}
              options={{}}
              graph_id="Gauge"
              width="100%"
              height="400px"/>
          </div>
      </div>
    );
  }

  onTextChange(e){
      console.log(this.state);
      this.setState({imageLink: e.target.value});
  }

  onStatBtnChange(){
      let displayMode = this.state.statDisplay.display === "none" ? "block" : "none";
      console.log(displayMode);
      this.setState({statDisplay: {display : displayMode}});
      console.log(this.state);
  }
}

export default App;
