import { InfoCardWidget } from 'shared/ui';
import { collaborationModelsDTO } from 'entities/Info-Cards';

export const CollaborationModels = () => {
	return (
		<InfoCardWidget
			header={'Модели сотрудничества'}
			mapToUse={collaborationModelsDTO}
			text={'Работайте по модели, которая подходит вам.'}
		/>
	);
};
