import { FC, ReactNode, useState } from 'react';
import { cn } from 'shared/lib/classNames.ts';
import { AccordionDescription, AccordionHeader } from 'shared/ui';

import style from './Accordion-List-Item.module.scss';

export interface AccordionListProps {
	header: string | ReactNode;
	description: string | ReactNode;
	containerClassName: string;
	headerContainerClassName: string;
	isHoverEffect: boolean;
	arrowSVGClassName: string;
	headerContainerClassName_onClick: string;
	accordionDescriptionClassName: string;
}

export const AccordionListItem: FC<AccordionListProps> = ({
	header,
	description,
	containerClassName,
	headerContainerClassName,
	isHoverEffect,
	arrowSVGClassName,
	headerContainerClassName_onClick,
	accordionDescriptionClassName,
}) => {
	const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

	const headerClickHandler = () => {
		setIsDescriptionVisible(!isDescriptionVisible);
	};

	return (
		<div className={cn([style.accordion, containerClassName])}>
			<AccordionHeader
				arrowSVGClassName={arrowSVGClassName}
				headerContainerClassName={headerContainerClassName}
				headerContainerClassName_onClick={
					headerContainerClassName_onClick
				}
				isHoverEffect={isHoverEffect}
				text={header}
				onClick={headerClickHandler}
			/>
			<div
				className={cn([style.accordion__description], {
					[style.accordion__description_invisible]:
						!isDescriptionVisible,
				})}
			>
				<AccordionDescription
					accordionDescriptionClassName={
						accordionDescriptionClassName
					}
					text={description}
				/>
			</div>
		</div>
	);
};
