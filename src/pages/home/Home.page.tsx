import { Box, IconButton, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { FC, useMemo } from 'react';
import LayoutTaskView from '../layout-task-view/LayoutTaskView.component';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import calendarIcon from '../../assets/calendar.svg';
import TaskBox from './task-box/TaskBox.component';
import { COLORS } from '../../constants/ui.constant';

const DATE_TIME = 'dddd, MMMM D';

const Home: FC = () => {
  const currentTime = dayjs().format(DATE_TIME);

  const topRightAction = useMemo(
    () => (
      <Stack flexDirection="row">
        <IconButton>
          <NorthEastIcon fontSize="small" />
        </IconButton>

        <IconButton>
          <TipsAndUpdatesIcon fontSize="small" />
        </IconButton>

        <IconButton>
          <MoreHorizIcon fontSize="small" />
        </IconButton>
      </Stack>
    ),
    []
  );

  return (
    <Box>
      <LayoutTaskView
        title="My Day"
        subTitle={currentTime}
        topRightAction={topRightAction}
      >
        <Box
          sx={{
            m: 'auto',
            borderRadius: '14px',
            padding: '14px',
            width: '340px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            backgroundColor: COLORS.secondBackgroundColor,
            opacity: 0.9,
            '& p': {
              color: COLORS.secondTextColor,
              textAlign: 'center',
            },
          }}
        >
          <Box>
            <img
              src={calendarIcon}
              alt=""
              width="200px"
              height="200px"
              style={{ display: 'block', margin: '0 auto' }}
            />
          </Box>

          <Typography>Focus on your day</Typography>

          <Typography fontSize="12px">
            Get things done with My Day, a list that refreshes every day.
          </Typography>

          <Button
            fullWidth
            variant="contained"
            sx={{
              textTransform: 'none',
            }}
          >
            Add task to My Day
          </Button>
        </Box>

        <Box position="absolute" bottom="34px" left="30px" right="30px">
          <TaskBox />
        </Box>
      </LayoutTaskView>
    </Box>
  );
};

export default Home;
