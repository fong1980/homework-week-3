//app.js

import {PureComponent} from 'react'
import React, { Component } from "react"
import { connect } from "react-redux"
import { newgame,makeguess } from "./actions/game" //step6
import Forum from './component/forum'


import logo from "./logo.svg"
import "./App.css"

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

class App extends Component {


  handleClick= () => {
    this.props.newgame()
  }

  // handleClick_= () => {
  //   this.props.makeguess()
  // }

  handleClick_= () => {
    this.props.makeguess()
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p><p></p>

        <h2>{this.props.game.newWord} </h2>

        <button onClick={this.handleClick}>Start New Game</button><p></p>
        <button onClick={this.props.makeguess('a')}>Make A Guess</button>

        {<Forum onSubmit={this.handleClick_} />}

      </div>
    )

  }
}

//step 4
const mapStateToProps = state => {

  return {
    //counter_: state.counter
    game: state.newgame,
    makeguess:state.makeguess.guessLetter='3'
    //game: state.makeguessReducer

  }
}

export default connect(mapStateToProps, {newgame,makeguess})(App) //step 4 //step 6 (increment +decrement)

//
// class SignupForm extends Component {
//     constructor(props){
//         super(props);
//         this.onSubmit = this.onSubmit.bind(this);
//     }
//     onSubmit(val){
//         debugger;
//     }
//     render(){
//         return (
//             <form onSUbmit={ (e)=> this.onSubmit(e) }>
//                 <input type="text" />
//                 <label></label>
//                 <button type="submit">Submit</button>
//             </form>
//         )
//     }
// }



  //<button onClick={this.props.makeguess({guessLetter:3})}>{alphabet[0]}</button> ik wou dat dit had gewerkt.

// //makeguess = D when you didnt push anything yet...
//   <button onClick={this.props.makeguess('B')}>B</button>
//
//   <button onClick={this.props.makeguess('A')}>D</button>
//   <button onClick={this.props.makeguess('D')}>C</button>
