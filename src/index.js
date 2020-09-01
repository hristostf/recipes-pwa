import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

window.addEventListener('fetch', function (event) {
	console.log('fetching lalalla');
	event.respondWith(
		caches.open('your-app').then(function (cache) {
			return cache.match(event.request).then(function (response) {
				return (
					response ||
					fetch(event.request).then(function (response) {
						cache.put(event.request, response.clone());
						return response;
					})
				);
			});
		})
	);
});
