import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import TextMaxLine from 'src/components/text-max-line';
import { useResponsive } from 'src/hooks/use-responsive';
import { varHover, varTranHover } from 'src/components/animate';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

export default function HomeCaseStudies({ caseStudies }) {
  const mdUp = useResponsive('up', 'md');
  const t = useTranslations('Homepage.case_studies');
  const tCommon = useTranslations('common');
  return (
    <Container
      id="case-studies"
      sx={{
        overflow: 'hidden',
        pt: { xs: 5, md: 10 },
        pb: 10,
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          {tCommon('our_work')}
        </Typography>

        <Typography variant="h2">{t('title')}</Typography>
      </Stack>

      <Grid
        spacing={3}
        container
        alignItems="center"
        sx={{
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid xs={6} md={2}>
          <SmallItem caseStudy={caseStudies[9]} />
        </Grid>

        {!mdUp && (
          <Grid xs={6} md={2}>
            <SmallItem caseStudy={caseStudies[5]} />
          </Grid>
        )}

        <Grid container xs={12} sm={12} md={8}>
          <Grid xs={6} md={9}>
            {mdUp ? (
              <LargeItem caseStudy={caseStudies[1]} />
            ) : (
              <SmallItem caseStudy={caseStudies[1]} square />
            )}
          </Grid>

          <Grid xs={6} md={3}>
            <Stack justifyContent={{ md: 'flex-end' }} sx={{ height: { md: 1 } }}>
              <SmallItem caseStudy={caseStudies[14]} square />
            </Stack>
          </Grid>

          <Grid xs={6} md={3}>
            <SmallItem caseStudy={caseStudies[3]} square />
          </Grid>

          <Grid xs={6} md={9}>
            {mdUp ? (
              <LargeItem caseStudy={caseStudies[4]} />
            ) : (
              <SmallItem caseStudy={caseStudies[4]} square />
            )}
          </Grid>
        </Grid>

        {mdUp && (
          <Grid xs={6} md={2}>
            <SmallItem caseStudy={caseStudies[10]} />
          </Grid>
        )}
      </Grid>

      <Stack alignItems={{ xs: 'center', md: 'flex-end' }}>
        <Button
          component={RouterLink}
          href={paths.caseStudies}
          size="large"
          color="inherit"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          {tCommon('view_all')}
        </Button>
      </Stack>
    </Container>
  );
}

HomeCaseStudies.propTypes = {
  caseStudies: PropTypes.array,
};

// ----------------------------------------------------------------------

function LargeItem({ caseStudy }) {
  const tCommon = useTranslations('common');

  return (
    <Paper
      sx={{
        display: 'grid',
        borderRadius: 2,
        boxShadow: (theme) => theme.customShadows.z24,
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        },
      }}
    >
      <Box sx={{ p: 0.75 }}>
        <Image alt="cover" src={caseStudy?.heroUrl} sx={{ borderRadius: 2 }} ratio="1/1" />
      </Box>

      <Stack alignItems="flex-end" justifyContent="space-between" sx={{ p: 3, pt: 5, height: 1 }}>
        <div>
          <Typography variant="h4" sx={{ mt: 1 }}>
            {caseStudy?.category}
          </Typography>

          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            {caseStudy?.title}
          </Typography>

          <TextMaxLine variant="body2" line={6} sx={{ color: 'text.secondary' }}>
            {caseStudy?.description}
          </TextMaxLine>
          <Button
            sx={{ mt: 2 }}
            component={RouterLink}
            href={paths.caseStudy + caseStudy?.id}
            size="small"
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            {tCommon('learn_more')}
          </Button>
        </div>
      </Stack>
    </Paper>
  );
}

LargeItem.propTypes = {
  caseStudy: PropTypes.shape({
    category: PropTypes.string,
    coverUrl: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string,
  }),
};

// ----------------------------------------------------------------------

function SmallItem({ caseStudy, square }) {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Link href={{ pathname: paths.caseStudy + caseStudy?.id }} component={RouterLink}>
      <Paper
        component={m.div}
        whileHover="hover"
        sx={{
          position: 'relative',
          cursor: 'pointer',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Stack
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            width: 1,
            height: 1,
            zIndex: 9,
            position: 'absolute',
            color: 'common.white',
            textAlign: 'center',
          }}
        >
          <Typography variant="overline" sx={{ opacity: 0.48 }}>
            {caseStudy?.title}
          </Typography>
          <Typography variant="h6">{caseStudy?.category}</Typography>
        </Stack>

        <m.div variants={varHover(1.25)} transition={varTranHover()}>
          <Image
            alt="cover"
            src={caseStudy?.heroUrl}
            ratio={(square && '1/1') || (mdUp && '3/4') || '1/1'}
            overlay={alpha(theme.palette.grey[900], 0.48)}
          />
        </m.div>
      </Paper>
    </Link>
  );
}

SmallItem.propTypes = {
  caseStudy: PropTypes.shape({
    category: PropTypes.string,
    coverUrl: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string,
  }),
  square: PropTypes.bool,
};
