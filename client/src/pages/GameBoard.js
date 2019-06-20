import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Nav from "../components/Nav";
import API from "../utils/API";
import "./GameBoard.css";

let moviesTheme = [{id: "myNeighborTotoro", thumbnail: "https://m.media-amazon.com/images/M/MV5BNTdiOTQ0YmUtOGE3YS00NDg5LWI3YTEtNDAxZmE0MzRmZWM5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg", clicked: false},
                     {id: "princessMononoke", thumbnail: "https://m.media-amazon.com/images/M/MV5BMTVlNWM4NTAtNDQxYi00YWU5LWIwM2MtZmVjYWFmODZiODE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", clicked: false},
                     {id: "castleInTheSky", thumbnail: "https://m.media-amazon.com/images/M/MV5BNTg0NmI1ZGQtZTUxNC00NTgxLThjMDUtZmRlYmEzM2MwOWYwXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg", clicked: false},
                     {id: "graveOfTheFireflies", thumbnail: "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg", clicked: false},
                     {id: "spiritedAway", thumbnail: "https://m.media-amazon.com/images/M/MV5BOGJjNzZmMmUtMjljNC00ZjU5LWJiODQtZmEzZTU0MjBlNzgxL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg", clicked: false},
                     {id: "theCatReturns", thumbnail: "https://m.media-amazon.com/images/M/MV5BMTQ5ODMyNTgzOV5BMl5BanBnXkFtZTcwNDM4ODAyNw@@._V1_SX300.jpg", clicked: false},
                     {id: "kikisDeliveryService", thumbnail: "https://m.media-amazon.com/images/M/MV5BOTc0ODM1Njk1NF5BMl5BanBnXkFtZTcwMDI5OTEyNw@@._V1_SX300.jpg", clicked: false},
                     {id: "ponyo", thumbnail: "https://m.media-amazon.com/images/M/MV5BMjA5NzkxNTg2MF5BMl5BanBnXkFtZTcwMTA3MjU1Mg@@._V1_SX300.jpg", clicked: false},
                     {id: "howlsMovingCastle", thumbnail: "https://m.media-amazon.com/images/M/MV5BZTRhY2QwM2UtNWRlNy00ZWQwLTg3MjktZThmNjQ3NTdjN2IxXkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_SX300.jpg", clicked: false},
                     {id: "talesFromEarthsea", thumbnail: "https://m.media-amazon.com/images/M/MV5BYjM3MzQ0YzEtMzY3My00YjhlLThjYWQtNjY5ZTYwYWRkNjhjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg", clicked: false},
                     {id: "ghiblies", thumbnail: "https://m.media-amazon.com/images/M/MV5BMTZlNmZmNGYtNDI2Yi00OWI0LThlM2MtMDJkYzNiMzNjMTY2XkEyXkFqcGdeQXVyNjUwNDMyOTM@._V1_SX300.jpg", clicked: false},
                     {id: "wolfChildren", thumbnail: "https://m.media-amazon.com/images/M/MV5BMTUzNTUzMTA5OF5BMl5BanBnXkFtZTgwOTg0ODc1MTE@._V1_SX300.jpg", clicked: false}
                    ];
let score = 0;
let topScore = 0;
let strikes = 0;
let msg = "";

class GameBoard extends Component {
  state = {
    cards: moviesTheme,
    strikes: 0,
    score: 0,
    topScore: 0,
    msg: ""
  };

  componentDidMount() {
    console.log(this.state.cards);
  }

  camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

  handleButtonClick = (event) => {
    moviesTheme.map( (cards) => {
      if (cards.id === event.target.id) {
        if (cards.clicked === true) {
          if (strikes < 2) {
            strikes++;
            let test = parseInt(3 - strikes);
            msg = "Incorrect Guess: you have " + test + " tries left";
          } else {
            strikes = 0;
            score = 0;
            msg = "Game Over: click to try again"
            moviesTheme.map( (cards) => {
              cards.clicked = false;
            })
          }
        } else {
        cards.clicked = true;
        score++;
        (topScore < score) ? (topScore = score) : (topScore = topScore);
        msg = "You Guessed Correctly";
        }
      }
    })
    
      //Shuffle the array
      moviesTheme = moviesTheme.sort(() => {return 0.5 - Math.random()});
      // Set the new state
      this.setState({
        cards: moviesTheme,
        msg: msg,
        score: score,
        strikes: strikes,
        topScore: topScore
    })
  }

  render() {
    return (
      <>
      <Nav msg = {this.state.msg}
          score = {this.state.score}
          topScore = {this.state.topScore} />
      <Jumbotron backgroundImage = "https://images.wallpaperscraft.com/image/landscape_blue_tree_black_92069_1920x1080.jpg">
      <h1 className="title">Clicky Game!</h1>
      <p className="description">Click on a card to earn points, but don't click on the same card twice!</p>
      </Jumbotron>
      <div className="container">
        <div className="row">
            {this.state.cards.slice(0,4).map( (cards) => {
              return (
                <div id={cards.id} className="col-md-3">
                  <Card key={cards.id} 
                  id = {cards.id} 
                  thumbnail = {cards.thumbnail} 
                  handleButtonClick = {this.handleButtonClick}/>
                </div>
              )
            })}
        </div>

        <div className="row">
            {this.state.cards.slice(4,8).map( (cards) => {
              return (
                <div className="col-md-3">
                  <Card key={cards.id} 
                  id = {cards.id} 
                  thumbnail = {cards.thumbnail} 
                  handleButtonClick = {this.handleButtonClick}/>
                </div>
              )
            })}
        </div>
      
        <div className="row">
            {this.state.cards.slice(8,12).map( (cards) => {
              return (
                <div className="col-md-3">
                  <Card key={cards.id} 
                  id = {cards.id} 
                  thumbnail = {cards.thumbnail} 
                  handleButtonClick = {this.handleButtonClick}/>
                </div>
              )
            })}
        </div>

      </div>
      </>
    );
}
}

export default GameBoard;
