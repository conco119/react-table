import React from 'react'
import ReactDOM from 'react-dom'

function toCelsius(fahrenheit) {
  return (fahrenheit -32) *5 /9;
}
function toFahrenheit(celsius) {
  return (celsius *9/5) +32;
}

function BoilingVerdict(props) {
  if(props.temperature >= 100)
    return <p>The water would boil</p>
  return <p>The water would not boild</p>
}

function tryConvert(temperature,convert) {
  const input = parseFloat(temperature);
  if(Number.isNaN(input))
    return "";
  const output = convert(input);
  const rounded = Math.round(output*1000)/1000;
  return rounded.toString();
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    // this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value)

  }

  render() {
    // const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return(
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input type="text" value={temperature} onChange={this.handleChange}/>
      </fieldset>
    );
  }

}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c'
    };
    // this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }
  handleCelsiusChange(temperature) {
    this.setState({scale: 'c',temperature:temperature});
    // console.log(this);
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f',temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    console.log(temperature);
    const celsius = scale === 'f' ? tryConvert(temperature,toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit) : temperature;
    return(
      <div>
        <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange.bind(this)} />
        <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict temperature={celsius}/>
      </div>
    );
  }
}

ReactDOM.render(<Calculator/>,document.getElementById('root'));
