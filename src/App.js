import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';

function App() {


  return (
    <div>
      <nav>
      <SideBar></SideBar>

      </nav>

      <div className="main">
        <section>
          <LineChart></LineChart>
        </section>
        <aside>
          <PieChart></PieChart>
        </aside>
      </div>
    </div>

  );
}

export default App;
