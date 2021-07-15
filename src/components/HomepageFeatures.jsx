import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import appImg from '../../static/img/undraw_progressive_app.svg';
import appreciationImg from '../../static/img/undraw_Appreciation.svg';
import clsx from 'clsx';
import educationImg from '../../static/img/undraw_education.svg';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
	{
		Svg: educationImg,
		description: (
			<Translate
				id='features.1.description'
				description='The first item of the feature showcase on the landing page'>
				Schulport enables students to check important dates, events, homework, their substitution schedule, and
				more
			</Translate>
		),
		id: 1,
		title: translate({
			description: 'The first item of the feature showcase on the landing page',
			id: 'features.1.title',
			message: 'Convenient',
		}),
	},
	{
		Svg: appImg,
		description: (
			<Translate
				id='features.2.description'
				description='The second item of the feature showcase on the landing page'>
				Available on all major platforms as a hybrid web app (Web, iOS, android, and possibly more)
			</Translate>
		),
		id: 2,
		title: translate({
			description: 'The second item of the feature showcase on the landing page',
			id: 'features.2.title',
			message: 'Approachable',
		}),
	},
	{
		Svg: appreciationImg,
		description: (
			<Translate
				id='features.3.description'
				description='The third item of the feature showcase on the landing page'>
				Well documented, exceptionally beautiful
			</Translate>
		),
		id: 3,
		title: translate({
			description: 'The third item of the feature showcase on the landing page',
			id: 'features.3.title',
			message: 'Awesome',
		}),
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
