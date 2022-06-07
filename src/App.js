import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { Table, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';


function App() {
  
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  
  useEffect(() => {
    axios.get('http://localhost:3001/posts')
  .then(function(data){
    
    setPosts(data.data)
  })
  .catch(err => console.log(err))
  }, [])
  
  const handleSubmit = () => {
    const post = {
      id: new Date(),
      title,
      author
    }
    axios.post('http://localhost:3001/posts', post)
    .then(response => console.log('response', response))
    .catch(error => console.log(error, 'error '))
  }
  const handleDelete = (id) => {
    
    axios.delete(`http://localhost:3001/posts/${id}`)
    .then(function(response){
      console.log(response)
    })
    .catch(error => console.log(error, 'error '))
  }
  return (
    <div className="Alpp">
      <header className="App-header">
        <h1>Firebase - hosted app </h1>
      </header>
      <main className='container mx-auto'>
         
      <Form className=' mx-auto mt-3 mb-3'>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="Title" onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control type="Author" onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
          </Form.Group>
          
          <Button variant="primary" onClick={handleSubmit} type="submit">
            Submit
          </Button>
      </Form>
              
      <Table striped bordered hover >
        <thead>
          <tr className='bg-dark text-white'>
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
                <td><button className='btn btn-outline-danger' onClick={function(){
                  handleDelete(post.id)
                }}>Delete</button></td>
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
