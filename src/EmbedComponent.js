import React, { useEffect } from 'react';

const EmbedComponent = ({ dataId }) => {
  useEffect(() => {
    const data = {
      '001': ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'Heading 5'],
      '002': ['Title 1', 'Title 2', 'Title 3', 'Title 4', 'Title 5'],
    };

    const headings = data[dataId];

    if (headings) {
      const listItems = headings.map((heading, index) => (
        <li key={index}>{heading}</li>
      ));

      const element = document.getElementById('headings');
      element.innerHTML = '';
      element.append(...listItems);
    }
  }, [dataId]);

  return <div id="headings"></div>;
};

export default EmbedComponent;
