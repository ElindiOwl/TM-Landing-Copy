import { BillingInfo, Header } from 'widgets/ui';

import style from './Subscription-Content.module.scss';

export const SubscriptionContent = () => {
	return (
		<div className={style.subContent}>
			<Header />
			<BillingInfo />
		</div>
	);
};
