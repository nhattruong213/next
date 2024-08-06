import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from '@mui/material';

import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { RouterLink } from 'src/routes/components';
import TextMaxLine from 'src/components/text-max-line';
import Image from 'src/components/image';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'success', 'warning'];

// ----------------------------------------------------------------------

export default function HomeOurServices() {
  const t = useTranslations('Homepage.our_services');

  const SERVICES = [
    {
      id: 1,
      name: t('quoc-tien.name'),
      icon: '/assets/images/home/customer-success-stories/quoc-tien.png',
      content: t('quoc-tien.content'),
      path: paths.marketing.services,
      link: 'https://quoctien.vn/',
    },
    {
      id: 2,
      name: t('ruou-ngon.name'),
      icon: '/assets/images/home/customer-success-stories/ruou-ngon.png',
      content: t('ruou-ngon.content'),
      link: 'https://ruoungon.vn/',
    },
    {
      id: 3,
      name: t('dinco.name'),
      icon: '/assets/images/home/customer-success-stories/dinco.png',
      content: t('dinco.content'),
      path: paths.marketing.services,
      link: 'https://dinco.com.vn/',
    },
    {
      id: 4,
      name: t('dufago.name'),
      icon: '/assets/images/home/customer-success-stories/dufago.png',
      content: t('dufago.content'),
      path: paths.marketing.services,
      link: 'https://dufago.com.vn/',
    },
  ];

  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: 569,
          mb: { xs: 8, md: 5 },
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Typography variant="h2" md={{ minWidth: 700 }}>
          {t('title')}
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          {t('description')}
        </Typography>
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SERVICES.map((service, index) => (
          <ServiceItem  key={service.name} service={service} index={index} />
        ))}
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

function ServiceItem({ service, index }) {
  const { id, name, icon, content, path, link } = service;

  return (
    <Card
      sx={{
        px: 4,
        py: 5,
        textAlign: 'center',
        ...(index === 1 && {
          py: { xs: 5, md: 8 },
        }),
        ...(index === 2 && {
          py: { xs: 5, md: 10 },
          boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
        }),
      }}
    >
      {(id === 1 && (
        <Link
          href={link}
          target="_blank"
          rel="noopener"
          underline="none"
          sx={{ cursor: 'pointer' }}
        >
          <Image
            src={icon}
            width={150}
            height={150}
            sx={{
              mx: 'auto',
              color: (theme) => theme.palette[COLORS[index]].main,
            }}
          />
        </Link>
      )) || (
        <Link
          href={link}
          target="_blank"
          rel="noopener"
          underline="none"
          sx={{ cursor: 'pointer' }}
        >
          <Image
            src={icon}
            sx={{
              mx: 'auto',
              color: (theme) => theme.palette[COLORS[index]].main,
            }}
          />
        </Link>
      )}

      <Stack spacing={1} sx={{ my: 5 }}>
        <Typography variant="h6">{name}</Typography>
        <TextMaxLine line={5} variant="body2" sx={{ color: 'text.secondary' }}>
          {content}
        </TextMaxLine>
      </Stack>
    </Card>
  );
}

ServiceItem.propTypes = {
  index: PropTypes.number,
  service: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    content: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
};
