import HomepageFeatures from '../components/HomepageFeatures';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import clsx from 'clsx';
import styles from './index.module.css';

export default function Home() {
	return (
		<Layout
			description={translate({
				description: 'The description of the landing page',
				id: 'index.description',
				message:
					'The app that enables pupils to check important dates, events, homework, substitution schedules, and more',
			})}>
			<header className={clsx('hero hero--primary', styles.heroBanner)}>
				<div className='container'>
					<h1 className='hero__title'>
						<Translate id='index.title' description='The title on the landing page'>
							Schulport Documentation
						</Translate>
					</h1>
					<p className='hero__subtitle'>
						<Translate id='index.description' description='The subtitle on the landing page'>
							The app that enables pupils to check important dates, events, homework, substitution
							schedules, and more
						</Translate>
					</p>
					<div className={styles.buttons}>
						<Link className='button button--secondary button--lg' to='/docs/intro'>
							<Translate id='index.button' description='The button text on the landing page'>
								Introduction
							</Translate>{' '}
							⚡
						</Link>
					</div>
				</div>
			</header>
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
