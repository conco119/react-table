import React from 'react'
import ReactDOM from 'react-dom'

const scaleName = {
  n: 'Số',
  c: 'Chữ'
}

function numberToChar(mark) {
  

  if(mark < 4)
    return "F";

  if(mark >= 4 && mark <= 4.9)
    return "D";

  if(mark >= 5 && mark <= 5.4)
    return "D+";

  if(mark >= 5.5 && mark <= 5.9)
    return "C";

  if(mark >= 6 && mark <= 6.9)
    return "C+";

  if(mark >= 7 && mark <= 7.9)
    return "B";

  if(mark >= 8 && mark <= 8.4)
    return "B+";

  if(mark >= 8.5 && mark <= 10)
    return "A";

  return '';
}

function charToNumber(mark) {
  mark = mark.toUpperCase();
  switch(mark) {
    case "F":
      return "0 -> 3.9";

    case "D":
      return "4 -> 4.9";

    case "D+":
      return "5 -> 5.4";

    case "C":
      return "5.5 -> 5.4";

    case "C+":
      return "6 -> 6.9";

    case "B":
      return "7 -> 7.9";

    case "B+":
      return "8 -> 8.4";

    case "A":
      return "8.5 -> 10";

    default: return "";
  }
}

class  MarkInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onInputChange(e.target.value);
  }

  render() {
    return(
      <fieldset>
        <legend>Nhập điểm bằng {scaleName[this.props.scale]} </legend>
        <input type={this.props.type} value={this.props.mark} onChange={this.handleChange} />
      </fieldset>
    );
  }
  
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 'n',
      mark: ''
    }
    this.handleNumberChange  = this.handleNumberChange.bind(this);
    this.handleCharChange  = this.handleCharChange.bind(this);
  }

  handleNumberChange(number) {
    this.setState({scale: 'n',mark: number});
  }

  handleCharChange(char) {
    this.setState({scale: 'c',mark: char});
  }

  render() {
    const numberMark = this.state.scale === 'c' ? charToNumber(this.state.mark) : this.state.mark;
    const charMark = this.state.scale === 'n' ? numberToChar(this.state.mark) : this.state.mark;
    console.log(numberMark);
    console.log(charMark);
    return(
      <div>
        <MarkInput type='text' scale = 'n' mark={numberMark} onInputChange={this.handleNumberChange} />
        <MarkInput type= 'text' scale = 'c' mark={charMark} onInputChange={this.handleCharChange} />
      </div>
    );
  }
}
ReactDOM.render(<Calculator/>,document.getElementById('root'));
