// DoctorScheduleSection.tsx
import React from 'react';
import { Box } from 'native-base';
import TimePickerNativeBase from './TimePickerNativeBase';
import ScheduleList from '@components/ScheduleList';
import LoadingError from '@components/LoadingError';
import useDoctorSchedule  from '@hooks/useDoctorSchedule';
import ScheduleHeader from '@components/ScheduleHeader';
import { Schedule } from '@types/Schedule.types'; // Asegúrate de importar el tipo Schedule

const DoctorScheduleSection = ({ isEditMode, marginTop }: { isEditMode: boolean, marginTop?:number }) => {
  
  const {
    schedules,
    loading,
    error,
    visible,
    selectedSchedule,
    isSelectingStartTime,
    showTimePicker,
    handleConfirmTime,
    setVisible,
    setSchedules, // Asegúrate de que setSchedules sea un setter de useState
  } = useDoctorSchedule();

  return (
    <Box mt={marginTop}>
      <ScheduleHeader isEditMode={isEditMode} />
      <LoadingError loading={loading} error={error} />
      <ScheduleList
        schedules={schedules}
        isEditMode={isEditMode}
        onToggle={(schedule: Schedule) => 
          setSchedules((prevSchedules: Schedule[]) => 
            prevSchedules.map((s) =>
              s.day === schedule.day ? { ...s, isEnabled: !s.isEnabled } : s
            )
          )
        }
        onSelectStartTime={(schedule) => showTimePicker(schedule, true)}
        onSelectEndTime={(schedule) => showTimePicker(schedule, false)}
      />
      <TimePickerNativeBase
        isOpen={visible}
        onConfirm={handleConfirmTime}
        onCancel={() => setVisible(false)}
        initialHour={selectedSchedule?.startTime ? parseInt(selectedSchedule.startTime.split(':')[0]) : 8}
        initialMinute={selectedSchedule?.startTime ? parseInt(selectedSchedule.startTime.split(':')[1]) : 0}
        isSelectingStartTime={isSelectingStartTime}
      />
    </Box>
  );
};

export default DoctorScheduleSection;
