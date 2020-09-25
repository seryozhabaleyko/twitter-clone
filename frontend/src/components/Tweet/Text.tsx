import React from 'react';

function Text({ text }: { text: string }) {
    return <p dangerouslySetInnerHTML={{ __html: text }}></p>;
}

export default Text;
