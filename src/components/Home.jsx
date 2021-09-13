import BlogList from '../components/Blog.jsx';
import useFetch from '../useFetch';



function Home() {
   
    const {data:blogs,isLoding,error} = useFetch('http://localhost:8000/blogs')
   //data:blogs means calling the data blogs in this context
    // when array is empty runs a function only initially
    return (
        <div className="home">
            {isLoding && <div> Data is Loding...Please Wait</div> && error}
            {blogs && <BlogList 
            blogs={blogs} 
            title="All blogs" 
          />}
      {/* <BlogList 
                blogs={blogs.filter((blog)=>blog.author === 'Soham')} 
                title="My blogs" 
                handleDelete={handleDelete}/>
               */}
        </div>
    )
}

export default Home;
