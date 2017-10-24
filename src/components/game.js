import React, { Component } from "react";
import Player from "./player";
import Buttons from "./buttons";
// add new game button
class Game extends Component{
  constructor(props){
    super(props);
    this.state = {
      players: [
        {
           playerName: "Human",
           roll: 0,
           score: 0,
           runningTotal: 0,
           playing: true,
           victory: false,
           showButtons: true
        },
        {
           playerName: "Computer",
           roll: 0,
           score: 0,
           runningTotal: 0,
           playing: false,
           victory: false,
           showButtons:false
        }
      ]
    }
    this.roll = this.roll.bind(this);
    this.hold = this.hold.bind(this);
    this.checkScore = this.checkScore.bind(this);
  }


  roll(playerIndex){
     let dice = Math.floor((Math.random()*6)+1);
     let dice2 = Math.floor((Math.random()*6)+1);
     let runningTotal = this.state.players[playerIndex].runningTotal + dice + dice2;

     if ((dice > 1 && dice2 > 1) && this.state.players[playerIndex].playing){
       this.setState({
         players: this.state.players.map((player, index)=>{
           if (index === playerIndex){
             console.log(index)
             return {
               ...player,
               roll: dice + dice2,
               dice: dice,
               dice2: dice2,
               runningTotal: runningTotal
             }
           }
           return {
             ...player
           };
         })
       });
     }else{
       this.setState({
         players: this.state.players.map((player, index)=>{
           if (index === playerIndex){
             return {
               ...player,
               runningTotal: 0,
               roll: 1,
               dice: dice,
               dice2: dice2,
               playing: false
             }
           }
           return {
             ...player,
             playing: true
           }
         })
       }, () => {
         this.checkScore(playerIndex);
       });
     }


  }
  hold(playerIndex){
    this.setState({
      players: this.state.players.map((player, index)=>{
        if (index === playerIndex){
          return {
            ...player,
            runningTotal: 0,
            score: player.score + player.runningTotal,
            playing: false
          }
        }
        return {
          ...player,
          playing: true
        }
      })
    }, () => {
      this.checkScore(playerIndex);
    });
  }
  checkScore(playerIndex){
    if (this.state.players[playerIndex].score >= 100){
      this.setState({
        players: this.state.players.map((player, index)=>{
          if (index === playerIndex){
            return {
              ...player,
              victory: true,
              playerName: 'Winner!!!',
              playing: false
            }
          }
          return {
            ...player,
            playing: false
          }
        })
      });
    }
    console.log("score: ", this.state.players[playerIndex].score, this.state.players[playerIndex].victory);
  }
  computerRoll(){
    let roll = Math.floor(Math.random() * 12 + 12);
    if (this.state.players[1].score >= 85){
      roll = 12;
    }
    if (this.state.players[1].playing ){
      if (this.state.players[1].runningTotal<=roll){
        this.roll(1);
      }else{
        this.hold(1);
      }
    }
  }
  componentDidMount(){
    this.interval = setInterval(()=>{
     this.computerRoll();
  }, 1500);
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
 render () {
   let players = this.state.players.map((player, index)=>{
      return (
        <Player
          key={index}
          name={player.playerName}
          roll={player.roll}
          dice = {player.dice}
          dice2 = {player.dice2}
          runningTotal={player.runningTotal}
          score={player.score}
          playing={player.playing}
          victory={player.victory}
          showButtons={player.showButtons}
          onClickRoll={()=>{
            this.roll(index);
          }}
          onClickHold={()=>{
            this.hold(index);
          }}
        />
      )
   });
   return (
       <div className="tc rubik cf vh-20">
         {players}
       </div>
   )
 }
}

export default Game;
