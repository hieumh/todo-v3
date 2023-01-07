import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { FC, ReactNode } from 'react';

interface ILayoutTaskView {
  title: ReactNode;
  subTitle: ReactNode;
  topRightAction: ReactNode;
  children?: ReactNode;
}

const LayoutTaskView: FC<ILayoutTaskView> = ({
  title,
  subTitle,
  topRightAction,
  children,
}) => {
  return (
    <Box padding="30px" height="calc(100vh - 76px)" position="relative">
      <Stack flexDirection="row" justifyContent="space-between">
        <Box>
          <Typography variant="h4" fontWeight="600">
            {title}
          </Typography>
          <Typography>{subTitle}</Typography>
        </Box>

        <Box>{topRightAction}</Box>
      </Stack>

      {children ?? <Typography>"Up coming..."</Typography>}
    </Box>
  );
};

export default LayoutTaskView;
