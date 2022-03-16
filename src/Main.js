import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';

class Main extends React.Component {
  render() {
    let beasts = [];
    this.props.data.forEach((beast, index) => {
      beasts.push(
        <HornedBeast
          image_url={beast.image_url}
          title={beast.title}
          description={beast.description}
          keyword={beast.keyword}
          horns={beast.horns}
          // need to add a key and index (line 7)
          key={index}
        />
      )
    });


    return (
      <main>
        {beasts}
      </main>
    )
  }
}

export default Main;