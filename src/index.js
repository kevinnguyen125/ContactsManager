import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(AppRouter(), document.getElementById('root'));
registerServiceWorker();
