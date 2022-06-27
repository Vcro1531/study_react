import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Hello world</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

var funcStyle = "color:skyblue";
var funcId = 0;
function FuncComp(props) {
  var numberState = useState(props.initNumber);
  var number = numberState[0];
  var setNumber = numberState[1];

  // var dateState = useState(new Date().toString());
  // var _date = dateState[0];
  // var setDate = dateState[1];

  var [_date, setDate] = useState(new Date().toString());

  useEffect(function () {
    console.log(
      "%cfunc => useEffect number (componentDidMount & componentDidUpdate)" + ++funcId,
      funcStyle
    );
    document.title = number;
    return function () {
      console.log(
        "%cfunc => useEffect return (componentDidMount & componentDidUpdate) " + ++funcId,
        funcStyle
      );
    };
  }, []);

  useEffect(
    function () {
      console.log(
        "%cfunc => useEffect number (componentDidMount & componentDidUpdate)" + ++funcId,
        funcStyle
      );
      document.title = number;
      return function () {
        console.log(
          "%cfunc => useEffect number return (componentDidMount & componentDidUpdate) " + ++funcId,
          funcStyle
        );
      };
    },
    [number]
  );

  useEffect(
    function () {
      console.log(
        "%cfunc => useEffect date (componentDidMount & componentDidUpdate)" + ++funcId,
        funcStyle
      );
      document.title = _date;
      return function () {
        console.log(
          "%cfunc => useEffect _date return (componentDidMount & componentDidUpdate) " + ++funcId,
          funcStyle
        );
      };
    },
    [_date]
  );

  console.log("%cfunc => render" + ++funcId, funcStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input
        type="button"
        value="random"
        onClick={function () {
          setNumber(Math.random());
        }}
      ></input>
      <input
        type="button"
        value="date"
        onClick={function () {
          setDate(new Date().toString());
        }}
      ></input>
    </div>
  );
}

var classStyle = "color:Red";
class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };
  componentWillMount() {
    console.log("%cclass => componentWillMount", classStyle);
  }
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={function () {
            this.setState({ number: Math.random() });
          }.bind(this)}
        ></input>
        <input
          type="button"
          value="date"
          onClick={function () {
            this.setState({ date: new Date().toString() });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

export default App;
