import React, { Component, Suspense, lazy } from 'react';
import './App.css';
const LazyPDFDocument = lazy(() => import("./PDFPreview"));

class App extends Component {

  state = {
    name: "",
    about: '',
    showPDFPreview: false
  }

  handleClick = () => {
    this.setState({
      showPDFPreview: true
    })
  }

  handleNameChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  } 
  render() {
    const greeting = `hello ${this.state.name}`
    const mystory = `${this.state.about}`
    return (
      <div className="App">
      <div className="header">PDFGenerator</div>
        <input type="text" name="name" placeholder="Enter Your Name" onChange={this.handleNameChange}/>
        <textarea type="text" rows="6" name="about" placeholder="write about yourself" onChange={this.handleNameChange} />
        <button onClick={this.handleClick}>Generate PDF</button>

        {
          (this.state.showPDFPreview && 
          <Suspense fallback={
            <div>
              <div className="suspense">Suspense fallback Content</div>
              <div className="loading">Loading...</div>
            </div>}>
            <div>
              <LazyPDFDocument title={greeting} story={mystory}/>
            </div>
          </Suspense>  
          )
        }
      </div>
    );
  }
}

export default App;
