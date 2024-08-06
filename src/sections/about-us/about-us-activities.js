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
import Marquee from 'react-fast-marquee';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

export default function AboutUsActivities({ brands }) {
  const theme = useTheme();
  const upMd = useResponsive('up', 'md');
  const currentWindowWidth = window.innerWidth;
  const t = useTranslations('about_us');

  return (
    <Stack sx={{ marginBottom: 10 }}>
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: 5 }}>
          {t('activity')}
        </Typography>
      </Container>
      <Marquee gradient={upMd} gradientWidth={100}>
        {brands.map((brand, i) => (
          <div
            style={{
              padding: '0 2vw',
              height: 'auto',
              display: 'inline-block',
              position: 'relative',
            }}
            key={i}
          >
            <Image
              width={450}
              alt={brand.name}
              loading="eager"
              key={brand.id}
              src={brand.image}
              sx={{
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </Marquee>
    </Stack>
  );
}

AboutUsActivities.propTypes = {
  brands: PropTypes.array,
};
