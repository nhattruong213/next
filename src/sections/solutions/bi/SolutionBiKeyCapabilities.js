import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';

import SvgColor from 'src/components/svg-color';

export default function SolutionBiKeyCapabilities() {
  const t = useTranslations('solutions.business_intelligence.key_capabilities')
  const SERVICES = [
    {
      title: t('integration.title'),
      description: t('integration.description'),
      icon: '/assets/icons/ic_statistics.svg',
    },
    {
      title: t('analytics.title'),
      description: t('analytics.description'),
      icon: '/assets/icons/ic_social_media.svg',
    },
    {
      title: t('dashboards.title'),
      description: t('dashboards.description'),
      icon: '/assets/icons/ic_real_time.svg',
    },
    {
      title: t('security.title'),
      description: t('security.description'),
      icon: '/assets/icons/ic_checklist.svg',
    },
    {
      title: t('scalability.title'),
      description: t('scalability.description'),
      icon: '/assets/icons/ic_report.svg',
    },
    {
      title: t('mobile.title'),
      description: t('mobile.description'),
      icon: '/assets/icons/ic_file.svg',
    },
  ];

  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2">{t('title')}</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 629,
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      >
        {t('description')}
      </Typography>

      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {SERVICES.map((value) => (
          <div key={value.title}>
            <SvgColor
              src={value.icon}
              color="info"
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                bgcolor: 'primary.main',
              }}
            />

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
}
