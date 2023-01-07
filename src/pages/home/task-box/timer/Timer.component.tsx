import { FC, useState, MouseEvent } from 'react';
import { Box, IconButton, MenuItem, Stack, Typography } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Menu from '@mui/material/Menu';
import { Control, Controller } from 'react-hook-form';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import { ITask } from '../../../../common/task.model';
import DateTime from './DateTime.component';

interface ITimerProps {
  control: Control<ITask>;
}

const Timer: FC<ITimerProps> = ({ control }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenTimerForm = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleOpenTimerForm}>
        <AccessAlarmIcon fontSize="small" />
      </IconButton>

      <Menu
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Box padding="14px">
          <Typography variant="h5">Setup your time:</Typography>
          <Box marginTop="14px">
            <Typography>Estimate:</Typography>

            <Stack flexDirection="row" alignItems="center" gap="4px">
              <Controller
                control={control}
                name="time.estimate"
                render={({ field }) => (
                  <TextField type="number" size="small" {...field} />
                )}
              />

              <Typography>minutes</Typography>
            </Stack>
          </Box>

          <Box marginTop="12px">
            <Typography>Start:</Typography>

            <DateTime name="time.start" control={control} />
          </Box>

          <Box marginTop="12px">
            <Typography>End:</Typography>

            <DateTime name="time.end" control={control} />
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default Timer;
