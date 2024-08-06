import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { useResponsive } from 'src/hooks/use-responsive';

import { useTranslations } from 'next-intl';
import CaseStudyItem from './case-study-item';

// ----------------------------------------------------------------------

export default function CaseStudyListSimilar({ caseStudies }) {
  const mdUp = useResponsive('up', 'md');
  const t = useTranslations('case_detail');
  const tCommon = useTranslations('common');
  const viewAllBtn = (
    <Button
      component={RouterLink}
      href={paths.caseStudies}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      {tCommon('view_all')}
    </Button>
  );

  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'space-between' }}
        sx={{
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h3">{t('you-might-like')}</Typography>

        {mdUp && viewAllBtn}
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {caseStudies.map((project) => (
          <CaseStudyItem key={project.id} project={project} />
        ))}
      </Box>

      {!mdUp && (
        <Stack alignItems="center" sx={{ mt: 8 }}>
          {viewAllBtn}
        </Stack>
      )}
    </Container>
  );
}

CaseStudyListSimilar.propTypes = {
  caseStudies: PropTypes.array,
};
