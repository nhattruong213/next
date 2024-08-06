import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

const LISTS = [
  'cost_saving',
  'accessible_devices',
  'quick_integration',
  'easy_upgrade_maintenance',
];

// ----------------------------------------------------------------------

export default function HomeServices() {
  const t = useTranslations('Homepage');
  const tCommon = useTranslations('common');

  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        <Grid xs={12} md={6} lg={5}>
          <Image alt="services" src="/assets/illustrations/home/Web_App _Development.png" />
        </Grid>
        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={3} sx={{ mb: 5 }}>
            <Typography variant="h2" sx={{ width: { sx: 400, md: 466 } }}>
              {t('web_development')}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              {t('services_description')}
            </Typography>

            <Stack spacing={2}>
              {LISTS.map((text) => (
                <Stack key={text} direction="row" alignItems="center">
                  <Box
                    component="span"
                    sx={{
                      mr: 2,
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                    }}
                  />
                  {t(text)}
                </Stack>
              ))}
            </Stack>
          </Stack>

          <Button
            component={RouterLink}
            href={paths.caseStudies}
            size="large"
            color="inherit"
            variant="outlined"
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: '#076a8b',
              },
            }}
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            {tCommon('check_our_work')}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
