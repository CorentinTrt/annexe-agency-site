type Classes = {
  block: string;
  letter: string;
};

const addRollingEffect = (classes: Classes) => {
  const elements = document.querySelectorAll("#rolling-text");

  if (!elements) return;
  elements.forEach((element) => {
    const innerText = element.textContent;
    
    element.innerHTML = "";

    const textContainer = document.createElement("div");
    textContainer.classList.add(classes.block);

    if (!innerText) return;
    for (let letter of innerText) {
      const span = document.createElement("span");
      span.innerText = letter.trim() === "" ? "\xa0" : letter;
      span.classList.add(classes.letter);
      textContainer.appendChild(span);
    }

    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));
  });
};

export default addRollingEffect;
