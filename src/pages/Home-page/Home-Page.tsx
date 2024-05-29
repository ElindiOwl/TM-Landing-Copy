import { Wrapper } from 'shared/ui';
import { Slogan } from 'widgets/ui';

import { InformationSection } from './Information-Section/Information-Section.tsx';

export const HomePage = () => {
	return (
		<Wrapper>
			<Slogan />
			<InformationSection />
		</Wrapper>
	);
};
