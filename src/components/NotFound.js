import { Button } from './styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect,
} from 'react-router-dom';

const NotFound = ({ goTo }) => (
  <>
    <h2>404 this page does not exist!</h2>
    <Link to="/">
      <Button>Go back home!</Button>
    </Link>
  </>
);

export default NotFound;
