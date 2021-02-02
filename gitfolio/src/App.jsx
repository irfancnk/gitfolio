// PACKAGES
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// MODULES
import { NavigationBar } from './components/NavigationBar';
// STYLES
import './App.css';

const LoginPage = () => <div>Login Page</div>
const LandingPage = () => <div>Landing Page</div>
function App() {
    return (
        <div className="app-d-flex d-flex flex-column w-100">
            <Router>
                <Switch>
                    <Route exact path='/login' component={LoginPage} />
                    <Route path='/' component={LandingPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
