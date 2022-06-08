import React from 'react';
//import './App.css';
import 'h8k-components';

import Slides from '../components/Slides';
const title = "Slideshow SlidesShow";

function SlidesShow() {
    const slides = [
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
    return (
        <div>
            <h8k-navbar header={title}></h8k-navbar>
            <div className="SlidesShow col-6 mx-auto">
                <Slides slides={slides} />
            </div>
        </div>
    );
}

export default SlidesShow;
