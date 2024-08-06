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


export default function SolutionCRMAbout() {
  const t = useTranslations('solutions.customer_relationship.crm')
  const ROWS = [
    {
      label: t('data_disorganization.label'),
      content: t('data_disorganization.content'),
    },
    {
      label: t('communication.label'),
      content: t('communication.content'),
    },
    {
      label: t('scalability.label'),
      content: t('scalability.content'),
    },
  ];

  return (
    <Container>
      {/* <Image
        alt="landing about"
        src="/assets/images/solutions/solution-crm-about.png"
        ratio="16/9"
        sx={{
          borderRadius: 1.5,
          mb: { xs: 5, md: 10 },
        }}
      /> */}

      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 5, md: 0 }}
        justifyContent="space-between"
        alignItems="center"
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
            {t('challenges.content')}
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
