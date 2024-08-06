import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';
import { useResponsive } from 'src/hooks/use-responsive';
import { RouterLink } from 'src/routes/components';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

export default function HomeHero() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');
  const t = useTranslations('Homepage');
  const tCommon = useTranslations('common');

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_1.jpg',
        }),
        overflow: 'hidden',
      }}
    >
      <Container
        sx={{
          py: 15,
          display: { md: 'flex' },
          alignItems: { md: 'center' },
          height: { md: `100vh` },
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 10 }}>
          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >

            <Typography variant="h3" sx={{ my: 3 }}>
              {t('empowering_innovation')}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              {t('our-mission')}
            </Typography>

            <Stack
              spacing={3}
              direction={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'center', md: 'unset' }}
              justifyContent={{ xs: 'center', md: 'unset' }}
              sx={{ mt: 5 }}
            >
              <Button
                variant="contained"
                color="inherit"
                size="large"
                component={RouterLink}
                href="#solutions"
                sx={{ fontSize: '14px'}}
              >
                <Typography variant="subtitle1">{tCommon('our_solutions')}</Typography>
              </Button>

              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle1' }}>
                <Fab size="medium" sx={{ mr: 1 }} component={RouterLink} href="#case-studies">
                  <Iconify width={24} icon="carbon:play" />
                </Fab>
                 {tCommon('see_our_work')}
              </Stack>
            </Stack>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={7}>
              <Image
                visibleByDefault
                disabledEffect
                alt="marketing market"
                src="/assets/illustrations/home/SOFTWARE_SOLUTIONS.jpg"
                sx={{ flexShrink: 0, borderRadius: 1.5, objectFit: 'cover' }}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
