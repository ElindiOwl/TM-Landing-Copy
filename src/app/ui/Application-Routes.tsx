import { Route, Routes } from 'react-router';
import { HomePage } from 'pages/Home-page';

export const ApplicationRoutes = () => {
	return (
		<Routes>
			<Route element={<HomePage />} path="/" />
		</Routes>
	);
};
