import Link from 'next/link';

interface HeaderProps {}
const Header = ({}: HeaderProps) => {
	return (
		<header className="container mx-auto px-4">
			<div className="py-4">
				<Link href={`/`}>
					<a>
						<h1 className={'container mx-auto text-center text-7xl'}>
							Welcome to &nbsp;
							<span className="text-red-400 font-mono">
								MYNO<span className="text-red-600">UB</span>
							</span>
						</h1>
					</a>
				</Link>
			</div>
		</header>
	);
};

export default Header;
