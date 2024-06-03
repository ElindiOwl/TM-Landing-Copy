import { AccordionMap } from 'shared/lib';

import style from './Questions-map.module.scss';

export const OverallQuestionsMap: AccordionMap = {
	question1: {
		description: (
			<p className={style.description}>
				Перед выходом на маркетплейс, тщательно продумайте ассортимент,
				изучите конкурентов.
				<br />
				<span className={style.description__lineBreak}></span>
				<br />
				Прежде чем регистрироваться, изучите условия работы, а также
				доступные модели сотрудничества.
			</p>
		),
		header: (
			<p className={style.header}>
				Как начать продавать через Tess market?
			</p>
		),
	},
	question2: {
		description: (
			<p className={style.description}>
				Пройдите регистрацию на площадке и заключить договор.
				<br />
				<span className={style.description__lineBreak}></span>
				<br />
				Выбрать модель работы. Доступны разные варианты: можно хранить и
				доставлять заказы самостоятельно, а можно передать товары для
				доставки от Tess market.
			</p>
		),
		header: <p className={style.header}>Как стать продавцом?</p>,
	},
	question3: {
		description: (
			<p className={style.description}>
				Торговля на площадке не требует большого стартового бюджета.
				Расходы продавца зависят от многих факторов. Чтобы лучше
				рассчитать бюджет, пройдите регистрацию.
			</p>
		),
		header: (
			<p className={style.header}>
				Сколько нужно денег, чтобы начать продавать?
			</p>
		),
	},
	question4: {
		description: (
			<p className={style.description}>
				Чтобы начать продавать, заполните форму регистрации
				<br />
				<span className={style.description__lineBreak}></span>
				<br />
				Далее заключите договор с Tess market: это делается в режиме
				онлайн. После этого можно будет приступить к настройке магазина.
			</p>
		),
		header: (
			<p className={style.header}>
				Как зарегистрироваться на площадке как продавец?
			</p>
		),
	},
	question5: {
		description: (
			<p className={style.description}>
				Данные проходят проверку в течение нескольких дней. О
				результатах рассмотрения мы сообщим по e-mail. Также информация
				о статусе заявки будет отображаться в личном кабинете
				приложения.
			</p>
		),
		header: <p className={style.header}>Сколько будет идти проверка?</p>,
	},
	question6: {
		description: (
			<p className={style.description}>
				Прежде чем вывести товары на витрину, Tess market проверяет ваш
				магазин на соответствие с правилами. Служба контроля качества
				запрашивает дополнительную требуемую информацию о продавце.
			</p>
		),
		header: (
			<p className={style.header}>Как происходит проверка магазина?</p>
		),
	},
};
