import { Link } from 'react-router-dom';

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h2>Error 404</h2>
      <p>page not found go back home</p>
      <Link to='/'>homepage...</Link>
    </div>
   );
}
 
export default NotFound;