import { FC } from 'react';

import style from './Big-Link-Button.module.scss';

interface BigLinkButtonProps {
	link: string;
	text: string;
}

export const BigLinkButton: FC<BigLinkButtonProps> = ({ link, text }) => {
	return (
		<a
			className={style.bigLinkButton}
			href={link}
			rel="noopener noreferrer"
			target="_blank"
		>
			<p>{text}</p>
		</a>
	);
};
