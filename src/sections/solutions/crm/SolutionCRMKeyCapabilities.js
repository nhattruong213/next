import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';

import SvgColor from 'src/components/svg-color';

export default function SolutionCRMKeyCapabilities() {
  const t = useTranslations('solutions.customer_relationship.key_capabilities');
  const SERVICES = [
    {
      title: t('order_management.title'),
      description: t('order_management.description'),
      icon: '/assets/icons/ic_statistics.svg',
    },
    {
      title: t('workflow_automation.title'),
      description: t('workflow_automation.description'),
      icon: '/assets/icons/ic_social_media.svg',
    },
    {
      title: t('information_management.title'),
      description: t('information_management.description'),
      icon: '/assets/icons/ic_real_time.svg',
    },
    {
      title: t('team_management.title'),
      description: t('team_management.description'),
      icon: '/assets/icons/ic_checklist.svg',
    },
    {
      title: t('retention_and_loyalty.title'),
      description: t('retention_and_loyalty.description'),
      icon: '/assets/icons/ic_report.svg',
    },
    {
      title: t('reports.title'),
      description: t('reports.description'),
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
