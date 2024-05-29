import { FC, ReactNode } from 'react';
import { Footer } from 'widgets/ui';

import style from './Wrapper.module.scss';

interface WrapperProps {
	children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
	return (
		<div className={style.wrapper}>
			<div className={style.wrapper__containerApp}>{children}</div>
			<div className={style.wrapper__footer}>
				<Footer />
			</div>
		</div>
	);
};
