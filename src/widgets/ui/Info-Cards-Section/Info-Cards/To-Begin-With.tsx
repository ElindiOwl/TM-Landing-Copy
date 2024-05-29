import { InfoCardWidget } from 'shared/ui';
import { toBeginWithDTO } from 'entities/Info-Cards';

export const ToBeginWith = () => {
	return <InfoCardWidget header={'Как начать?'} mapToUse={toBeginWithDTO} />;
};
