import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


import { useTranslations } from 'next-intl';
import StudyTestimonialItem from './study-testimonial-item';

// ----------------------------------------------------------------------

export default function StudyTestimonial({ testimonial }) {
  const t = useTranslations('testimonial');

  return (
    <Box sx={{ bgcolor: 'background.neutral', overflow: 'hidden' }}>
      <Container
        sx={{
          position: 'relative',
          py: { xs: 10, md: 15 },
        }}
      >
        <Stack spacing={2} sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            {t('title')}
          </Typography>

          <Typography variant="h2">{t('say')}</Typography>
        </Stack>

        <Grid container spacing={10} justifyContent="center">
          <Grid xs={12} md={8}>
            <StudyTestimonialItem key={testimonial.name} testimonial={testimonial} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}