import { CustomAccordion } from 'shared/ui';
import { QuestionsMap } from 'entities/Questions';

import style from './Questions.module.scss';

export const Questions = () => {
	return (
		<div className={style.questions}>
			<div className={style.questions__header}>
				<h2>Вопросы и ответы</h2>
			</div>
			<div className={style.questions__questionsContainer}>
				<CustomAccordion
					accordionDescriptionClassName={style.questions__description}
					arrowSVGClassName={style.questions__arrowSVG}
					containerClassName={style.questions__accordionContainer}
					headerContainerClassName={style.questions__headerAccordion}
					headerContainerClassName_onClick={
						style.questions__headerAccordion_onClick
					}
					isHoverEffect={true}
					mapToUse={QuestionsMap}
				/>
			</div>
		</div>
	);
};
