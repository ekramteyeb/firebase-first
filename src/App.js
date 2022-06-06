import React, {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/posts')
  .then(function(data){
    console.log(data.data)
    setPosts(data.data)
  })
  .catch(err => console.log(err))
  }, [])
  
  return (
    <div className="Alpp">
      <header className="App-header">
        <h1>Firebase - hosted app </h1>
      </header>
      <main className='container mx-auto'>
         <p>
          <button className="btn btn-outline-primary mt-4" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Create Post
          </button>
          </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Title </th>
            <th>Author</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            posts && posts.map(post => 
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td><button className='btn btn-outline-info'>Edit</button></td>
                <td><button className='btn btn-outline-danger'>Delete</button></td>
              </tr>
            ) 
          }
          
          
        </tbody>
      </Table>
      </main>
    </div>
  );
}

export default App;
