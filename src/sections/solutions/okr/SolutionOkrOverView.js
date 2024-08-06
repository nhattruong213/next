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
  'Improved Efficiency and Productivity',
  'Enhanced Communication and Collaboration',
  'Risk Mitigation and Issue Resolution',
];

// ----------------------------------------------------------------------

export default function SolutionOkrOverView() {
  const t = useTranslations('solutions.okr_performance_management.overview');

  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        <Grid xs={12} md={6} lg={5}>
          <Image alt="services" src="/assets/images/solutions/solution-okr-overview.png" />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={3} sx={{ mb: 5 }}>
            <Typography variant="h2">{t('title')}</Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              {t('description')}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
