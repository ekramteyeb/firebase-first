import React, { useState } from 'react';
//import './App.css';
import 'h8k-components';

import Articles from '../components/Articles';

const title = "Sorting Articles";

function ArticlesShow() {
  const articles = [
    {
      title: 'Javascript',
      upvotes: '89',
      date : '2022-04-04'
    },
    {
      title: 'JQuery',
      upvotes: '45',
      date : '2012-04-30'
    },
    {
      title: 'MongoDb',
      upvotes: '75',
      date : '2018-08-16'
    }, 
    {
      title: 'TypeScript',
      upvotes: '95',
      date : '2012-08-09'
    }
  ]
    const [sort , setSort] = useState('')
    
    const sortedArticles = (articles , sort) => {
      /* if(sort === ''){
        return articles
      } */
      if(sort === 'upvote' || sort === ''){
        return articles.sort((a,b) => b.upvotes - a.upvotes)
      }
      if(sort === 'recent'){
        return articles.sort(function(a,b){
            if(Date.parse(a.date) > Date.parse(b.date)) {return - 1}
            if(Date.parse(a.date) < Date.parse(b.date) ) {return 1}
            return 0
        })
      }
    }
    const sorted = sortedArticles(articles, sort)
    return (
        <div className="App m-4">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 mb-4 navigation">
                <label className="form-hint mb-0 ml-1 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" onClick={() => setSort('upvote')} className="small btn btn-success m-1 p-1">Most Upvoted</button>
                <button data-testid="most-recent-link"  onClick={() => setSort('recent')} className="small btn btn-success m-1 p-1">Most Recent</button>
            </div>
            <Articles articles={sorted}/>
        </div>
    );

}

export default ArticlesShow;
