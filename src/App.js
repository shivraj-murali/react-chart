import React, { useState, useEffect } from 'react';
// import './App.css';
import PieChart from './ApiTest';
import axios from 'axios';

// const data = [
//   { id: 'Completed', label: 'Completed', value: 30 },
//   { id: 'Pending', label: 'Pending', value: 25 },
//   { id: 'Incomplete', label: 'Incomplete', value: 20 },
// ];



function App() {

  const [chartData, setChartData] = useState([
    { id: 'Pending', label: 'Pending', value: 15 },
    { id: 'Completed', label: 'Completed', value: 10},
    { id: 'Incomplete', label: 'Incomplete', value: 20 },
  ]);

  // const [chartData, setChartData] = useState(
  //   { id: 'Completed', label: 'Completed', value: 10},
  // );
  
  useEffect(function () {
    async function getApi(){
  
      const res =await axios.get("https://erp-django.onrender.com/erp/task_status/1/");
      const pending = res.data.Pending;
      const incomplete = res.data.InProgress;
      const complete = res.data.Completed;

      setChartData( (chartData) => 
      (  {...chartData[0], value: pending},
        {...chartData[1], value: incomplete},
        {...chartData[2], value: complete})
      )

    }
    getApi()
  }, []);



  // const data = [
  //   { id: 'Completed', label: 'Completed', value: {complete}},
  //   { id: 'Pending', label: 'Pending', value: {incomplete} },
  //   { id: 'Incomplete', label: 'Incomplete', value: {pending} },
  // ];

  return (
    <div className="App">
      <h1>Pie Chart Example</h1>
      <PieChart data={chartData} />

    </div>
  );
}

export default App;
