import React, {useState} from 'react';

function Slides({slides}) {

  const [counter , setCounter] = useState(0)
  const current = slides[counter]
    return (
        <div>
            <div id="navigation" className="text-center mt-3 mb-3 p-2">
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
            <div id="slide" className="card text-center p-4">
                <h1 data-testid="title">{current.title.toUpperCase()}</h1>
                <p data-testid="text">{current.text}</p>
            </div>
        </div>
    );

}

export default Slides;
