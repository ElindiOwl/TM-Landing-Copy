import { FC, ReactNode } from 'react';

import style from './Single-Info-Card.module.scss';

export interface SingleInfoCardProps {
	header: string;
	title: string | number;
	description: string | ReactNode;
}

export const SingleInfoCard: FC<SingleInfoCardProps> = ({
	header,
	title,
	description,
}) => {
	return (
		<div className={style.infoCard}>
			<div className={style.infoCard__header}>
				<h6>{header}</h6>
				<h3>{title}</h3>
			</div>
			<div className={style.infoCard__text}>
				<p>{description}</p>
			</div>
		</div>
	);
};
