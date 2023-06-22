import React, { useEffect } from 'react';

const Embed = ({ dataId }) => {
  useEffect(() => {
    const data = {
      '001': ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'Heading 5'],
      '002': ['Title 1', 'Title 2', 'Title 3', 'Title 4', 'Title 5'],
    };

    const headings = data[dataId];

    if (headings) {
      const ulElement = document.createElement('ul');

      headings.forEach((heading) => {
        const liElement = document.createElement('li');
        liElement.textContent = heading;
        ulElement.appendChild(liElement);
      });

      const element = document.getElementById('headings');

      while (element.firstChild) {
        element.firstChild.remove();
      }

      element.appendChild(ulElement);
    }
  }, [dataId]);

  return <div id="headings" />;
};

export default Embed;
