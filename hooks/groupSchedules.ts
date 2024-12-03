// groupSchedules.ts

import { Schedule } from '@types/Schedule.types';
import { GroupedSchedule } from '@types/GroupedSchedule.types';

export const groupSchedules = (schedules: Schedule[]): GroupedSchedule[] => {
    
  const groupedSchedules: GroupedSchedule[] = [];
  let currentRange: GroupedSchedule | null = null;

  schedules.forEach((schedule, index) => {
    if (schedule.isEnabled) {
      const currentDay = schedule.day;
      const startTime = schedule.startTime;
      const endTime = schedule.endTime;

      if (!currentRange) {
        currentRange = { days: [currentDay], startTime, endTime };
      } else if (currentRange.startTime === startTime && currentRange.endTime === endTime) {
        currentRange.days.push(currentDay);
      } else {
        groupedSchedules.push(currentRange);
        currentRange = { days: [currentDay], startTime, endTime };
      }
    }

    if (index === schedules.length - 1 && currentRange) {
      groupedSchedules.push(currentRange);
    }
  });

  return groupedSchedules;
};
