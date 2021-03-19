import React from 'react';

import { Link } from "react-router-dom"

const NotFound = () => {
          return (
                    <div>
                              <h2>404</h2>
                              <h4>THIS PAGE IS NOT FOUND</h4>
                              <Link to='/'>Back to Home Page...</Link>
                    </div>
            );
}
 
export default NotFound;