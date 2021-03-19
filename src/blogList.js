import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({blog, title, handleDelete}) => {
          return (
                    <div className='blog-list'>
                    <h3>{title}</h3>
                    
                    {blog.map((item) => (
                        //     console.log(item.id)
                              <div className='blog-preview' key={item.id}>
                                  <Link to={`/user/${item.id}`}>
                                        <h2>{item.company.catchPhrase}</h2>
                                        <p>Written by {item.name}</p>
                                  </Link>
                                        <button onClick={() => handleDelete(item.id)}>DELETE</button>
                              </div>
                    ))}
                    </div>
            );
}
 
export default BlogList;