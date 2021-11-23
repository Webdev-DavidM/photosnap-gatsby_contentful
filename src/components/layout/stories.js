import React from 'react';
import '../../scss/stories.scss';
import Story from './story';

export default function stories({ stories }) {
  return (
    <div className='stories'>
      {stories.map((story) => (
        <Story story={story.node} />
      ))}
    </div>
  );
}
