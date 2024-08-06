import Box from '@mui/material/Box';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Container from '@mui/material/Container';
import TimelineItem from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import { alpha, useTheme } from '@mui/material/styles';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

import { bgGradient } from 'src/theme/css';
import { useResponsive } from 'src/hooks/use-responsive';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success', 'error', 'info'];

// ----------------------------------------------------------------------

export default function HomeHowItWork() {
  const theme = useTheme();
  const t = useTranslations('Homepage.it_works');
  const mdUp = useResponsive('up', 'md');
  const TIMELINES = [
    {
      step: t('step1.step'),
      title: t('step1.title'),
      description: t('step1.description'),
    },
    {
      step: t('step2.step'),
      title: t('step2.title'),
      description: t('step2.description'),
    },
    {
      step: t('step3.step'),
      title: t('step3.title'),
      description: t('step3.description'),
    },
    {
      step: t('step4.step'),
      title: t('step4.title'),
      description: t('step4.description'),
    },
    {
      step: t('step5.step'),
      title: t('step5.title'),
      description: t('step5.description'),
    },
    {
      step: t('step6.step'),
      title: t('step6.title'),
      description: t('step6.description'),
    },
  ];

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
        color: 'common.white',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          {t('title')}
        </Typography>

        <Typography
          sx={{
            mt: 3,
            mx: 'auto',
            opacity: 0.72,
            maxWidth: 680,
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
          }}
        >
          {t('description')}
        </Typography>

        <Timeline position={mdUp ? 'alternate' : 'right'}>
          {TIMELINES.map((value, index) => (
            <TimelineItem
              key={value.title}
              sx={{
                '&:before': {
                  ...(!mdUp && { display: 'none' }),
                },
              }}
            >
              <TimelineSeparator>
                <TimelineDot color={COLORS[index]} />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                <Typography variant="overline" sx={{ color: `${COLORS[index]}.main` }}>
                  {value.step}
                </Typography>

                <Typography variant="h4" sx={{ mt: 0.5, mb: 1 }}>
                  {value.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.72,
                    maxWidth: { md: 494 },
                    ...(index % 2 && {
                      ml: 'auto',
                    }),
                  }}
                >
                  {value.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
