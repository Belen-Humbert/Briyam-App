// ScheduleCard.tsx
import React from 'react';
import { Box } from 'native-base';
import ScheduleItem from '@components/ScheduleItem';
import { Schedule } from '@types/Schedule.types';
import { getDayColor } from '@utils/getDayColor';

const ScheduleCard = ({
  schedule,
  onToggle,
  onSelectStartTime,
  onSelectEndTime,
}: {
  schedule: Schedule;
  onToggle: (schedule: Schedule) => void;
  onSelectStartTime: (schedule: Schedule) => void;
  onSelectEndTime: (schedule: Schedule) => void;
}) => (
  <Box
    bg={getDayColor(schedule.day)}
    p={4}
    rounded="md"
    shadow={2}
    borderWidth={1}
    borderColor="gray.200"
  >
    <ScheduleItem
      schedule={schedule}
      onToggle={() => onToggle(schedule)}
      onSelectStartTime={() => onSelectStartTime(schedule)}
      onSelectEndTime={() => onSelectEndTime(schedule)}
    />
  </Box>
);

export default ScheduleCard;
