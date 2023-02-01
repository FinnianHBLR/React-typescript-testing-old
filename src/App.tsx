import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import projects from './data/projects.json'

function App() {
  // Define state
  const [value, setCards] = useState<string[]>([]);
  
  // Set state
  useEffect(()=>{
    let newArr: string[] = [];
  
    projects.forEach((element, index) => {
      newArr.push(projects[index].title);
    });
  
    setCards(newArr);

  })


  // Define card
  const Card = (props: {title: string[]}) => (
    <div className='card'>
      <h1>{props.title}</h1>
    </div>
  );

  // Render multiple cards
  const renderCards = () => {
    // setCardState()
    // console.log(value);
      return <Card title={value}/>
  }

  return (
    <div className="App">

      <div id="navigation-bar">
        <nav>
          <ul>
            <li><a href="#" id="logo">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Skills</a></li>
          </ul>
        </nav>
      </div>

      <header className="App-header">
        <h1 className=''>Hello! My name is Finnian and this is my portfolio.</h1>
      </header>
      <div className='arrowDiv'>
        <div className="bottom-arrow"></div>
      </div>
      <h3>dsa</h3>
      <ul>
        <li>Projects</li>
        <li>Skills</li>
      </ul>

      {renderCards()}
    </div>
  );
}

export default App;
