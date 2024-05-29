import { FC } from 'react';

import style from './Single-Clause.module.scss';

interface SingleClauseProps {
	img: string;
	altDescription: string;
	textDescription: string;
}

export const SingleClause: FC<SingleClauseProps> = ({
	img,
	textDescription,
	altDescription,
}) => {
	return (
		<div className={style.singleClause}>
			<img alt={altDescription} src={img} />
			<h3>{textDescription}.</h3>
		</div>
	);
};
