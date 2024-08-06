import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { useTranslations } from 'next-intl';

export default function SolutionProductionKeyCapabilities() {
  const t = useTranslations('solutions.production_management.key_capabilities')
  const CORE_VALUES = [
    {
      title: t('production_planning.title'),
      description: t('production_planning.description'),
      icon: 'carbon:3d-curve-auto-colon',
    },
    {
      title: t('resource_allocation.title'),
      description: t('resource_allocation.description'),
      icon: 'carbon:chat-bot',
    },
    {
      title: t('work_order_management.title'),
      description: t('work_order_management.description'),
      icon: 'carbon:airport-location',
    },
    {
      title: t('production_analytics.title'),
      description: t('production_analytics.description'),
      icon: 'carbon:event',
    },
  ];

  return (
    <Box
      sx={{
        overflow: 'hidden',
        bgcolor: 'background.neutral',
        py: { xs: 8, md: 15 },
      }}
    >
      <Container>
        <Stack
          spacing={3}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 15 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">{t('title')}</Typography>

          <Typography sx={{ color: 'text.secondary', maxWidth: { md: 540 } }}>
            {t('description')}
          </Typography>
        </Stack>

        <Grid container spacing={8}>
          {CORE_VALUES.map((value) => (
            <Grid
              key={value.title}
              xs={12}
              sm={6}
              md={3}
              sx={{
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Iconify icon={value.icon} width={48} sx={{ color: 'primary.main' }} />

              <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
                {value.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
