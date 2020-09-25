import React from 'react';

interface TextProps {
    text: string;
}

function Text({ text }: TextProps): JSX.Element {
    return (
        <div className="tweet__text">
            <span>{text}</span>
        </div>
    );
}

export default Text;
