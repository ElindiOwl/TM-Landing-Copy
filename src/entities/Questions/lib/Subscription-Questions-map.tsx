import { AccordionMap } from 'shared/lib';

import style from './Questions-map.module.scss';

export const SubscriptionQuestionsMap: AccordionMap = {
	question1: {
		description: (
			<p className={style.description}>
				Tess Market + для продавцов предоставляет ряд инструментов и
				ресурсов, которые улучшают их успешность на платформе и
				способствуют развитию их бизнеса.
			</p>
		),
		header: (
			<p className={style.header}>Что дает подписка для продавцов?</p>
		),
	},
	question2: {
		description: (
			<p className={style.description}>
				Отключить подписку несложно, но без неё вы потеряете все
				преимущества. Чтобы полностью остановить подписку, выберите
				опцию «Отменить подписку» в приложении. Подписка отключится, но
				вы сможете пользоваться Tess Market + до конца оплаченного
				периода.
			</p>
		),
		header: <p className={style.header}>Как отменить подписку?</p>,
	},
	question3: {
		description: (
			<p className={style.description}>
				После пробного бесплатного периода подписка Tess Market +
				продлевается автоматически — и плата за подписку списывается с
				привязанной карты.
				<br />
				Отменить подписку можно в любой момент.
			</p>
		),
		header: (
			<p className={style.header}>Зачем нужны данные банковской карты?</p>
		),
	},
	question4: {
		description: (
			<p className={style.description}>
				К аккаунту должна быть привязана карта. Не беспокойтесь — пока
				не закончится пробный период, никаких списаний не будет. Если вы
				привязываете новую карту, с неё списывается и тут же
				возвращается небольшая сумма денег — это чтобы убедиться, что с
				картой всё в порядке.
			</p>
		),
		header: (
			<p className={style.header}>
				Можно ли попробовать подписку, не привязывая банковскую карту?
			</p>
		),
	},
	question5: {
		description: (
			<p className={style.description}>
				В личном кабинете. За 3 дня до окончания пробного периода и
				первого списания с карты мы пришлём письмо с напоминанием на
				почту.
			</p>
		),
		header: (
			<p className={style.header}>
				Как узнать, когда закончится бесплатный пробный период?
			</p>
		),
	},
	question6: {
		description: (
			<p className={style.description}>
				Нет. Вы можете пользоваться платформой,подписка ускорит продажи
				и даст дополнительный функционал.
			</p>
		),
		header: <p className={style.header}>Подписка обязательная?</p>,
	},
};
