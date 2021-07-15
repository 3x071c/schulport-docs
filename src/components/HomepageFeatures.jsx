import React from 'react';
import appImg from '../../static/img/undraw_progressive_app.svg';
import appreciationImg from '../../static/img/undraw_Appreciation.svg';
import clsx from 'clsx';
import educationImg from '../../static/img/undraw_education.svg';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
	{
		Svg: educationImg,
		description: (
			<>
				Schulport enables students to check important dates, events, homework, their substitution schedule, and
				more
			</>
		),
		id: 1,
		title: 'Convenient',
	},
	{
		Svg: appImg,
		description: <>Available on all major platforms as a hybrid web app (Web, iOS, android, and possibly more)</>,
		id: 2,
		title: 'Approachable',
	},
	{
		Svg: appreciationImg,
		description: <>Well documented, exceptionally beautiful</>,
		id: 3,
		title: 'Awesome',
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx('col col--4')}>
			<div className='text--center'>
				<Svg className={styles.featureSvg} alt={title} />
			</div>
			<div className='text--center padding-horiz--md'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className='container'>
				<div className='row'>
					{FeatureList.map(({ id, ...props }) => (
						<Feature key={id} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
