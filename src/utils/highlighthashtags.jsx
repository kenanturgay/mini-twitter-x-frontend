import React from 'react';

const highlighthashtags = (text) => {
    const hashtagPattern = /#\w+/g;
    const parts = text.split(hashtagPattern);

    return parts.map((part, index) => (
        index < parts.length - 1 ? (
            <React.Fragment key={index}>
                {part}
                <span className='text-twitter-blue'>{text.match(hashtagPattern)[index]}</span>
            </React.Fragment>
        ) : part
    ));
};

export default highlighthashtags;