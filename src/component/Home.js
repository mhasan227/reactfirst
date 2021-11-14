import React,{Component} from 'react'
import { Link } from "react-router-dom";



 

class Home extends Component {
  render() {
    return <><h1>Hello</h1><div>

<Link to="/table">
     <button type="button">
          Click Me!
     </button>
 </Link> </div></>
  }
}

export default Home;