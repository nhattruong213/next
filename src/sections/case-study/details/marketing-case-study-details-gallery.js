import { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { varHover, varTranHover } from 'src/components/animate';
import Lightbox, { useLightbox } from 'src/components/lightbox';
import Carousel, { useCarousel, CarouselArrows } from 'src/components/carousel';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyDetailsGallery({ images }) {
  const theme = useTheme();
  const t = useTranslations('case_detail');
  const [countImage, setCountImage] = useState(1);
  const slides = images?.map((slide) => ({
    src: slide,
  }));

  const lightbox = useLightbox(slides);

  const carousel = useCarousel({
    slidesToShow: countImage,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  useEffect(() => {
    setCountImage(images?.length);
    if (lightbox.open) {
      carousel.onTogo(lightbox.selected);
    }
  }, [carousel, lightbox.open, lightbox.selected]);

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          {t('gallery')}
        </Typography>
      </Stack>

      {slides?.map((slide) => (
        <Box
          key={slide.src}
          component={m.div}
          whileHover="hover"
          onClick={() => lightbox.onOpen(slide.src)}
        >
          <Box sx={{ borderRadius: 2, cursor: 'pointer' }}>
            <m.div variants={varHover(1.25)} transition={varTranHover()}>
              <Image alt={slide.src} src={slide.src} ratio="16/9" />
            </m.div>
          </Box>
        </Box>
      ))}

      <Lightbox
        index={lightbox.selected}
        slides={slides}
        open={lightbox.open}
        close={lightbox.onClose}
        onGetCurrentIndex={(index) => lightbox.setSelected(index)}
      />
    </>
  );
}

MarketingCaseStudyDetailsGallery.propTypes = {
  images: PropTypes.array,
};
