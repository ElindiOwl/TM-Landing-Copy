import {
	Advantages,
	InfoCardsSection,
	MarketPlus,
	Questions,
} from 'widgets/ui';

import style from './Information-Section.module.scss';

export const InformationSection = () => {
	return (
		<div className={style.container}>
			<MarketPlus />
			<Advantages />
			<InfoCardsSection />
			<Questions />
		</div>
	);
};
