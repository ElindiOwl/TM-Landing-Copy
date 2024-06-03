import {
	Advantages,
	InfoCardsSection,
	MarketPlus,
	Questions,
} from 'widgets/ui';
import { OverallQuestionsMap } from 'entities/Questions';

import style from './Information-Section.module.scss';

export const InformationSection = () => {
	return (
		<div className={style.container}>
			<MarketPlus />
			<Advantages />
			<InfoCardsSection />
			<Questions
				mapToUse={OverallQuestionsMap}
				questionsHeader={'Вопросы и ответы'}
			/>
		</div>
	);
};
