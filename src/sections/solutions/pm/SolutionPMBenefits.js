import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

export default function SolutionPMBenefits({ categories }) {
  const t = useTranslations('solutions.project_management.benefits');

  return (
    <Box
      sx={{
        overflow: 'hidden',
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 8, lg: 3 }} justifyContent={{ lg: 'space-between' }}>
          <Grid
            xs={12}
            lg={4}
            sx={{
              textAlign: { xs: 'center', lg: 'unset' },
            }}
          >
            <Typography variant="h2">{t('title')}</Typography>

            <Typography sx={{ color: 'text.secondary', mt: 2, mb: 5 }}>
              {t('description')}
            </Typography>
          </Grid>

          <Grid xs={12} lg={7}>
            <Box
              sx={{
                gap: 2,
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(2, 1fr)',
                  md: 'repeat(2, 1fr)',
                },
              }}
            >
              {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

SolutionPMBenefits.propTypes = {
  categories: PropTypes.array,
};

// ----------------------------------------------------------------------

function CategoryItem({ category }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        borderRadius: 1.5,
        cursor: 'pointer',
        bgcolor: 'transparent',
        transition: (theme) =>
          theme.transitions.create('all', {
            duration: theme.transitions.duration.enteringScreen,
          }),
        '&:hover': {
          bgcolor: 'background.paper',
          boxShadow: (theme) => theme.customShadows.z24,
          h6: {
            color: 'primary.main',
          },
        },
      }}
    >
      <TextMaxLine variant="h6" line={1}>
        {category.name}
      </TextMaxLine>

      <Typography variant="body2" sx={{ mt: 1, color: 'text.disabled' }}>
        {category.totalStudents} students
      </Typography>
    </Paper>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    totalStudents: PropTypes.number,
  }),
};
