// ScheduleList.tsx
import React from 'react';
import { VStack } from 'native-base';
import ScheduleCard from '@components/ScheduleCard';
import ScheduleDisplayCard from '@components/ScheduleDisplayCard';
import { Schedule } from '@types/Schedule.types';
import { groupSchedules } from '@hooks/groupSchedules';

const ScheduleList = ({
  schedules,
  isEditMode,
  onToggle,
  onSelectStartTime,
  onSelectEndTime,
}: {
  schedules: Schedule[];
  isEditMode: boolean;
  onToggle: (schedule: Schedule) => void;
  onSelectStartTime: (schedule: Schedule) => void;
  onSelectEndTime: (schedule: Schedule) => void;
}) => {
  return isEditMode ? (
    <VStack space={4}>
      {schedules.map((schedule) => (
        <ScheduleCard
          key={schedule.day}
          schedule={schedule}
          onToggle={onToggle}
          onSelectStartTime={onSelectStartTime}
          onSelectEndTime={onSelectEndTime}
        />
      ))}
    </VStack>
  ) : (
    <VStack space={2}>
      {groupSchedules(schedules).map((range, index) => (
        <ScheduleDisplayCard key={index} range={range} />
      ))}
    </VStack>
  );
};

export default ScheduleList;
