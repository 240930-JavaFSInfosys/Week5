import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CalculationComponent } from './Components/CalculationComponent/Calculation';
import { EmployeeContainer } from './Components/EmployeeComponent/EmployeeContainer';
import { data } from './employeeData';

/* In this demo, we'll use react-router-dom to establish routes for our components 
This is what lets us dynamically render components based on URL endpoints*/
function App() {
  return (
    <div className="App">

      <h3>Welcome to the Events and Routing demo</h3>
      <p>Nothing much on the homepage... navigate to different endpoints to see the different components</p>


      <BrowserRouter>
        <Routes>
          <Route path="/calc" element={<CalculationComponent/>}></Route>
          <Route path="/emp" element={<EmployeeContainer incomingData={data}/>}></Route>
        </Routes>
      </BrowserRouter>

      {/* path = the URL endpoint to render a certain component 
          element = the component to render
      */}

    </div>
  );
}

export default App;
