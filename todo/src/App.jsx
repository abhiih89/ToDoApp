import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom';
{/*import Home from './pages/home';*/}
import TodoPage from './pages/todoPage';
import Quotes from './pages/quotes';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/*<Route path='/' element={<Home/>}/>*/}
        <Route path='/'  element={<TodoPage/>}/>
        <Route path='/quotes' element={<Quotes/>}/>
      </Routes>
    </Router>  
  );
}
export default App; 
