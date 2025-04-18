import Nav from "./components/Nav"
import Links from "./routers/Links"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asyncload } from './store/actions/recipeActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(asyncload());
  }, []);
  
  return (
    <div>
        <Nav />
        <Links />
    </div>
  )
}

export default App