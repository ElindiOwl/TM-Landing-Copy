import { CustomAccordion } from 'shared/ui';
import { FC } from 'react';
import { AccordionMap } from 'shared/lib';

import style from './Questions.module.scss';

interface QuestionsProps {
	mapToUse: AccordionMap;
	questionsHeader: string;
}

export const Questions: FC<QuestionsProps> = ({
	mapToUse,
	questionsHeader,
}) => {
	return (
		<div className={style.questions}>
			<div className={style.questions__header}>
				<h2>{questionsHeader}</h2>
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
					mapToUse={mapToUse}
				/>
			</div>
		</div>
	);
};
