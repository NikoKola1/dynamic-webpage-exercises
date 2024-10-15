
import CompAssignment from './componentAssignment.jsx';
import OpenDataAssignment from './opendataassignment.jsx';
import { createBrowserRouter, Link, RouterProvider} from 'react-router-dom';

function Home(){
  return(
    <div>
      <h2>Choose Assingment to check</h2>
      <Link to='/componentassignment'>
        <button>component assignment</button>
      </Link>
      <Link to='/opendataassignment'>
        <button>opendata assignment</button>
      </Link>
    </div>
  );
}

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/componentassignment',
    element: <CompAssignment/>,
  },
  {
    path: '/opendataassignment',
    element: <OpenDataAssignment/>
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={myRouter}/>
    </div>
  );
}

export default App
