import { HomePage } from 'pages/Home-page';
import { SubscriptionPage } from 'pages/Subscription-Page';

export const routes = [
	{
		element: HomePage,
		path: '/landing',
	},
	{
		element: SubscriptionPage,
		path: '/landing/subscription',
	},
];
