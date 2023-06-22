import React, { useEffect, useState } from 'react';

const Embed = ({ dataId }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const data = {
      '001': ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'Heading 5'],
      '002': ['Title 1', 'Title 2', 'Title 3', 'Title 4', 'Title 5'],
    };

    setHeadings(data[dataId] || []);
  }, [dataId]);

  return (
    <div id="headings">
      <ul>
        {headings.map((heading, index) => (
          <li key={index}>{heading}</li>
        ))}
      </ul>
    </div>
  );
};

export default Embed;
