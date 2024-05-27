import { FC, ReactNode } from 'react';

import style from './Wrapper.module.scss';

interface WrapperProps {
	children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
	return <div className={style.containerApp}>{children}</div>;
};
