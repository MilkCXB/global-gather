import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Title } from '../Advantages';

import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import { Trans } from '@lingui/macro';
import { ColorfulRect, CustomTheme } from '@/src/theme';
import { imgLazyload } from '@/src/utils/img';
import token from '@/public/images/tokeneco/token.png';
import token_h5 from '@/public/images/tokeneco/token_h5.png';
import auditorImg from '@/public/images/auditor/img2.png';

const Wrapper = styled('div')(({ theme }) => ({
  padding: '130px 0 252px 0 ',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(141deg, #2d385e 0%, #14081e 100%)',

  [theme.breakpoints.down('sm')]: {
    padding: '65px 0 78px 0',
  },
}));

export const MyImage = styled('img')(({ theme }) => ({
  maxWidth: '322px',

  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '161px',
  },
}));

const MiddleImg = styled('img')(({ theme }) => ({
  width: '1072px',
  marginTop: '108px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '45px',
    width: '303px',
  },
}));
export default function Auditor() {
  const isXs = useMediaQuery((theme: CustomTheme) =>
    theme.breakpoints.down('sm')
  );

  return (
    <Wrapper>
      <Stack
        sx={{
          mb: { sm: '130px', xs: '60px' },
        }}
      >
        <Title>Auditor</Title>
      </Stack>
      <MyImage src={auditorImg} />
    </Wrapper>
  );
}
