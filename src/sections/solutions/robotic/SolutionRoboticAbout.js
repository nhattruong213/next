import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function SolutionRoboticAbout() {
  const mdUp = useResponsive('up', 'md');
  const t = useTranslations('solutions.robotic.about');
  const BENEFITS = [
    {
      title: t('manual_errors.title'),
      description: t('manual_errors.description'),
      iconColor: 'primary',
    },
    {
      title: t('operational_inefficiencies.title'),
      description: t('operational_inefficiencies.description'),
      iconColor: 'success',
    },
    {
      title: t('scalability_issues.title'),
      description: t('scalability_issues.description'),
      iconColor: 'secondary',
    },
    {
      title: t('regulatory_compliance.title'),
      description: t('regulatory_compliance.description'),
      iconColor: 'secondary',
    },
    {
      title: t('resource_overhead.title'),
      description: t('resource_overhead.description'),
      iconColor: 'success',
    },
    {
      title: t('customer_experience.title'),
      description: t('customer_experience.description'),
      iconColor: 'primary',
    },
  ];
  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          {t('challenges.title')}
        </Typography>

        <Typography
          sx={{
            mt: 3,
            mx: 'auto',
            opacity: 0.72,
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
          }}
        >
          {t('challenges.description')}
        </Typography>

        <Box
          sx={{
            display: 'grid',
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            gridTemplateColumns: { md: 'repeat(3, 1fr)' },
          }}
        >
          <Stack spacing={{ xs: 4, md: 10 }}>
            {BENEFITS.slice(0, 3).map((benefit, index) => (
              <BenefitItem key={benefit.title} benefit={benefit} index={index} reverse />
            ))}
          </Stack>

          {mdUp && (
            <Image alt="benefits" src="/assets/images/solutions/solution-robotic-about.png" />
          )}

          <Stack spacing={{ xs: 4, md: 10 }}>
            {BENEFITS.slice(-3).map((benefit, index) => (
              <BenefitItem key={benefit.title} benefit={benefit} index={index} />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function BenefitItem({ benefit, reverse, index }) {
  const { title, description, iconColor } = benefit;

  return (
    <Stack
      spacing={1}
      direction={{ xs: 'row', md: reverse ? 'row-reverse' : 'row' }}
      sx={{
        ...(reverse && {
          textAlign: { md: 'right' },
        }),
        ...(index === 1 && {
          pl: { md: 6 },
          ...(reverse && {
            pl: { md: 0 },
            pr: { md: 6 },
          }),
        }),
      }}
    >
      <Box
        sx={{
          m: 1,
          width: 16,
          height: 16,
          flexShrink: 0,
          borderRadius: '50%',
          background: (theme) =>
            `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
          ...(iconColor === 'secondary' && {
            background: (theme) =>
              `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
          }),
          ...(iconColor === 'success' && {
            background: (theme) =>
              `linear-gradient(to bottom, ${theme.palette.success.light}, ${theme.palette.success.main})`,
          }),
        }}
      />

      <Stack spacing={1}>
        <Typography variant="h5">{title}</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}

BenefitItem.propTypes = {
  benefit: PropTypes.shape({
    description: PropTypes.string,
    iconColor: PropTypes.string,
    title: PropTypes.string,
  }),
  index: PropTypes.number,
  reverse: PropTypes.bool,
};
