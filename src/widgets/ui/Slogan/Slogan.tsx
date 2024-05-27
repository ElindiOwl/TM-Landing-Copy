import boxes from 'shared/assets/images/Mockup-2.png';

import style from './Slogan.module.scss';

export const Slogan = () => {
	return (
		<div
			className={style.slogan}
			style={{ backgroundImage: `url(${boxes})` }}
		>
			<div className={style.slogan__shadow}>
				<div className={style.slogan__header}>
					<h2>TESS Market</h2>
					<p>| Для продавцов |</p>
				</div>
				<div className={style.slogan__quote}>
					<h2>
						Продавайте больше
						<br />
						с возможностями
						<br />
						Tess market
					</h2>
				</div>
				<div className={style.slogan__description}>
					<div className={style.slogan__rectangle}>
						<p>Бесплатное продвижение при первой регистрации</p>
					</div>
				</div>
			</div>
		</div>
	);
};
