import React from 'react';
//import './App.css';
import 'h8k-components';

import Slides from '../components/Slides';
const title = "Slideshow SlidesShow";

function SlidesShow() {
    const slides = [
        {
            title:'This is one title', 
            text:'This is the text'
        },
        {
            title:'This is Two title', 
            text:'This is two text'
        },
        {
            title:'This Three  title', 
            text:' This is the text this one is thre This is the text this one is thre '
        },
        {
            title:'This is Four title', 
            text:'This is the text , this is four This is the text this one is threThis is the text this one is thre  '
        },
        {
            title:'This Five title', 
            text:'This is the text ,this is four This is the text this onethis is four This is the text this onethis is four This is the text this onethis is four This is the text this one this is four This is the text this one is threThis is the text this one is thre  '
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
