import { Route, Routes } from 'react-router';
import { HomePage } from 'pages/Home-page';
import { SubscriptionPage } from 'pages/Subscription-Page';

export const ApplicationRoutes = () => {
	return (
		<Routes>
			<Route element={<HomePage />} path="/" />
			<Route element={<SubscriptionPage />} path="/subscription" />
		</Routes>
	);
};
