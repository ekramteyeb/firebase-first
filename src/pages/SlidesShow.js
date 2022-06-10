import React, {useState, useEffect} from 'react';
import { Button, Alert, Form } from 'react-bootstrap'
import firebase from '../firebase.js';
import { v4 as uuidv4 } from 'uuid'
//import './App.css';
import 'h8k-components';

import Slides from '../components/Slides';
const title = "Slideshow SlidesShow";

function SlidesShow() {
    const [slides, setSlides] = useState([])
    const [loading, setLoading] = useState(false)
    const [countfetch , setCountFetch] = useState(true)
    console.log(slides, 'slides firebase')

    /* const slides2 = [
        {
            title:'This is one title', 
            text:'This is the text',
            image:'https://ichef.bbci.co.uk/news/976/cpsprodpb/292A/production/_121183501_gettyimages-1053558054.jpg'
        },
        {
            title:'This is Two title', 
            text:'This is two text',
            image:'https://www.krugerpark.co.za/images/lion-facts-786x446.jpg'

        },
        {
            title:'This Three  title', 
            text:' This is the text this one is thre This is the text this one is thre ',
            image:'https://a-z-animals.com/media/horse-3.jpg'

        },
        {
            title:'This is Four title', 
            text:'This is the text , this is four This is the text this one is threThis is the text this one is thre  ',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXJ8t1-ctYcQnFj-RkPGlTMRws12MKUCqZA&usqp=CAU'

        },
        {
            title:'This Five title', 
            text:'This is the text ,this is four This is the text this onethis is four This is the text this onethis is four This is the text this onethis is four This is the text this one this is four This is the text this one is threThis is the text this one is thre  ',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSSsk5dzhn0jUnsNXD96g0Llwj7Z-dfKiSA&usqp=CAU'

        }
    ]
 */
    
    const ref = firebase.firestore().collection('slides')

    //get all slides
    const getSlides = () => {
        setLoading(true)
        /* ref.get().then(item => {
        const items = item.docs.map(doc => doc.data())
        setslides(items)
        console.log(items[0].id, 'items working')
        setLoading(false)
        }) */
        ref.onSnapshot((querySnapshot) => {
        const items = []
            querySnapshot.forEach((doc) => {
             items.push(doc.data())
        }) 
         setSlides(items)
        //console.log(items, 'items')
        setLoading(false)
        })
    }

    // fetch the slides once from firebase db
    useEffect(() => {
        slides.length > 1 ? setCountFetch(false) : setCountFetch(true)
        console.log('feted')
        getSlides();
        
    }, [countfetch])

    if(loading){
        return <h1>Loading ....</h1>
    }


    return (
        <div className='container h-100'>
            <h8k-navbar header={title}></h8k-navbar>
            <div className="SlidesShow col-6 mx-auto">
                <Slides slides={slides} />
                <AlertDismissible />
            </div>
        </div>
    );
}

export default SlidesShow;


function AlertDismissible() {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('')
    const [text , setText] = useState('')
    const [image, setImage] = useState('')
    const [message, setMessage] = useState('')

    const ref = firebase.firestore().collection('slides')
     //Add doc to firebase
   // = collection(firestore, 'slides')
  
    function addNewSlide(slide){
        if(!slide.text || !slide.title || !slide.image){
          setMessage('All fields are requiered')
          setTimeout(() => setMessage(''), 3000)
          return 
        }
        ref
         .doc(slide.id)
         .set(slide)
         .catch(err => {
           console.log('error adding ', err)
         })
         setTitle('')
         setText('')
         setImage('')
         setShow(false)
      }
  
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>How about interesting Slide</Alert.Heading>
          {
                    message ? <p className='p-2 text-danger'>{message}</p> : ''
          }
          <Form>
                <Form.Group className="mb-1" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" value={title} />
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicText">
                    <Form.Label>Text</Form.Label>
                    <Form.Control type="text" onChange={(e) => setText(e.target.value)} placeholder="some text about it" value={text}/>
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" onChange={(e) => setImage(e.target.value)} placeholder="Image url" value={image} />
                </Form.Group>
                
                <Button variant="primary" onClick={() => addNewSlide({title, text, image, id: uuidv4()})} type="button">
                    Submit
                </Button>
            </Form>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me y'all!
            </Button>
          </div>
        </Alert>
  
        {!show && <Button className='mt-2 mb-2' variant='info' onClick={() => setShow(true)}>Create your slide</Button>}
      </>
    );
  }
  
