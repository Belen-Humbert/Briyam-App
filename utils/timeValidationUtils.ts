// timeValidationUtils.ts

import { convertTo12HourFormat } from './timeFormatUtils';

export const validateTime = (hour: number | null, minute: number | null, period: 'AM' | 'PM' | null, currentHour: number, currentMinute: number) => {
    const { hour12: currentHour12, period: currentPeriod } = convertTo12HourFormat(currentHour);

    const validHour = (hour !== null && hour >= 1 && hour <= 12) ? `${hour < 10 ? '0' : ''}${hour}` : `${currentHour12 < 10 ? '0' : ''}${currentHour12}`;
    const validMinute = (minute !== null && minute >= 0 && minute < 60) ? `${minute < 10 ? '0' : ''}${minute}` : `${currentMinute < 10 ? '0' : ''}${currentMinute}`;
    const validPeriod = (period === 'AM' || period === 'PM') ? period : currentPeriod;

    return { validHour, validMinute, validPeriod };
};
