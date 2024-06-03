import { BigLinkButton } from 'shared/ui';

import { CollaborationModels } from './Info-Cards/Collaboration-Models.tsx';
import { ToBeginWith } from './Info-Cards/To-Begin-With.tsx';
import style from './Info-Cards-Section.module.scss';

export const InfoCardsSection = () => {
	return (
		<>
			<CollaborationModels />
			<ToBeginWith />
			<div className={style.infoCardsSection__button}>
				<BigLinkButton
					link={'https://apps.apple.com/ru/'}
					text={'Стать продавцом'}
				/>
			</div>
		</>
	);
};
