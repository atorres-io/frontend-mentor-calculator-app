import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/index.css';
import Calculator from './Pages/Calculator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<Calculator />
	</React.StrictMode>,
	document.getElementById('root')
);
reportWebVitals();
