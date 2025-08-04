import React from 'react';

function News() {
  return React.createElement('div', {}, [
    React.createElement('h1', { key: 'title' }, 'Latest News & Updates'),
    React.createElement('div', { key: 'content' }, [
      React.createElement('h2', { key: 'article1' }, 'Gathering Insights from Biathletes at the Biathlon Development Camp in Lillehammer'),
      React.createElement('p', { key: 'date1' }, 'January 15, 2025 | Research'),
      React.createElement('p', { key: 'desc1' }, 'A team of researchers recently travelled to Lillehammer to collaborate with the Biathlon Development Camp.'),
      React.createElement('h2', { key: 'article2' }, 'DC4Biathletes at the IBU Youth and Junior World Championships'),
      React.createElement('p', { key: 'date2' }, 'March 10, 2025 | Events'),
      React.createElement('p', { key: 'desc2' }, 'The DC4Biathletes project was actively promoted at the Championships in Sweden.')
    ])
  ]);
}

export default News;