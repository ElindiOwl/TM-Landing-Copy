import { BigLinkButton } from 'shared/ui';
import { CollaborationModels } from 'widgets/ui/Info-Cards-Section/Info-Cards/Collaboration-Models.tsx';
import { ToBeginWith } from 'widgets/ui/Info-Cards-Section/Info-Cards/To-Begin-With.tsx';

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
