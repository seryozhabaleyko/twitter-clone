import React from 'react';
import ContentLoader from 'react-content-loader';

function TweetLoader(props: any) {
    return (
        <ContentLoader
            speed={2}
            width={600}
            height={200}
            viewBox="0 0 600 200"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <circle cx="40" cy="35" r="25" />
            <rect x="75" y="20" rx="1" ry="1" width="120" height="15" />
            <rect x="200" y="20" rx="1" ry="1" width="60" height="15" />
            <rect x="571" y="20" rx="1" ry="1" width="15" height="15" />

            <rect x="75" y="50" rx="2" ry="2" width="490" height="10" />
            <rect x="75" y="70" rx="2" ry="2" width="510" height="10" />
            <rect x="75" y="90" rx="2" ry="2" width="500" height="10" />
            <rect x="75" y="110" rx="2" ry="2" width="378" height="10" />

            <rect x="75" y="140" rx="2" ry="2" width="32" height="32" />
            <rect x="200" y="140" rx="2" ry="2" width="32" height="32" />
            <rect x="325" y="140" rx="2" ry="2" width="32" height="32" />
            <rect x="450" y="140" rx="2" ry="2" width="32" height="32" />
        </ContentLoader>
    );
}

export default TweetLoader;
