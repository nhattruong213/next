import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';
import { useResponsive } from 'src/hooks/use-responsive';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

export default function SolutionProductionHero() {
  const theme = useTheme();
  const t = useTranslations('solutions.production_management')
  const mdUp = useResponsive('up', 'md');

  const renderForm = (
    <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} alignItems={{ md: 'center' }}>
      <InputBase
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <Iconify icon="carbon:email" width={24} sx={{ color: 'text.disabled' }} />
          </InputAdornment>
        }
        placeholder="Email"
        sx={{
          pl: 1.5,
          height: 48,
          borderRadius: 1,
          typography: 'body1',
          bgcolor: 'common.white',
        }}
      />

      <InputBase
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <Iconify icon="carbon:license-global" width={24} sx={{ color: 'text.disabled' }} />
          </InputAdornment>
        }
        placeholder="Website URL"
        sx={{
          pl: 1.5,
          height: 48,
          borderRadius: 1,
          typography: 'body1',
          bgcolor: 'common.white',
        }}
      />

      <Button
        fullWidth={!mdUp}
        color="primary"
        size="large"
        variant="contained"
        sx={{ flexShrink: 0 }}
      >
        Analyse
      </Button>
    </Stack>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
          endColor: `${theme.palette.common.black} 120%`,
          imgUrl: '/assets/images/solutions/solution-production-hero.jpg',
          backgroundPosition: 'center 40%',
        }),
        py: { xs: 15, md: 20 },
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid xs={12} md={12}>
            <Stack
              spacing={3}
              sx={{
                mb: 5,
                mx: 'auto',
                maxWidth: 'auto',
                textAlign: 'center',
                color: 'common.white',
              }}
            >
              <Typography variant="h1">{t('title')}</Typography>
              <Stack
                spacing={3}
                sx={{
                  mb: 5,
                  mx: 'auto',
                  maxWidth: 700,
                  textAlign: 'center',
                  color: 'common.white',
                }}
              >
                <Typography sx={{ opacity: 0.72 }}>
                  {t('description')}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
