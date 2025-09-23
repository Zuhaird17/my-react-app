import { h } from 'preact'; // 'h' is required for JSX to work with Preact
import { render } from 'preact';
import './index.css';
import { App } from './app.jsx';

render(<App />, document.getElementById('app'));
