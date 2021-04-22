import { ReactNode } from 'react';

interface MainWrapperProps {
	children: ReactNode;
}

const MainWrapper = ({ children }: MainWrapperProps) => {
	return <div>{children}</div>;
};

export default MainWrapper;
