import { FC } from 'react';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

interface IAddTask {}

const AddTask: FC<IAddTask> = () => {
  return (
    <Button
      startIcon={<HomeIcon />}
      sx={{
        textTransform: 'none',
        color: 'black',
        minWidth: '100px',
      }}
    >
      Add task
    </Button>
  );
};

export default AddTask;
