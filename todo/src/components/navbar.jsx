import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '10px', background: '#f0f0f0' }}>
            <Link to='/' style={{ marginRight: '10px' }}>Home</Link>
            <Link to='/todo' style={{ marginRight: '10px' }}>To-Do</Link>
            <Link to='/quote' /*style={{ marginRight: '10px' }}*/>Quote</Link>
        </nav>
    );
};
export default Navbar;