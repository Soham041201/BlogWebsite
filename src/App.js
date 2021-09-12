import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Create from './components/CreateBlog'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import BlogDetails from './components/BlogDetails.jsx';
import NotFound from './components/NotFound.jsx'
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
          <Home />      
          </Route>
          <Route path="/create">
          <Create/>      
          </Route>
          <Route path="/blogs/:id">
          <BlogDetails />      
          </Route>
          <Route path="*">
          <NotFound />       
          </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
