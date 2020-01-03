import React from 'react';
import axios from "axios"
class Form extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      input:"",
      crypted:"",
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
  submitdecrypt(e){
    e.preventDefault()
    let data = this.state.crypted
    data !== "" && axios.post("/crypted",{data}).then(response=>console.log(response))
    this.setState({crypted:""})
    axios.get("/crypted").then(response=>{this.setState({input:response.data})})
  }

  //for the first text area to encrypt text
  submitForm(e){
    e.preventDefault()
    let data = this.state.input
    data !== "" && axios.post("/input",{data}).then(response=>console.log(response))
    this.setState({input:""})
    axios.get("/input").then(response=>{this.setState({crypted:response.data})})
  }
  render(){
    return(
      <form>
        <textarea rows="4" cols="50"  onChange={this.changeText} value={this.state.input} placeholder="please enter the text that you want to crypt"/>
        <br/>
        <button onClick={this.submitForm}>Crypt your text</button>
        <br/>
        <textarea rows="4" onChange={this.decryptText} cols="50" value={this.state.crypted} placeholder="your encrypted data"/>
      </form>

    )
  }
}

export default Form;