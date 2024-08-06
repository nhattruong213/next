import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import CountUp from 'src/components/count-up';
import { fShortenNumber } from 'src/utils/format-number';
import { useTranslations } from 'next-intl';

export default function SolutionProductionView() {
  const t = useTranslations('solutions.production_management.production_about')
  const SUMMARY = [
    {
      title: t('resource_allocation_complexity.title'),
      number: 14000,
      description: t('resource_allocation_complexity.description'),
    },
    {
      title: t('production_scheduling.title'),
      number: 1050,
      description: t('production_scheduling.description'),
    },
    {
      title: t('risk_management.title'),
      number: 52000,
      description: t('risk_management.description'),
    },
  ];

  return (
    <Container
      sx={{
        overflow: 'hidden',
        py: 10,
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 8 }}
        sx={{
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Grid xs={12} md={6}></Grid>

        <Grid xs={12} md={6}>
          <Typography variant="h3" sx={{ mb: 3 }}>
            {t('challenges.title')}
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            {t('challenges.description')}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={8}
        direction={{ md: 'row-reverse' }}
        justifyContent={{ md: 'space-between' }}
        sx={{
          pt: { xs: 8, md: 10 },
        }}
      >
        <Grid xs={12} md={6} lg={6}>
          <Image
            alt="about"
            src="/assets/images/solutions/solution-production-about.png"
            ratio="1/1"
            sx={{ borderRadius: 2 }}
          />
        </Grid>

        <Grid
          xs={12}
          md={6}
          lg={5}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Stack spacing={{ xs: 5, md: 10 }}>
            {SUMMARY.map((value) => (
              <Box key={value.number}>
                <Typography variant="h3" sx={{ mt: 1, mb: 2 }}>
                  {value.title}
                </Typography>

                <Typography sx={{ color: 'text.secondary' }}>{value.description}</Typography>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
