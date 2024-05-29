import { FC, useState } from 'react';
import { AccordionTextProps, cn } from 'shared/lib';

import style from './Accordion-Header.module.scss';

interface AccordionHeaderProps extends AccordionTextProps {
	onClick: () => void;
	isHoverEffect: boolean;
	headerContainerClassName: string;
	arrowSVGClassName: string;
	headerContainerClassName_onClick: string;
}

export const AccordionHeader: FC<AccordionHeaderProps> = ({
	text,
	onClick,
	isHoverEffect,
	headerContainerClassName,
	arrowSVGClassName,
	headerContainerClassName_onClick,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleClick = () => {
		setIsExpanded(!isExpanded);
		onClick();
	};

	return (
		<div
			className={cn([style.headerContainer, headerContainerClassName], {
				[style.headerContainer_hoverEffect]: isHoverEffect,
				[headerContainerClassName_onClick]: isExpanded,
			})}
			onClick={handleClick}
		>
			<h2 className={style.headerContainer__text}>{text}</h2>
			<div className={style.headerContainer__svgContainer}>
				<svg
					className={cn(
						[style.expand__title_arrow, arrowSVGClassName],
						{ [style.rotated]: isExpanded }
					)}
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
					viewBox="0 0 14 8"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M1 1L6.85858 6.85858C6.93668 6.93668 7.06332 6.93668 7.14142 6.85858L13 1"></path>
				</svg>
			</div>
		</div>
	);
};
