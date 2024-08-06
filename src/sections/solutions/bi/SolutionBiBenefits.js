import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import CountUp from 'src/components/count-up';
import { fShortenNumber } from 'src/utils/format-number';
import { useTranslations } from 'next-intl';

export default function SolutionBiBenefits() {
  const t = useTranslations('solutions.business_intelligence.benefits');
  const SUMMARY = [
    {
      title: t('informed_decision_making.title'),
      description: t('informed_decision_making.description'),
      icon: '/assets/icons/travel/ic_travel_tickets.svg',
    },
    {
      title: t('operational_efficiency.title'),
      description: t('operational_efficiency.description'),
      icon: '/assets/icons/travel/ic_travel_booking.svg',
    },
    {
      title: t('customer_insights.title'),
      description: t('customer_insights.description'),
      icon: '/assets/icons/travel/ic_travel_site_visitors.svg',
    },
    {
      title: t('competitive_advantage.title'),
      description: t('competitive_advantage.description'),
      icon: '/assets/icons/travel/ic_travel_verified_hotels.svg',
    },
  ];
  
  return (
    <Container
      sx={{
        textAlign: 'center',
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: 'auto',
          maxWidth: 480,
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h2">{t('title')}</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          {t('description')}
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 8, md: 3 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SUMMARY.map((value) => (
          <Stack key={value.title} spacing={1}>
            <Image
              alt={value.icon}
              src={value.icon}
              sx={{ mb: 3, width: 80, height: 80, mx: 'auto' }}
            />

            <Typography sx={{ fontSize: 28, fontWeight: 400 }} variant="body1">
              {value.title}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Container>
  );
}
