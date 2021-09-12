import { useParams } from "react-router";
import useFetch from '../useFetch';

import {useHistory} from 'react-router-dom';
const BlogDetails= ()=>{
    const {id} = useParams();
    const {data:blog , error,isLoding} = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory();
    function handleChange(){
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method: 'DELETE',
        }).then(()=>{
            history.push('/')
        })
    }
    return( <div className="blog-details">
        {isLoding && <div> is loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by <b>{blog.author}</b>.</p>
                <div>{blog.body}</div>

            </article>
        )}
        <button onClick={handleChange}>Delete Blog</button>
    </div>)
}


export default BlogDetails;
