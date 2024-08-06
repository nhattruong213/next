import PropTypes from 'prop-types';

import { Stack } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { Box, Typography, useMediaQuery } from '@mui/material';

import SvgColor from 'src/components/svg-color';
import Carousel, { useCarousel } from 'src/components/carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from 'next/image';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

export default function AboutUsOurClients({ brands, brandTwo }) {
  const theme = useTheme();
  const betweenMd = useResponsive('between', 'md');
  const currentWindowWidth = window.innerWidth;
  const carousel = useCarousel({
    speed: 5000,
    autoplay: true,
    slidesToShow: currentWindowWidth > 1440 ? 8 : 6,
    slidesToScroll: 1,
    cssEase: 'linear',
    autoplaySpeed: 0,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    rtl: true,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
      },
    ],
  });

  const carousel2 = useCarousel({
    speed: 5000,
    autoplay: true,
    slidesToShow: currentWindowWidth > 1440 ? 8 : 6,
    slidesToScroll: 1,
    cssEase: 'linear',
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
      },
    ],
  });

  return (
    <Stack sx={{ marginBottom: 10 }}>
      <Container id="our-clients">
        <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: 5 }}>
          Our Clients
        </Typography>
      </Container>

      <Carousel
        {...carousel.carouselSettings}
        sx={{
          pt: { xs: 5, md: 10 },
        }}
      >
        {brands.map((brand) => (
          <div className="logo-slide">
            <Image
              alt={brand.name}
              loading="eager"
              key={brand.id}
              src={brand.image}
              sx={{
                color: 'text.disabled',
              }}
            />
          </div>
        ))}
      </Carousel>
      <Carousel
        {...carousel2.carouselSettings}
        sx={{
          pt: { xs: 5, md: 10 },
        }}
      >
        {brandTwo.map((brand) => (
          <div className="logo-slide">
            <Image
              alt={brand.name}
              loading="eager"
              key={brand.id}
              src={brand.image}
              sx={{
                color: 'text.disabled',
              }}
            />
          </div>
        ))}
      </Carousel>
    </Stack>
  );
}

AboutUsOurClients.propTypes = {
  brands: PropTypes.array,
};
