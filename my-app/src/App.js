import './App.css';
import React from 'react';
import {BrowserRouter as Router,Switch, Route,Link} from "react-router-dom"
import Login from './components/Login';
import Register from './components/Register';
import Quote from './components/Quote';
import LoginUser from './components/LoginUser';
import CreateEvent from './components/CreateEvent';
import Main from './components/Main';
import Events from './components/Events';
import Userrregister from './components/Userrregister';
import ParticipantInfo from './components/ParticipantInfo';
import ProfileInfo from './components/ProfileInfo';
import EventInfo from './components/EventInfo';
function App() {
  console.log("Aojj")
  return (

    <Router>
     {/* <div>
     <Main></Main>
    </div> */}
   
   <Switch>
   <Route exact path="/create"><CreateEvent></CreateEvent></Route>
   <Route exact path="/"><Main></Main></Route>
   <Route exact path='/partinfo'><ParticipantInfo></ParticipantInfo></Route>
   <Route exact path='/profile'><ProfileInfo></ProfileInfo></Route>
   <Route exact path='/eventinfo'><EventInfo></EventInfo></Route>
   <Route exact path="/event"><Events></Events></Route>
   <Route exact path="/loginparticipant"><LoginUser></LoginUser></Route>
   <Route exact path="/userregister"><Userrregister></Userrregister></Route>
    <Route exact path="/login"><Register></Register></Route>
    <Route exact path="/register"><Login></Login></Route>
    <Route exact path="/quote"><Quote></Quote></Route>

   </Switch>
    </Router>
   
    
  );
}

export default App;
