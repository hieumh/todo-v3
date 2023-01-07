import { FC, useState, MouseEvent } from 'react';
import { IconButton, MenuItem } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import { ITask } from '../../../../common/task.model';
import { Control, useController } from 'react-hook-form';
import { Menu, Fade, Typography } from '@mui/material';

interface IRepeatProps {
  control: Control<ITask>;
}

const routines = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

const Repeat: FC<IRepeatProps> = ({ control }) => {
  const [open, setOpen] = useState<HTMLElement | null>(null);
  const { field } = useController({ control, name: 'routine' });

  const handleChooseItem = (value: string) => {
    return () => {
      field.onChange(value);

      setOpen(null);
    };
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  return (
    <>
      <IconButton onClick={handleOpenMenu}>
        <LoopIcon fontSize="small" />
      </IconButton>

      <Menu
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {routines.map((element) => (
          <MenuItem key={element} onClick={handleChooseItem(element)}>
            <Typography>{element}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Repeat;
