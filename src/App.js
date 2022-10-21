import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import aboutimage from './images/aboutme.png'
import downloadimage from './images/download.png'
import Presentation from "./Components/Presentation";
import Contact from "./Components/Contact";


function App() {
  return (
    <div className="App">
      <Header/>
        <Feature/>
        <About image={aboutimage} title='Comes With All You Need For Daily Life' button='Get The App'/>
        <Presentation/>
        <About image={downloadimage} title='Download And Get The App Now' button='Download'/>
      <Contact/>

    </div>
  );
}

export default App;
