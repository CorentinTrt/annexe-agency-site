import React, { useEffect } from 'react';
import s from "./styles.module.scss";

const Hooking = () => {
	useEffect(() => {
		if (!window) return;

		const textGroup = document.querySelector('#hooking-text');
		const firstChild = textGroup?.childNodes[0] as HTMLElement;
		const secondChild = textGroup?.childNodes[1] as HTMLElement;

    textGroup?.classList.add(s['animated']);
		firstChild?.classList.add(s['animated']);
    secondChild?.classList.add(s['animated']);
	}, []);

	return (
		<div className={s['hooking']} data-scroll-section>
			<div className={s['bg-container']}>
				<video autoPlay muted loop>
					<source src='/videos/bg_video.mp4' type='video/mp4' />
				</video>

				<div id='hooking-text' className={s['text-container']}>
					<h2 className={s['text']}>STAY</h2>
					<h2 className={s['text']}>INNOVATIVE</h2>
				</div>
			</div>
		</div>
	);
};

export default Hooking;
