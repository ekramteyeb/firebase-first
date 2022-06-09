import React, {useState, useEffect} from 'react'
//import { useNavigate } from "react-router-dom";
import { Table, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Navigator from '../components/Navigator';
import '../App.css';
import firebase from '../firebase.js';
//import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'
//import { getFirestore, addDoc, collection} from 'firebase/firestore'

function Home() {
  
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  //const firestore = getFirestore()
  /* if(loading) {
    return <h1>Loading ...</h1>;
  } */
  const ref = firebase.firestore().collection('posts')

  const getPosts = () => {
    setLoading(true)
    /* ref.get().then(item => {
      const items = item.docs.map(doc => doc.data())
      setPosts(items)
      console.log(items[0].id, 'items working')
      setLoading(false)
    }) */
     ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      }) 
      setPosts(items)
      console.log(items, 'items')
      setLoading(false)
      })
    
  }
  
  //Add doc to firebase
  // = collection(firestore, 'posts')
  function addNewDocument(post){
    if(!post.author || !post.title){
      setMessage('All fields are requiered')
      setTimeout(() => setMessage(''), 3000)
      return 
    }
    ref
     .doc(post.id)
     .set(post)
     .catch(err => {
       console.log('error adding ', err)
     })
     setAuthor('')
     setTitle('')
    
  }

  

  useEffect(() => {
    getPosts();
  }, [])
  /* useEffect(() => {
    axios.get('http://localhost:3001/posts')
  .then(function(data){
    
    setPosts(data.data)
  })
  .catch(err => console.log(err))
  }, []) */

  if(loading){
    return <h1>Loading ....</h1>
  }
  
 /*  const handleSubmit = () => {
    const post = {
      id: new Date(),
      title,
      author
    }
    axios.post('http://localhost:3001/posts', post)
    .then(response => console.log('response', response))
    .catch(error => console.log(error, 'error '))
  } */
  const handleDelete = (post) => {
    // to delete from local json server
    /* 
     let id = post.id
    axios.delete(`http://localhost:3001/posts/${id}`)
    .then(function(response){
      console.log(response)
    })
    .catch(error => console.log(error, 'error ')) */

    // to delete document from firebase document 

    ref 
      .doc(post.id)
      .delete()
      .catch(err => console.error(err, 'deletion not successfull'))
  }
  return (
    <div className="">
      <main className='container'>
      <h1 className="text-center mt-3">Firebase - hosted app </h1>
      <p className='p-2 text-danger'>{ message ? message : ''}</p>
      <Form className='mt-3 mb-3'>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="Title" onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" value={title} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control type="Author" onChange={(e) => setAuthor(e.target.value)} placeholder="Author" value={author}/>
          </Form.Group>
          
          <Button variant="primary" onClick={() => addNewDocument({title, author, id : uuidv4()})} type="button">
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
            posts && posts.map((post, index) => 
              <tr key={post.id + ' ' + index}>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td><button className='btn btn-outline-info'>Edit</button></td>
                <td><button className='btn btn-outline-danger' onClick={function(){
                  handleDelete(post) 
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

export default Home;
