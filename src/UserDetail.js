import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const UserDetail = () => {
          const { id } = useParams()
          const [user, setUser] = useState(null)
          const history = useHistory();
          useEffect(() => {
                    // console.log('use effect runs only on first render...')

                    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                              .then(res => {
                                        return res.json()
                              })
                              .then(data => {
                                        setUser(data)
                                        // console.log(data)
                              })

          }, [])

          // const handleDelete = () => {
          //           fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          //                     method: 'DELETE'
          //           }).then(() => history.push('/')) 
          // }


          return (
                    <div>
                              {user &&
                                        <div>
                                                  <h3>User - {id} </h3>
                                                  <article>
                                                            <h2>{user.name}</h2>
                                                            <h6>{user.email}</h6>
                                                            <p>{user.company.catchPhrase}</p>
                                                            <p>{user.company.bs}</p>
                                                            <p>{user.phone}</p>
                                                  </article>
                                                  {/* <button onClick={handleDelete}>DELETE</button> */}
                                        </div>
                              }
                    </div>
          );
}

export default UserDetail;