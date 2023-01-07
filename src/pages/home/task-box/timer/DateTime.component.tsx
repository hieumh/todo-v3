import { FC, useState, useCallback } from 'react';
import { Control, Controller, useController } from 'react-hook-form';
import dayjs, { Dayjs } from 'dayjs';
import { ITask } from '../../../../common/task.model';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';

interface IDateTimeProps {
  name: keyof ITask | string;
  control: Control<ITask>;
}

const DateTime: FC<IDateTimeProps> = ({ name, control }) => {
  const { field } = useController({ name: name as keyof ITask, control });
  const [value, setValue] = useState<Dayjs | null>(
    dayjs(field.value as string) || null
  );

  const renderInput = useCallback((props: any) => {
    return <TextField size="small" {...props} />;
  }, []);

  const handleChangeDateTime = (value: Dayjs | null) => {
    setValue(value);
    field.onChange(dayjs(value).format());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={renderInput}
        value={value}
        onChange={handleChangeDateTime}
      />
    </LocalizationProvider>
  );
};
export default DateTime;
