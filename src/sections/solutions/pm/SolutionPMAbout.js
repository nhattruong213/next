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

export default function SolutionPMAbout() {
  const t = useTranslations('solutions.project_management.about');
  const ROWS = [
    {
      label: t('subcontractor_coordination.label'),
      content: t('subcontractor_coordination.content'),
    },
    {
      label: t('permitting_approvals.label'),
      content: t('permitting_approvals.content'),
    },
    {
      label: t('document_version_control.label'),
      content: t('document_version_control.content'),
    },
  ];

  return (
    <Container>
      <Image
        alt="landing about"
        src="/assets/images/solutions/solution-pm-about.png"
        ratio="21/9"
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
        sx={{ mb: 10 }}
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
