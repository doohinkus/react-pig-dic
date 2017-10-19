import React, { Component } from "react";
import Player from "./player";

class Game extends Component{
  constructor(props){
    super(props);
    this.state = {
      players: [
        {
           playerName: "One",
           roll: 0,
           score: 0,
           runningTotal: 0,
           playing: true,
           victory: false,
           showButtons: true
        },
        {
           playerName: "Hal",
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
    // this.startGame = this.startGame.bind(this);
    this.checkScore = this.checkScore.bind(this);
    // this.computerPlay = this.computerPlay.bind(this);

  }


  roll(playerIndex){
     let dice = Math.floor((Math.random()*6)+1);
     let runningTotal = this.state.players[playerIndex].runningTotal + dice;
     if (dice > 1 && this.state.players[playerIndex].playing){
       this.setState({
         players: this.state.players.map((player, index)=>{
           if (index === playerIndex){
             console.log(index)
             return {
               ...player,
               roll:dice,
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
        //  this.computerPlay();
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
      // this.computerPlay();

    });
  }
  checkScore(playerIndex){
    // this.computerPlay();

    if (this.state.players[playerIndex].score >= 100){
      this.setState({
        players: this.state.players.map((player, index)=>{
          if (index === playerIndex){
            return {
              ...player,
              victory: true,
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
  componentDidMount(){
    this.interval = setInterval(()=>{
      let roll = Math.floor((Math.random()*20)+1);
      if (this.state.players[1].playing ){
        if (this.state.players[1].runningTotal<=roll){

          this.roll(1);
          console.log("roll");
        }else{
          this.hold(1);
          console.log("hold");

        }
      }
  }, 1000);
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
     <div>
       <div className="flex padding center">
         {players}
       </div>
     </div>
   )
 }
}

export default Game;
