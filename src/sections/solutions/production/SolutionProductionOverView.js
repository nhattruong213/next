import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

export default function SolutionProductionOverView() {
  const mdUp = useResponsive('up', 'md');
  const t = useTranslations('solutions.production_management.overview')

  return (
    <Container
      sx={{
        py: { xs: 8, md: 15 },
      }}
    >
      <Grid
        container
        spacing={3}
        alignItems={{ md: 'center' }}
        justifyContent={{ md: 'space-between' }}
      >
        {mdUp && (
          <Grid xs={12} md={6} lg={5}>
            <Image
              alt="about"
              src="/assets/images/solutions/solution-production-overview.png"
              ratio="4/3"
              sx={{ borderRadius: 2 }}
            />
          </Grid>
        )}

        <Grid xs={12} md={6} lg={6}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            {t('title')}
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            {t('description')}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
