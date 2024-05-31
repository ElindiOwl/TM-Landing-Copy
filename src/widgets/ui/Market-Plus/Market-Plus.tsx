import { bin } from 'shared/assets';

import style from './Market-Plus.module.scss';

export const MarketPlus = () => {
	return (
		<div className={style.marketPlus}>
			<div className={style.marketPlus__information}>
				<h2>
					Tess Market +
					<br />
					Подписка для продавцов
				</h2>
				<img alt="Корзина предметов" src={bin} />
			</div>
			<a
				className={style.marketPlus__link}
				href="/subscription"
				rel="noopener noreferrer"
				target="_blank"
			>
				Подробнее
			</a>
		</div>
	);
};
