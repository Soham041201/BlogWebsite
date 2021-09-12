import {useState} from 'react';
import {useHistory} from 'react-router-dom';
function Create() {
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [body,setBody] = useState('')
    const history = useHistory();
    const handleSubmit = (e) => {
            e.preventDefault();
            const blog = {title,author, body}
        fetch('http://localhost:8000/blogs',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(blog)}).then(()=>{
        history.push('/')
        })
    }
    return <div className="create">
        <h1>Create a new blog</h1>
        <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
        type="text"
        required 
        value={title}
        onChange= {(e)=>setTitle(e.target.value)}/>
        <label>Blog Author:</label>
        <input 
        type="text"
        required 
        value={author}
        onChange= {(e)=>setAuthor(e.target.value)}/>
        <label>Blog body</label>
        <textarea 
        required 
        onChange={(e)=>setBody(e.target.value)}>

        </textarea>
        <button>Submit</button>
      </form>
    
    </div>
}

export default Create;
