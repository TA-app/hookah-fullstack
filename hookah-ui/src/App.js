// import React, { Component } from "react";
// import "./App.css";
// import Person from "./Person/Person";

// class App extends Component {
//   state = {
//     persons: [
//       { id: "thri", name: "Max", age: 28 },
//       { id: "whown", name: "Manu", age: 29 },
//       { id: "niwkm", name: "Stephanie", age: 26 }
//     ],
//     showperson: false,
//     otherState: "some other value"
//   };

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex(p => {
//       return p.id === id;
//     });

//     const person = { ...this.state.persons[personIndex] };

//     person.name = event.target.value;

//     const persons = [...this.state.persons];
//     persons[personIndex] = Person;
//     this.setState({
//       persons: persons
//     });
//   };

//   togglepersonhandler = () => {
//     const doShow = this.state.showperson;
//     this.setState({
//       showperson: !doShow
//     });
//   };

//   deletePersonHandler = personIndex => {
//     const persons = [...this.state.persons];
//     persons.splice(personIndex, 1);

//     this.setState({
//       persons: persons
//     });
//   };

//   render() {
//     const style = {
//       backgroundColor: "white",
//       font: "inherit",
//       border: "1px solid blue",
//       padding: "8px",
//       cursor: "pointer"
//     };
//     let personstatus = null;
//     if (this.state.showperson) {
//       personstatus = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return (
//               <Person
//                 name={person.name}
//                 age={person.age}
//                 key={person.id}
//                 click={() => this.deletePersonHandler(index)}
//                 changed={event => this.nameChangedHandler(event, person.id)}
//               />
//             );
//           })}
//         </div>
//       );
//     }
//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is really working!</p>
//         <button style={style} onClick={this.togglepersonhandler}>
//           Toggle Person
//         </button>
//         {personstatus}
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//   }
// }
// export default App;

import React, { Component } from "react";
import "./App.css";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    username: ["Tiru"]
  };
  InputChangeHandler = event => {
    this.setState({ username: event.target.value });
  };
  onchangehandler = (event, index) => {};
  render() {
    return (
      <div>
        <button>switchName</button>
        <UserInput
          onChange={this.InputChangeHandler}
          currentname={this.state.username}
        />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <input type="text" onChange={this.onchangehandler} />
      </div>
    );
  }
}

export default App;
