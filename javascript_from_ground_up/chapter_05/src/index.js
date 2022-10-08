function genElement(tagName, attributes) {
  const element = document.createElement(tagName);

  for (let key in attributes) {
    if (!element.hasAttribute(key)) {
      element.setAttribute(key, attributes[key]);
    }
  }

  return element;
}

function append(newElement, holderElement) {
  holderElement.appendChild(newElement);
}

function setText(element, text) {
  element.textContent = text;
}

function generateBannerSection() {
  const container = genElement('div', {class: 'header-container'});
  const h1El = genElement('h1');
  setText(h1El, 'Hello from DOM manipulator!!!');

  const headerContentContainer = genElement('div', {
    class: 'content-container',
  });

  const dividerElement = genElement('hr', {
    class: 'separator',
  });

  const paragraph = genElement('p');
  setText(
    paragraph,
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint tempore alias velit voluptates culpa, fugit quisquam nulla at cupiditate sequi ut voluptatum dolorum vero repudiandae molestias quas similique commodi.'
  );

  const actionButton = genElement('button');
  setText(actionButton, 'Subscribe');

  append(h1El, headerContentContainer);
  append(headerContentContainer, container);
  append(dividerElement, headerContentContainer);
  append(paragraph, headerContentContainer);
  append(actionButton, headerContentContainer);
  append(container, document.body);
}

generateBannerSection();
