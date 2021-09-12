import {Link} from 'react-router-dom';

const BlogList = ({blogs,title})=>{
   return ( 
   <div className="blog-list">
        <h1>{title}</h1>
        {blogs.map((blogItem)=>(
            <div className="blog-preview" key={blogItem.id}>
            <Link to={`blogs/${blogItem.id}`}>
                <h2>{blogItem.title}</h2>
                <p>{blogItem.author}</p>
            </Link>
                
            </div>
    ))}
    </div>);
}

export default BlogList;
