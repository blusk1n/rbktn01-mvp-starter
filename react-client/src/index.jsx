import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Form from './components/form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
    <div>
        <h1>Welcome To CryptoPsycho</h1>
        <Form/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));