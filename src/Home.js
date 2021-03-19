import React, { useState, useEffect } from 'react';
import BlogList from './blogList';

const Home = () => {
          const [blog, setBlog] = useState(null);

        //   const [name, setName] = useState('abc')

    // useEffect(() => {
    //     console.log('use effect runs on every render...')
    // })

    useEffect(() => {
        // console.log('use effect runs only on first render...')

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setBlog(data)
        })

    }, [])

    // useEffect(() => {
    //     console.log('use effect runs when specific state changes...')
    // }, [name])

    const handleDelete = (id) => {
                    // console.log(id)
                let newBlog = blog.filter((item) => item.id !== id );
                setBlog(newBlog)
          }

          return (
                    <div className='content'>
                   {blog && <BlogList blog={blog} title='All Blogs' name='CVBN' handleDelete={handleDelete} />}
                    {/* <BlogList blog={blog.filter((blog) => blog.author === 'DEF')} title='All Blogs' name='CVBN'/> */}
                    
          {/* <p>{name}</p>
          <button onClick={() => setName('xyz')}>change name</button> */}
                    
                    </div>
          );
}

export default Home;