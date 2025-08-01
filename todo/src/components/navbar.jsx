import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ position: 'fixed', top: '0', left: '0', width: '100%',  padding: '10px',  background: '#f0f0f0' , boxShadow: '0 2px 4px rgba(0,0,0,0.1)',zIndex: 1000, }}>
            
            <Link to='/' style={{ marginRight: '10px' , color :"black"}}>Home</Link>
            <span style={{ marginRight: '10px' , color:'blue' }}>|</span>
            <Link to='/quotes' style={{ marginRight: '10px',  color:'black' }}>Quotes</Link>
        </nav>
    );
};
export default Navbar;