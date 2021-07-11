import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';


const BlogDetails = () => {

  const{ id } = useParams();
  const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/` + id);
  const history = useHistory();

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/` + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }

  return ( 
    <div className="blog-details">
      {/* //whenever data takes a while */}
        { isPending && <div>Loading...</div>}
      {/* whenever server catches an error */}
        {error && <div>{ error }</div>}

      {blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by: { blog.author }</p>
            <div>
              {blog.body}
            </div>
            <button onClick={handleClick}>Delete Blog</button>
        </article>
      )}
    </div>
   );
}
 
export default BlogDetails;