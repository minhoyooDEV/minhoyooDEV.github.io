import { LegacyRef, MouseEventHandler, useRef, useState } from 'react';
import { SkillData } from '../../interfaces/Skill';
import styles from './SkillCard.module.scss';

// Inspired from
// https://github.com/developedbyed/3d-card-effect

interface SkillCardProps extends SkillData {}

const SkillCard = ({ img, gradientColor, title, desc }: SkillCardProps) => {
	const persfectiveContainer: LegacyRef<HTMLDivElement> = useRef(null);
	const container: LegacyRef<HTMLDivElement> = useRef(null);
	const [containerStyle, setContainerStyle] = useState({});
	const [imgStyle, setImgStyle] = useState({});
	const [titleStyle, setTitleStyle] = useState({});
	const [descStyle, setDescStyle] = useState({});

	// moving animation
	const handleContainerMouseMove: MouseEventHandler<HTMLDivElement> = e => {
		// console.warn('handleContainerMouseOver');
		const relX = e.clientX - (persfectiveContainer.current?.offsetLeft || 0);
		const relY = e.clientY - (persfectiveContainer.current?.offsetTop || 0) + window.scrollY;

		const xAxis = ((persfectiveContainer.current?.offsetWidth || 0) / 2 - relX) / 15;
		const yAxis = ((persfectiveContainer.current?.offsetHeight || 0) / 2 - relY) / 15;

		setContainerStyle({
			...containerStyle,
			transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`,
		});
	};

	// animate in
	const handleContainerMouseEnter: MouseEventHandler<HTMLDivElement> = e => {
		// console.warn('handleContainerMouseEnter');
		setContainerStyle({ ...containerStyle, transition: 'none' });
		setImgStyle({ ...imgStyle, transform: 'translateZ(40px)' });
		setTitleStyle({ ...titleStyle, transform: 'translateZ(50px)' });
		setDescStyle({ ...descStyle, transform: 'translateZ(10px)' });
	};
	// animate out
	const handleContainerMouseLeave: MouseEventHandler<HTMLDivElement> = e => {
		// console.warn('handleContainerMouseLeave');
		setContainerStyle({
			...containerStyle,
			transition: 'all 0.5s ease',
			transform: `rotateY(0deg) rotateX(0deg)`,
		});
		setTitleStyle({ ...titleStyle, transform: 'translateZ(0px)' });
		setImgStyle({ ...imgStyle, transform: 'translateZ(0px)' });
		setDescStyle({ ...descStyle, transform: 'translateZ(0px)' });
	};
	return (
		<div ref={persfectiveContainer} className={styles.perspertive}>
			<div
				ref={container}
				className={`flex items-center justify-center px-8 ${styles.container}`}
				onMouseMove={handleContainerMouseMove}
				onMouseEnter={handleContainerMouseEnter}
				onMouseLeave={handleContainerMouseLeave}
				style={containerStyle}
			>
				<div
					className={`w-60 h-80 px-3 border-solid rounded-lg border-1 border-light-blue-500 shadow-2xl ${styles.card}`}
				>
					<div className={`${styles.sneaker} flex items-center justify-center min-h-44`}>
						<div
							className={`rounded-full w-36 h-36 bg-gradient-to-r ${gradientColor} absolute z-1`}
						></div>
						<img className="w-32 z-10" style={imgStyle} src={img} />
					</div>
					<div className={`my-4 ${styles.info}`}>
						<h1 style={titleStyle} className="text-2xl">
							{title}
						</h1>
						<h3 style={descStyle} className="mt-2">
							{desc}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillCard;
