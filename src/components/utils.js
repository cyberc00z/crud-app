import React from "react";
import { Dayjs } from "dayjs";


export function readableTimestamp(timestamp, tDateTimeParser){
    let time;
    if (
        typeof timestamp === 'string' && timestamp[timestamp.length - 1].toLowerCase() === 'z'
    ){
        time = tDateTimeParser(timestamp);
    } 
    else {
        time = tDateTimeParser(timestamp).add(
           Dayjs(timestamp).utcOffset(),
           'minute'
        ); //parsing time UTC standard
    }
    const now = tDateTimeParser();
    return time.from(now);
}

// 