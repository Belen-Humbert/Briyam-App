// ScheduleDisplayCard.tsx
import React from 'react';
import { Box, Text } from 'native-base';
import { getDayColor } from '@utils/getDayColor';
import { GroupedSchedule } from '@types/Schedule.types';

const ScheduleDisplayCard = ({ range }: { range: GroupedSchedule }) => (
  <Box
    bg={getDayColor(range.days[0])}
    p={4}
    rounded="md"
    shadow={1}
    borderWidth={1}
    borderColor="gray.200"
  >
    <Text fontSize="md" color="gray.600">
      <Text bold color="black">
        {range.days.join(' a ')}
      </Text>
      : {range.startTime} hrs - {range.endTime} hrs.
    </Text>
  </Box>
);

export default ScheduleDisplayCard;
