import React from 'react';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Button';
import './HornedBeast.css';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
      greeting: false
    }
  }
  handleFavs = () => {
    this.setState({
      favorites: this.state.favorites + 1
    });
  };

  greeting = () => {
    this.setState({
      greeting: true
    });
  }

  offGreeting = () => {
    this.setState({
      greeting: false
    });
  }

  handleImage = () => {
    this.props.modalAppear(this.props.image_url, this.props.title, this.props.description, this.props.keyword)
  }

  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>{this.state.favorites} ❤️ favorites</p>
        <img src={this.props.image_url} alt="" onClick={this.handleImage}></img>
        <p>{this.props.description}</p>
        <div className="greeting-message">{this.state.greeting ? 'Hello Friend!' : ''}</div>
        <Button
          variant="success"
          className="alert-button"
          onClick={this.greeting}
        >
          Greeting On
        </Button>
        <Button
          variant="danger"
          className="alert-button"
          onClick={this.offGreeting}
        >
          Greeting Off
        </Button>
        <Button
          variant="info"
          className="alert-button"
          onClick={this.handleFavs}
        >
          Click to Add Favorite Tally
        </Button>
      </article >
    )
  }
}

export default HornedBeast;





