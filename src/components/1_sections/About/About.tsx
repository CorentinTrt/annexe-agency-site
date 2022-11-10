import React from 'react';
import s from "./styles.module.scss"

import Dash from '@svgs/dash.svg';

const s_presentation_title = 'a propos';
const s_presentation =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. .';
const s_phiolosophy_title = 'notre philosophie';
const s_philosophy =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. .';
const s_actions_title = 'nos actions';
const s_actions = [
	'Etude de cas',
	'Redaction cahier des charges',
	'Conception site web',
	'Creation site web',
	'Accompagnement technique',
	`Renforcement d'equipe technique`,
];

const About = () => {
	return (
		<div className={s['about']}>
			<div className={s['about--description']}>
				<h2 className={s['title']}>{s_presentation_title}</h2>
				<h3 className={s['description']}>{s_presentation}</h3>
			</div>

			<div className='divider'></div>

			<div className={s['about--philosophy']}>
				<h2 className={s['title']}>{s_phiolosophy_title}</h2>
				<h4 className={s['description']}>{s_philosophy}</h4>
			</div>

			<div className='divider'></div>

			<div className={s['about--actions']}>
				<h2 className={s['title']}>{s_actions_title}</h2>
				<ul>
					{s_actions.map((e, i) => (
						<li key={`action${i}`}>
              <Dash />
							<h4 className={s['action']}>{e}</h4>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default About;
