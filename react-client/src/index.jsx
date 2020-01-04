import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Form from './components/form.jsx';
import Form2 from './components/form2.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
    <div>
        <h1 className="title">Hex && UTF-8</h1>
        <Form/>
        <h1 className="title">Binary && UTF-8</h1>
        <Form2/>

    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));