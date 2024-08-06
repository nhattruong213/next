import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { fShortenNumber } from 'src/utils/format-number';
import { useTranslations } from 'next-intl';

export default function SolutionOkrAbout() {
  const t = useTranslations('solutions.okr_performance_management.about');
  const ROWS = [
    {
      label: t('lack_of_clarity.label'),
      content: t('lack_of_clarity.content'),
    },
    {
      label: t('inadequate_alignment.label'),
      content: t('inadequate_alignment.content'),
    },
    {
      label: t('ineffective_evaluation.label'),
      content: t('ineffective_evaluation.content'),
    },
  ];

  return (
    <Container
      sx={{
        textAlign: 'center',
      }}
    >
      <Image
        alt="landing about"
        src="/assets/images/solutions/solution-okr-about.png"
        sx={{
          mb: { xs: 5, md: 10 },
        }}
      />

      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 5, md: 0 }}
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 10, textAlign: 'left' }}
      >
        <Grid
          xs={12}
          md={5}
          sx={{
            textAlign: { xs: 'center', md: 'right' },
          }}
        >
          <Typography variant="h3" sx={{ my: 3 }}>
            {t('challenges.title')}
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            {t('challenges.description')}
          </Typography>
        </Grid>

        <Grid xs={12} md={6}>
          <Stack spacing={5}>
            {ROWS.map((row) => (
              <Stack
                key={row.label}
                direction="row"
                alignItems="center"
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }}
                  />
                }
              >
                <Typography>
                  <Typography variant="h3">{row.label}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {row.content}
                  </Typography>
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
