import { appStore, googlePlay } from 'shared/assets';

import style from './Footer.module.scss';

export const Footer = () => {
	return (
		<div className={style.footer}>
			<a
				href="https://apps.apple.com/ru/"
				rel="noopener noreferrer"
				target="_blank"
			>
				<img alt="Плей Маркет" src={googlePlay} />
			</a>
			<a
				href="https://apps.apple.com/ru/"
				rel="noopener noreferrer"
				target="_blank"
			>
				<img alt="Эпп стор" src={appStore} />
			</a>
			<p> © Tess Market , 2023 г. Все права защищены.</p>
		</div>
	);
};
