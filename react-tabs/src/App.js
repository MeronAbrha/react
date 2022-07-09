import {AmountSelector } from './components/amountSelector'
import { Tabs } from './components/tabs'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <Routes>
            <Route exact path='/' element={<Tabs/>}/>
            <Route path='/tabs' element={<Tabs/>}/>
            <Route path='/amount-selector' element={<AmountSelector/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
