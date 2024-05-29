import { SingleInfoCard, SingleInfoCardProps } from 'shared/ui';
import { FC, ReactNode } from 'react';

import style from './Info-Card-Widget.module.scss';

export interface InfoCardWidgetProps {
	header: string | ReactNode;
	text?: string;
	mapToUse: SingleInfoCardProps[];
}

export const InfoCardWidget: FC<InfoCardWidgetProps> = ({
	header,
	text = '',
	mapToUse,
}) => {
	return (
		<div className={style.infoCardWidget}>
			<div className={style.infoCardWidget__header}>
				<h2>{header}</h2>
				<p>{text}</p>
			</div>
			<div className={style.infoCardWidget__Cards}>
				{mapToUse.map((data, index) => (
					<SingleInfoCard
						key={index}
						description={data.description}
						header={data.header}
						title={data.title}
					/>
				))}
			</div>
		</div>
	);
};
