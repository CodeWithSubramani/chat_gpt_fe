import React from 'react';
import { formatDistanceToNow } from 'date-fns';

interface Props {
    timestamp: string;
}

const TimeAgo: React.FC<Props> = ({ timestamp }) => {
    const browserTimezoneOffset = new Date().getTimezoneOffset();
    const utcTimestamp = new Date(timestamp);
    const localTimestamp = new Date(utcTimestamp.getTime() - (browserTimezoneOffset * 60 * 1000)); // Adjust timestamp for browser's timezone offset
    const formattedTime = formatDistanceToNow(localTimestamp, { addSuffix: true });

    return <div className='opacity-30 text-sm'>{formattedTime}</div>;
};

export default TimeAgo;
