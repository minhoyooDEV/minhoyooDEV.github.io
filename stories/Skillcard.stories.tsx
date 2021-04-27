import React from 'react';
import { Story, Meta } from '@storybook/react';
import SkillCard from '../components/SkillCard';
import Image from '../public/skill_icon/javascript.png';

export default {
	title: 'Example/SkillCard',
	component: SkillCard,
	argTypes: {
		title: String,
		desc: String,
		img: String,
		gradientColor: { description: 'tailwind gradient', name: 'gradient color' },
	},
} as Meta;

export const Template: React.VFC = () => (
	<SkillCard title="test" desc="desc" gradientColor="left" img={Image} />
);
