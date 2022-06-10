import React, { useState} from 'react';

function Slides({slides}) {

  const [counter , setCounter] = useState(0)
  const current = slides.length > 1 ? slides[counter] : {title:'Not fetched', text: 'Slides not arrived', image:'image not ready'}
   
    return (
        <div>
            <div id="navigation" className="text-center mt-2 mb-2 ">
                <button  data-testid="button-restart" 
                 onClick={() => setCounter(0)}
                 disabled={counter === 0 ? true : false}
                 className="small btn btn-outline-success m-2">
                   Restart
                </button>
                <button data-testid="button-prev" 
                 onClick={() => counter > 0 ? setCounter( counter - 1) : counter} 
                 className="small btn btn-success m-2"
                 disabled={counter === 0 ? true : false}
                 >
                   Prev
                </button>
                <button data-testid="button-next" 
                onClick={() => counter < slides.length -1 ? setCounter( counter + 1) : counter} 
                className="small btn btn-success "
                disabled={counter === slides.length - 1 ? true : false}
                >Next</button>
            </div>
            <div id="slide" className="card text-center p-4 pt-2 bg-light">
                <h2 data-testid="title" className='text-gray'>{current.title.toUpperCase()}</h2>
                <img src={current.image} className="img rounded" style={{height:'46vh'}} alt="Responsive "></img>
                <p data-testid="text" className='text-gray'>{current.text}</p>
            </div>
            
        </div>
    );

}

export default Slides;



  
