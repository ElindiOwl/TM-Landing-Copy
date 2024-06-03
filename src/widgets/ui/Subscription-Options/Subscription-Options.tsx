import { subscriptionChoiceDTO } from 'entities/Subscription-Choice';

import style from './Subscription-Options.module.scss';
import { SubscriptionChoice } from './Subscription-Choice/Subscription-Choice.tsx';

export const SubscriptionOptions = () => {
	return (
		<div className={style.subscriptionChoice}>
			<div className={style.subscriptionChoice__container}>
				<h3>
					Подписка для продавцов, способствующая увеличению продаж.
				</h3>
				<h2>Для бутиков и маркета</h2>
			</div>
			<div className={style.subscriptionChoice__cards}>
				{subscriptionChoiceDTO.map((data, index) => (
					<SubscriptionChoice
						key={index}
						advantagesList={data.advantagesList}
						afterPromoPricing={data.afterPromoPricing}
						isHighlighted={data.isHighlighted}
						subscriptionName={data.subscriptionName}
						subscriptionPrice={data.subscriptionPrice}
						yearCost={data.yearCost}
					/>
				))}
			</div>
		</div>
	);
};
