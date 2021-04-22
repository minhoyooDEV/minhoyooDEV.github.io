import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { Spandable } from '../components/Spandable';
import SkillCardList from '../components/SkillCardList';
import SkillCard from '../components/SkillCard';
import { SkillData } from '../interfaces/Skill';

const skillData: SkillData[] = [
	{
		title: 'JAVASCRIPT',
		desc: 'super master',
		gradientColor: 'from-yellow-300',
		img: '/skill_icon/javascript.png',
	},
	{
		title: 'Python',
		desc: 'leraning',
		gradientColor: 'from-blue-200 to-yellow-200',
		img: '/skill_icon/python.png',
	},
];

const projectsData = [
	{
		date: '2021-04-21',
		name: 'my-style-commerce',
		link: 'https://my-style-commerce-rouge.vercel.app',
		repo: 'https://github.com/minhoyooDEV/my-style-commerce',
	},
	{
		date: '2021-04-10',
		name: 'my-lms',
		link: 'https://myno-lms.vercel.app/courses',
		repo: 'https://github.com/minhoyooDEV/myno_lms',
	},
];
interface HomeProps {
	data: string[];
}
export default function Home({ data }: HomeProps) {
	return (
		<>
			<Head>
				<title>WELCOME✋ </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className="container mx-auto px-4"></section>
			<section className="container mx-auto px-4">
				<h2 className="text-2xl font-bold">SAMPLE PROJECTS</h2>
				<ul className="ml-5 list-disc">
					{projectsData.map(({ date, link, repo, name }) => {
						return (
							<li key={name} className="mt-3">
								<h4 className="text-xl">
									<b>{date}</b> - <b>{name}</b>
								</h4>
								<div>
									<a className="text-purple-600" href={link}>
										{link}
									</a>
								</div>
								<div>
									<a className="text-purple-400" href={repo}>
										{repo}
									</a>
								</div>
							</li>
						);
					})}
				</ul>
				{/* <SkillCardList>
					{skillData.map(props => (
						<SkillCard key={props.title} {...props} />
					))}
				</SkillCardList> */}
			</section>
		</>
	);
}
