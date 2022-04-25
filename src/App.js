import Router from './components/Router';

import './styles/App.scss';
import '@fontsource/roboto/500.css';


export default function App() 
{
  return (
    <div className="app">              
        <div className="app__container">  
          <Router />
        </div>
    </div>
  );
}
