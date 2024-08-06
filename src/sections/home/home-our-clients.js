import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

export default function HomeOurClients({ brands }) {
  const mdDown = useResponsive('down', 'md');
  const lgUp = useResponsive('up', 'lg');
  const t = useTranslations('common');
  let gap;
  if (mdDown) {
    gap = 5;
  } else if (lgUp) {
    gap = 10;
  } else {
    gap = 5;
  }

  return (
    <Container
      sx={{
        pb: { xs: 7, md: 11 },
      }}
    >
      <Stack alignItems="center" spacing={5}>
        <Typography variant="h2">{t('our_clients')}</Typography>

        <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ overflow: 'hidden' }}>
          <Box
            sx={{
              gap,
              display: 'grid',
              alignItems: 'center',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(5, 1fr)',
              },
            }}
          >
            {brands.slice(0, 10).map((brand) => (
              <Link
                href={brand.link}
                target={brand.link === '#our-clients' ? '' : '_blank'}
                rel="noopener"
                underline="none"
                sx={{ cursor: 'pointer' }}
                key={brand.id}
              >
                <Image alt={brand.name} src={brand.image} width={150} />
              </Link>
            ))}
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}

HomeOurClients.propTypes = {
  brands: PropTypes.array,
};
