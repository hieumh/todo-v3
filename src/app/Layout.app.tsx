import { Box, IconButton, Drawer } from '@mui/material';
import { FC, ReactNode } from 'react';
import useModal from '../hooks/use-modal.hook';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { COLORS } from '../constants/ui.constant';

interface ILayoutProps {
  children: ReactNode;
}

const SIZE_SIDEBAR = '250px';
const MIN_SIZE_BAR = '40px';

const Layout: FC<ILayoutProps> = ({ children }) => {
  const { open, toggleModal } = useModal(true);

  return (
    <>
      <Drawer
        anchor="left"
        variant="permanent"
        open={open}
        sx={{
          '& > .MuiPaper-elevation': {
            width: open ? SIZE_SIDEBAR : MIN_SIZE_BAR,
            transition: 'width 1s',
          },
        }}
        onClose={toggleModal}
      >
        Comming soon ...
      </Drawer>

      <IconButton
        sx={{
          position: 'absolute',
          left: open ? '236px' : '26px',
          backgroundColor: COLORS.secondBackgroundColor,
          width: '26px',
          height: '26px',
          zIndex: 3000,
          transform: open ? 'none' : 'rotate(180deg)',
          transition: 'transform 1s, left 1s',
        }}
        onClick={toggleModal}
      >
        <ArrowBackIosIcon
          sx={{
            ml: '6px',
            width: '20px',
            height: '20px',
          }}
        />
      </IconButton>

      <Box
        sx={{
          marginLeft: open ? '250px' : '40px',
          p: '30px',
          transition: 'marginLeft 1s',
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
