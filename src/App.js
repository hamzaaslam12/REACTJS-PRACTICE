import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Create from './Create';
import UserDetail from './UserDetail';
import NotFound from './PageNotFound';



function App() {

  
return (
    
<Router>
      
<div>
        
<Switch>
          
<Route exact path="/">
            
<Home />
          
</Route>
          
<Route path="/create">
            
<Create />
          
</Route>
          
<Route path="/user/:id">
            
<UserDetail />
          
</Route>
          
<Route path="*">
            
<NotFound />
          
</Route>
       
 </Switch>
      </div>
    </Router>
  )
}

export default App;
