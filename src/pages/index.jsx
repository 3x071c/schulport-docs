import HomepageFeatures from '../components/HomepageFeatures';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<Layout description='The app that enables pupils to check important dates, events, homework, substitution schedules, and more'>
			<header className={clsx('hero hero--primary', styles.heroBanner)}>
				<div className='container'>
					<h1 className='hero__title'>{siteConfig.title}</h1>
					<p className='hero__subtitle'>{siteConfig.tagline}</p>
					<div className={styles.buttons}>
						<Link className='button button--secondary button--lg' to='/docs/intro'>
							Introduction ⚡
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
