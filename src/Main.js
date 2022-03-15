import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast
          title="Narwhal"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWrH0HChS-BMo1KDepIZMTrgktG8LNq15hsQ&usqp=CAU"
          description="This is a Narwhal, it is probably cold."
        />
        <HornedBeast
          title="Elk"
          imgUrl="https://www.treehugger.com/thmb/VqtmKj6rn9nv8W-nuMhW38763Z8=/1839x1379/smart/filters:no_upscale()/GettyImages-636079958-97f257c4c2f74b5592bd7a53b149b613.jpg"
          description="This is an Elk, it's a magnificent creature!"
        />
      </main>
    )
  }
}

export default Main;