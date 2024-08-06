import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, styled, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { PlayerDialog } from 'src/components/player';
import { useState } from 'react';

// ----------------------------------------------------------------------

const StyledTypography = styled(Typography)(({ theme }) => ({
  maxWidth: 564,
  margin: 'auto',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    left: 0,
    right: 0,
    zIndex: 9,
    position: 'absolute',
    color: theme.palette.common.white,
  },
}));

// ----------------------------------------------------------------------

export default function AboutUsOurVision() {
  const theme = useTheme();
  const [openVideo, setOpenVideo] = useState(false);
  const handleOpenVideo = () => {
    setOpenVideo(true);
  };
  const handleCloseVideo = () => {
    setOpenVideo(false);
  };
  return (
    <Container>
      <Stack alignItems="center" justifyContent="center" sx={{ position: 'relative' }}>
        {/* <Typography
          variant="h2"
          sx={{
            mb: 5,
            textAlign: 'center',
            top: { md: 80 },
            left: { md: 0 },
            right: { md: 0 },
            zIndex: { md: 9 },
            position: { md: 'absolute' },
            color: { md: 'common.white' },
          }}
        >
          Our Vision
        </Typography> */}

        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            position: 'relative',
            width: 1,
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <Fab
            onClick={handleOpenVideo}
            color="primary"
            sx={{
              zIndex: 9,
              position: 'absolute',
            }}
          >
            <Iconify icon="carbon:play" width={24} />
          </Fab>

          <Image
            alt="hero"
            src="/assets/background/background-video.png"
            ratio="16/9"
            overlay={`linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${
              theme.palette.common.black
            } 190%)`}
          />
        </Stack>
      </Stack>
      <PlayerDialog
        open={openVideo}
        onClose={handleCloseVideo}
        videoPath="https://www.youtube.com/watch?v=MCLJsOCzpag"
      />
    </Container>
  );
}
