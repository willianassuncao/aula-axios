import AppRoutes from './router';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className='App'>
      <div className="container">
        <Navbar />
        <AppRoutes />
      </div>
    </div>
  )
}

export default App;
