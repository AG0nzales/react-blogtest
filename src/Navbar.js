import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <div className="navbar">
      <h1>Simple Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">Content</Link>
        <Link 
        to="/create" 
        style={{ 
          color: 'white', 
          backgroundColor: '#4267B2',
          borderRadius: '8px' 
        }}>
          Create new</Link>
        
      </div>
      
    </div>
   );
}
 
export default Navbar;