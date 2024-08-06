import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

export default function AboutUsCoreValues() {
  const t = useTranslations('about_us.our_core');
  const CORE_VALUES = [
    {
      title: t('customer_satisfaction.title'),
      description: t('customer_satisfaction.description'),
      icon: '/assets/icons/ic_reputation.svg',
    },
    {
      title: t('professionalism.title'),
      description: t('professionalism.description'),
      icon: '/assets/icons/award_custom.svg',
    },
    {
      title: t('innovation_creativity.title'),
      description: t('innovation_creativity.description'),
      icon: '/assets/icons/creativity_custom.svg',
    },
    {
      title: t('collaboration.title'),
      description: t('collaboration.description'),
      icon: '/assets/icons/ic_agreement.svg',
    },
  ];

  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 5, md: 15 },
      }}
    >
      <Typography variant="h2" sx={{ mb: { xs: 8, md: 10 } }}>
        {t('title')}
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gap: 8,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {CORE_VALUES.map((value) => (
          <Box key={value.title}>
            <SvgColor
              src={value.icon}
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                color: 'primary.main',
              }}
            />

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
