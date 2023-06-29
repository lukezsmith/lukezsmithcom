import React from 'react';

function ProjectView() {
  return (
    <div id='project-section'>
      <h1>Projects</h1>
      <p>
      Currently, I'm building <a target="_blank" href="https://alertbnb.com">Alertbnb</a>, 
        a real-time alert and listing suite for Airbnb 
        that lets you setup price and availability alerts for listings.
        </p>
      <p>
        The majority of my projects can be found on my{' '}
        <a
          style={{ fontWeight: 'bold', color: '#385e94' }}
          href='https://github.com/lukezsmith'
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}

export default ProjectView;
