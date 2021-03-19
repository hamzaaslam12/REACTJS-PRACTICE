import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Create = () => {
          const [name, setName] = useState('');
          const [catchPhrase, setCatchPhrase] = useState('');
          const [author, setAuthor] = useState('GHIJKL');
          const history = useHistory();

          const handleSubmit = (e) => {
                    e.preventDefault();
                    
                    const blog = {name, catchPhrase, author}
                    // console.log(blog)

                    fetch('https://jsonplaceholder.typicode.com/users', {
                              method: 'POST',
                              headers: {'content-type' : 'application/json'},
                              body: JSON.stringify(blog)
                    }).then(() => {
                              console.log('new user added')
                              history.push('/')
                    })
          }
          return (
                    <div>
                              <h2>ADD TODOS</h2>
                              <Link to="/"><button>Home</button></Link>
                              <br /><br />
                              <form onSubmit={handleSubmit}>
                                        <label>Blog name:</label>
                                        <input
                                                  type="text"
                                                  required
                                        // value={title}
                                        onChange={(e) => setName(e.target.value)}
                                        />
                                        <br />
                                        <br />
                                        <label>Blog company catchPhrase:</label>
                                        <textarea
                                                  required
                                        // value={body}
                                        onChange={(e) => setCatchPhrase(e.target.value)}
                                        ></textarea>
                                        <br />
                                        <br />
                                        <label>Blog author:</label>
                                        <select
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                        >
                                                  <option value="ABCDEF">ABCDEF</option>
                                                  <option value="GHIJKL">GHIJKL</option>
                                        </select>
                                        <br />
                                        <br />
                                        <button>Add Blog</button>
                              </form>

                    </div>
          );
}

export default Create;