import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import './App.css';
import data from './data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalAppear: false,
      img_url: '',
      title: '',
      description: '',
      keyword: '',
    };
  }

  modalAppear = (img_url, title, description, keyword) => {
    this.setState({
      modalAppear: true,
      img_url: img_url,
      title: title,
      description: description,
      keyword: keyword,
    })
  }

  modalDisappear = () => {
    this.setState({
      modalAppear: false,
    })
  }

  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          modalAppear={this.modalAppear}
        />
        <SelectedBeast
          modalAppear={this.state.modalAppear}
          modalDisappear={this.modalDisappear}
          img_url={this.state.img_url}
          title={this.state.title}
          description={this.state.description}
          keyword={this.state.keyword}
        />
        <Footer />
      </>
    );
  }
}

export default App;
