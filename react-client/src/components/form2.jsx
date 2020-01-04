import React from 'react';
import axios from "axios"
class Form2 extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      //for the crypte
      input:"",
      crypted:"",
      //for the decrypt

    }
    this.changeText=this.changeText.bind(this)
    this.submitForm=this.submitForm.bind(this)


     this.decryptText=this.decryptText.bind(this)
    this.submitdecrypt=this.submitdecrypt.bind(this)
  }

  changeText(e){
    this.setState({
      input: e.target.value
    })
  }

  decryptText(e){
    this.setState({
      crypted: e.target.value
    })
  }
  //the decrypt request
  submitdecrypt(e){
    e.preventDefault()
    let data = this.state.crypted
    data !== "" && axios.post("/binary",{data}).then(response=>this.setState({input:response.data,crypted:""}))
  }

  //for the first text area to encrypt text
  submitForm(e){
    e.preventDefault()
    let data = this.state.input
    data !== "" && axios.post("/debenary",{data}).then(response=>this.setState({crypted:response.data,input:""}))

  }
  render(){
    return(
      <form>
        <textarea rows="4" cols="50"  onChange={this.changeText} value={this.state.input} placeholder="please enter the text that you want to crypt"/>
        <div className="buttons">
        <button onClick={this.submitForm}>Crypt your text</button>
        <button id ="btn1" onClick={this.submitdecrypt}>decrypt your text</button>
        </div>
        <textarea rows="4" cols="50" onChange={this.decryptText} value={this.state.crypted} placeholder="your encrypted data"/>
      </form>

    )
  }
}

export default Form2;