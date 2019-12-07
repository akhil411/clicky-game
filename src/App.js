import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
const clicked=[];
var points = 0;
const totalPoints = 12;
var message = ''


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clicked,
    points,
    totalPoints,
    message,
    gameEnded: false
  };

  shuffle = a => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

  clickCard = id => {
    const newfriends = this.shuffle(this.state.friends);
    this.setState({ friends:newfriends });

    if (this.state.clicked.includes(id)) {
      this.setState({
        points:0,
        gameEnded: true,
        clicked:[],
        message:"Wrong Click - You Lost"
      });
    }
    else {
      var newPoint = this.state.points;
      newPoint++;
      this.setState({ 
        points:newPoint,
        gameEnded: false,
        message:"Correct Click - You Scored"
       });
      this.state.clicked.push(id);
    }
  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper gameEnded={this.state.gameEnded}>
        <div className="row">
          <Title heading= "Click Game"
            points={this.state.points}
            targetPoints={this.state.totalPoints}
            message={this.state.message}
            />
        </div>
        <div className="row">
          {this.state.friends.map(friend => (
            <FriendCard
              clickCard={this.clickCard}
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
