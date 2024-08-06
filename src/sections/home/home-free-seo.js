import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';
import { alpha, styled, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';
import { HOST_API_KEY, GOOGLE_MAP_API } from 'src/config-global';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

const StyledInput = styled((props) => <TextField fullWidth {...props} />)(({ theme }) => ({
  [`& .${inputBaseClasses.input}`]: {
    color: theme.palette.common.white,
  },
  [`& .${inputLabelClasses.root}.${inputLabelClasses.shrink}`]: {
    color: theme.palette.grey[500],
    [`&.${inputLabelClasses.focused}`]: {
      color: theme.palette.grey[500],
    },
  },
}));

StyledInput.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      common: PropTypes.shape({
        white: PropTypes.string,
      }),
      grey: PropTypes.string,
    }),
  }),
};

// ----------------------------------------------------------------------

export default function HomeFreeSEO() {
  const theme = useTheme();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [website, setWebsite] = useState('');
  const t = useTranslations('free-seo');
  const tCommon = useTranslations('common');
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Content-Type, Accept, Authorization, X-Requested-With, Application',
  };

  const onPressContinue = async () => {
    const hostApi = `${GOOGLE_MAP_API}sendmail`;

    if (!email.length && !phoneNumber.length) {
      enqueueSnackbar('Please fill out this form!', { variant: 'error' });
    } else {
      await axios
        .post(
          hostApi,
          {
            name,
            email,
            phoneNumber,
            website,
          },
          { headers }
        )
        .then((response) => {
          enqueueSnackbar('Send request success!', { variant: 'success' });
        })
        .catch((error) => {
          enqueueSnackbar(error?.message, { variant: 'error' });
        });
    }
  };

  const nameOnChange = (value) => {
    setName(value);
  };

  const emailOnChange = (value) => {
    setEmail(value);
  };

  const phoneOnChange = (value) => {
    setPhoneNumber(value);
  };

  const nwebUrlOnChange = (value) => {
    setWebsite(value);
  };

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0),
          imgUrl: '/assets/images/marketing/marketing_get_free_seo.jpg',
        }),
        overflow: 'hidden',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container id="contact">
        <Grid
          container
          spacing={{
            xs: 5,
            md: 3,
          }}
          justifyContent="space-between"
        >
          <Grid xs={12} md={6}>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                color: 'primary.main',
                mb: { xs: 3, md: 8 },
                textAlign: { xs: 'center', md: 'left' },
              }}
              dangerouslySetInnerHTML={{ __html: t('content') }}
            />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ color: 'common.white', mb: 2 }}
            >
              <Iconify icon="carbon:email" width={24} sx={{ mr: 2 }} />

              <Link color="inherit" href="mailto:info@odinbi.com">
                {t('info')}
              </Link>
            </Stack>
          </Grid>

          <Grid xs={12} md={5}>
            <Stack alignItems={{ xs: 'center', md: 'flex-start' }}>
              <StyledInput
                label={tCommon('name')}
                sx={{ mb: 2.5 }}
                onChange={(event) => {
                  nameOnChange(event?.target?.value);
                }}
              />

              <StyledInput
                label={tCommon('email')}
                sx={{ mb: 2.5 }}
                onChange={(event) => {
                  emailOnChange(event?.target?.value);
                }}
              />

              <StyledInput
                label={tCommon('phone')}
                sx={{ mb: 2.5 }}
                onChange={(event) => {
                  phoneOnChange(event?.target?.value);
                }}
              />

              <StyledInput
                label={tCommon('web_url')}
                sx={{ mb: 5 }}
                onChange={(event) => {
                  nwebUrlOnChange(event?.target?.value);
                }}
              />
              <SnackbarProvider
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              />
              <Button size="large" variant="contained" color="primary" onClick={onPressContinue}>
                {tCommon('send_request')}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
