// timeFormatUtils.ts

export const convertTo12HourFormat = (hour24: number) => {
    const period = hour24 >= 12 ? 'PM' : 'AM';
    const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
    return { hour12, period };
};
