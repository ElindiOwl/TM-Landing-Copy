import { SingleClause } from 'shared/ui';
import { clausesDTO } from 'entities/Advantages';

import style from './Advantages.module.scss';

export const Advantages = () => {
	return (
		<div className={style.advantages}>
			<div className={style.advantages__headerContainer}>
				<h2>Что получает продавец?</h2>
			</div>
			<div className={style.advantages__textContainer}>
				{clausesDTO.map((data, index) => (
					<SingleClause
						key={index}
						altDescription={data.altDescription}
						img={data.img}
						textDescription={data.textDescription}
					/>
				))}
			</div>
		</div>
	);
};
