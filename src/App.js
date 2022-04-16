import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import pageData from './pageData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header pageData={pageData}/>
        <About pageData={pageData}/>
        <Resume pageData={pageData}/>
        <Portfolio pageData={pageData}/>
        <Testimonials pageData={pageData}/>
        <ContactUs pageData={pageData}/>
        <Footer pageData={pageData}/>
      </div>
    );
  }
}

export default App;