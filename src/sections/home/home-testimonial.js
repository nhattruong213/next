import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';
import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

import { useTranslations } from 'next-intl';
import TestimonialItem from './home-testimonial-item';

// ----------------------------------------------------------------------

export default function HomeTestimonial({ testimonials }) {
  const theme = useTheme();
  const t = useTranslations('Homepage.testimonial');
  const mdUp = useResponsive('up', 'md');

  const carousel = useCarousel({
    dots: !mdUp,
    slidesToShow: 3,
    slidesToScroll: 1,
    ...CarouselDots({
      sx: {
        mt: 8,
      },
    }),
    responsive: [
      {
        // Down md
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2, slidesToScroll: 3 },
      },
      {
        // Down sm
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  });

  return (
    <Container
      sx={{
        pt: 8,
        pb: { xs: 8, md: 10 },
      }}
    >
      <Stack direction="row" alignItems="center" sx={{ mb: 8 }}>
        <Typography variant="h2" sx={{ textAlign: { xs: 'center', md: 'unset' }, flexGrow: 1 }}>
          {t('title')}
        </Typography>
      </Stack>

      <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
        {testimonials.map((testimonial) => (
          <Box key={testimonial.id} sx={{ px: 1.5 }}>
            <TestimonialItem testimonial={testimonial} />
          </Box>
        ))}
      </Carousel>
    </Container>
  );
}

HomeTestimonial.propTypes = {
  testimonials: PropTypes.array,
};
