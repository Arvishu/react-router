import React, { Component } from 'react';
import { Route, BrowserRouter, Link,NavLink} from 'react-router-dom';
import './App.css';

// Création d'un composant

const Wilder =()=>{
  return (
    
    <iframe width="1512" height="480" src="https://www.youtube.com/embed/p1wqvyBH5Ls?ecver=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  )}

 class App extends Component {
  render() {
    return (
      
        <BrowserRouter>
              <div>
                <ul>
                  <li>
                  <NavLink to="/"exact activeStyle={
                    {color:'red',
                    fontWeight:'bold',
                    fontSize:50,}
                                     
                  }>Home</NavLink>
                  </li>

                  <li>
                  <NavLink to="/notre-histoire"exact activeStyle={
                    {color:'red',
                    fontWeight:'bold',
                    fontSize:50,}
                  }>History</NavLink>
                  </li>
                   

                  <li>
                  <NavLink to="/Wilder"exact activeStyle={
                     {color:'red',
                     fontWeight:'bold',
                     fontSize:50,}
                  }>Wilder</NavLink>
                  </li>
                  
                </ul>

                  <Route path="/"exact strict render={
                      ()=> {
                          return (<h1>Bienvenue sur l'accueil</h1>);
                      }
                      
                    }/>

                <Route path="/notre-histoire"exact strict render={
                  ()=>{
                    return (<h1>Notre histoire</h1>);
                  }
                }/>
                <Route path="/Wilder"exact strict component={Wilder}/>         
                  
               

              </div>
            </BrowserRouter>
     
    )
  }
}

export default App;