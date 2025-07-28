import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/home';
import TodoPage from './pages/todoPage';
import Quote from './pages/quote';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todo'  element={<TodoPage/>}/>
        <Route path='/quote' element={<Quote/>}/>
      </Routes>
    </Router>  
  );
}
export default App; 
