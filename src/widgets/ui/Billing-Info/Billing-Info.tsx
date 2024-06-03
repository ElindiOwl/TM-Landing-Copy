import { Questions, SubscriptionOptions } from 'widgets/ui';
import { SubscriptionQuestionsMap } from 'entities/Questions';

export const BillingInfo = () => {
	return (
		<div>
			<SubscriptionOptions />
			<Questions
				mapToUse={SubscriptionQuestionsMap}
				questionsHeader={'Остались вопросы?'}
			/>
		</div>
	);
};
