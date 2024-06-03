import { BigLinkButton } from 'shared/ui';
import { FC } from 'react';
import { cn } from 'shared/lib';

import style from './Subscription-Choice.module.scss';

export interface SubscriptionChoiceProps {
	subscriptionName: string;
	subscriptionPrice: string;
	yearCost?: string;
	advantagesList: string[];
	afterPromoPricing: string;
	isHighlighted: boolean;
}

export const SubscriptionChoice: FC<SubscriptionChoiceProps> = ({
	subscriptionName,
	subscriptionPrice,
	afterPromoPricing,
	advantagesList,
	yearCost = '',
	isHighlighted = false,
}) => {
	return (
		<div
			className={cn([style.subChoice], {
				[style.subChoice_highlighted]: isHighlighted,
			})}
		>
			<h3>{subscriptionName}</h3>
			<h2>{subscriptionPrice}</h2>
			<h6 className={cn([], { [style.hidden]: yearCost === '' })}>
				{yearCost}
			</h6>
			<ul>
				{advantagesList.map((advantage, index) => (
					<li key={index}>{advantage}</li>
				))}
			</ul>
			<div className={style.subChoice__order}>
				<BigLinkButton
					link={'https://support.apple.com/ru-ru'}
					text={'30 дней бесплатно'}
				/>
				<p>далее {afterPromoPricing}</p>
			</div>
		</div>
	);
};
