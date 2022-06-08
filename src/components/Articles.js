import React from 'react';

function Articles({articles}) {
   
    return (
        <div className="card bg-light col-6 p-2 pb-4   mx-auto">
            <table>
                <thead >
                <tr className="bg-info">
                    <th className="bg-info p-2">Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                { articles &&
                  articles.map((article, index) => (
                    <tr data-testid="article" key={index} style={{color : index === 0 ? 'red' : 'black', fontWeight: index === 0 ? 'bolder' : '' }} >
                      <td data-testid="article-title" >{article.title}</td>
                      <td data-testid="article-upvotes">{article.upvotes}</td>
                      <td data-testid="article-date">{article.date}</td>
                    </tr>
                  ))
                }
                
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
