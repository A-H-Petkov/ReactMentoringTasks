import React from 'react';
import FunctionArticle from './components/functionArticle';
import PureArticle from './components/pureArticle';
import Footer from './components/footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {
          React.createElement(
            'header',
            {id: 'header1', className: 'page-header'},
            'This is header'
          )
        }
        <FunctionArticle />
        <PureArticle />
        <Footer />
      </div>
    );
  }
}

export default App;
