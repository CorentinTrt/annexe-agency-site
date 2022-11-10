type Classes = {
  targetClasse: string
  inClasse: string
  outClasse: string
}

const addBlinkEffect = (classes: Classes) => {
	const blinkTextMenuLinks = document.querySelectorAll(`#blink-text li a`);

  console.log(blinkTextMenuLinks);

	blinkTextMenuLinks.forEach((link) => {
		const letters = link?.textContent?.split('');
		link.textContent = '';

		if (!letters) return;
		letters.forEach((letter, i) => {
			i += 1;
			const span = document.createElement('span');
			let delay = i / 20;
			if (i % 2 === 0) {
				delay -= 0.1;
			} else {
				delay += 0.05;
			}

			const letterOut = document.createElement('span');
			letterOut.textContent = letter;
			letterOut.style.transitionDelay = `${delay}s`;
			letterOut.classList.add(classes.outClasse);
			span.append(letterOut);

			const letterIn = document.createElement('span');
			letterIn.textContent = letter;
			letterIn.style.transitionDelay = `${delay}s`;
			letterIn.classList.add(classes.inClasse);
			span.append(letterIn);
			link.append(span);
		});
	});
};

export default addBlinkEffect;
