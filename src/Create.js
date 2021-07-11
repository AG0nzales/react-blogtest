import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {

  //react hooks useState interacts with the forms and acrquires the field
  //Takes the input as a string from the set state which was an empty string
  //create an event function inside onChange and target the value inside the form
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Megumi');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = {title, body, author};
    
    setIsPending(true);

    fetch(`http://localhost:8000/blogs`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log('new blog added');
      setIsPending(false)
      history.push('/');
    })
  }

  return ( 
    <div className="create">
      <h2>Add new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
        type="text" 
        required

        // this is how we access the input forms
        value = { title }
        onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
        required
        value = {body}
        onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
        value = { author }
        onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Megumi">Megumi</option>
          <option value="Mitsuri">Mitsuri</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Blog deployed....</button>}
      </form>
    </div>
   );
}
 
export default Create;