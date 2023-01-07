import { FC, useCallback } from 'react';
import { Box, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { ControllerRenderProps } from 'react-hook-form/dist/types';
import { Stack } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { COLORS } from '../../../constants/ui.constant';
import Repeat from './repeat/Repeat.component';
import Timer from './timer/Timer.component';
import { ITask, ROUTINE, TASK_STATUS } from '../../../common/task.model';

interface ITaskBoxProps {
  initValue?: ITask;
  fullWidth?: boolean;
}

const defaultValue = {
  status: TASK_STATUS.TODO,
  name: '',
  time: {
    start: '',
    estimate: 0,
    end: '',
  },
};

const TaskBox: FC<ITaskBoxProps> = ({
  fullWidth = true,
  initValue = defaultValue,
}) => {
  const { handleSubmit, control } = useForm<ITask>({
    defaultValues: initValue,
  });

  const handleInternalSubmit = () => {
    // submit value here
  };

  const renderInput = useCallback(
    ({ field }: { field: ControllerRenderProps<ITask, 'name'> }) => {
      return (
        <Stack
          flexDirection="row"
          alignItems="center"
          sx={{
            backgroundColor: COLORS.secondBackgroundColor,
            borderRadius: '10px',
            outline: 'none',
            '& input': {
              color: COLORS.secondTextColor,
            },
          }}
        >
          <Box paddingX="10px" paddingBottom="0" height="24px">
            <RadioButtonUncheckedIcon />
          </Box>

          <TextField
            fullWidth={fullWidth}
            size="small"
            {...field}
            sx={{
              opacity: 0.9,
              cursor: COLORS.secondTextColor,
              borderRadius: '4px',
              backgroundColor: COLORS.secondBackgroundColor,

              '& input': {
                outline: 'none',
                border: 0,
                backgroundColor: COLORS.secondBackgroundColor,
              },

              '& fieldset': {
                outline: 'none',
                border: 0,
                backgroundColor: COLORS.secondBackgroundColor,
                color: COLORS.secondTextColor,
              },

              '& fieldset:focus, & fieldset:hover': {
                outline: 'none',
                border: 0,
                backgroundColor: COLORS.secondBackgroundColor,
                color: COLORS.secondTextColor,
              },
            }}
          />

          <Stack flexDirection="row">
            <Timer control={control} />

            <Repeat control={control} />
          </Stack>
        </Stack>
      );
    },
    [control]
  );

  return (
    <form onSubmit={handleSubmit(handleInternalSubmit)}>
      <Box>
        <Controller control={control} name="name" render={renderInput} />
      </Box>
    </form>
  );
};

export default TaskBox;
