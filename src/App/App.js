import React, { useEffect, useState } from 'react';
import Products from '../Products';

import { Plugins } from '@capacitor/core';

const { PushNotifications } = Plugins;

function App() {
	const [message, setMessage] = useState('');

	useEffect(() => {
		console.log('Initializing HomePage');

		// Request permission to use push notifications
		// iOS will prompt user and return if they granted permission or not
		// Android will just grant without prompting
		PushNotifications.requestPermission().then((result) => {
			if (result.granted) {
				// Register with Apple / Google to receive push via APNS/FCM
				PushNotifications.register();
			} else {
				// Show some error
			}
		});

		PushNotifications.addListener('registration', (token) => {
			setMessage('Push registration success, token: ' + token.value);
		});

		PushNotifications.addListener('registrationError', (error) => {
			setMessage('Error on registration: ' + JSON.stringify(error));
		});

		PushNotifications.addListener(
			'pushNotificationReceived',
			(notification) => {
				setMessage('Push received: ' + JSON.stringify(notification));
			}
		);

		PushNotifications.addListener(
			'pushNotificationActionPerformed',
			(notification) => {
				setMessage(
					'Push action performed: ' + JSON.stringify(notification)
				);
			}
		);
	}, []);

	return <Products />;
}

export default App;
