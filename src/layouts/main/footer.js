import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Button, { buttonClasses } from '@mui/material/Button';
import { Box } from '@mui/system';

import { _socials } from 'src/_mock';
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import { usePathname } from 'src/routes/hooks';
import { useBoolean } from 'src/hooks/use-boolean';
import { RouterLink } from 'src/routes/components';
import { useResponsive } from 'src/hooks/use-responsive';
import { paths } from 'src/routes/paths';
import Image from 'src/components/image';

import { useTranslations } from 'next-intl';
import { pageLinks, navConfig } from './config-navigation';

// ----------------------------------------------------------------------

const StyledAppStoreButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  padding: '5px 12px',
  color: theme.palette.common.white,
  border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
  [`& .${buttonClasses.startIcon}`]: {
    marginLeft: 0,
  },
}));

// ----------------------------------------------------------------------

export default function Footer() {
  const mdUp = useResponsive('up', 'md');
  const t = useTranslations('common');
  const pathname = usePathname();

  const mobileList = navConfig.find((i) => i.title === 'Pages')?.children || [];

  const desktopList = pageLinks.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  const renderLists = mdUp ? desktopList : mobileList;

  const isHome = pathname === '/';

  const iconStyle = {
    backgroundColor: '#f6f6f6',
  };

  const simpleFooter = (
    <>
      <Container sx={{ py: 10 }}>
        <Grid container spacing={5} justifyContent={{ md: 'space-between' }} alignItems="start">
          <Grid xs={6} md={3}>
            <Link
              component={RouterLink}
              href="/"
              color="inherit"
              aria-label="go to homepage"
              sx={{ lineHeight: 0 }}
            >
              <Box
                sx={{
                  width: 150,
                  lineHeight: 0,
                  cursor: 'pointer',
                  display: 'inline-flex',
                }}
              >
                <Image src="/assets/logo/odinbi-excellence.png" alt="OdinBI" />
              </Box>
            </Link>
          </Grid>
          <Grid xs={6} md={3}>
            <Stack direction="column" spacing={2} sx={{ mt: 0.5 }}>
              <Link
                variant="body1"
                color="inherit"
                component={RouterLink}
                href={{ pathname: paths.aboutUs }}
                sx={{ color: 'text.secondary' }}
              >
                {t('about_us')}
              </Link>
              <Link
                variant="body1"
                color="inherit"
                component={RouterLink}
                href="#"
                sx={{ color: 'text.secondary' }}
              >
                {t('solutions')}
              </Link>
              <Link
                variant="body1"
                color="inherit"
                component={RouterLink}
                href={{ pathname: paths.caseStudies }}
                sx={{ color: 'text.secondary' }}
              >
                {t('case_studies')}
              </Link>
              <Link
                variant="body1"
                color="inherit"
                component={RouterLink}
                href={{ pathname: paths.posts }}
                sx={{ color: 'text.secondary' }}
              >
                {t('insights')}
              </Link>
            </Stack>
          </Grid>
          <Grid xs={6} md={3}>
            <Stack direction="column" spacing={2}>
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                {t('united_states')}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                3134 Harmony Meadows Ln. Spring, TX 77386
              </Typography>
              <Link href="tel:+18327912979" variant="h6" sx={{ color: 'text.secondary' }}>
                +1 832-791-2979
              </Link>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {t('sales_inquiries')}
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={6} md={3}>
            <Stack direction="column" spacing={2}>
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                Viet Nam
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                166 Ha Huy Tap, Thanh Khe, Da Nang
              </Typography>
              <Link href="tel:+84905176679" variant="h6" sx={{ color: 'text.secondary' }}>
                +84 090-517-6679
              </Link>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {t('sales_inquiries')}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container sx={{ py: 3 }}>
        <Grid container spacing={3} justifyContent={{ md: 'space-between' }} alignItems="center">
          <Grid xs={12} md={6}>
            <Grid
              container
              spacing={1}
              justifyContent={{ md: 'left', xs: 'center' }}
              alignItems="center"
            >
              <Grid md={6}>
                <Typography
                  variant="caption"
                  component="div"
                  sx={{ color: 'text.secondary', fontSize: 15 }}
                >
                  Copyright © {new Date().getFullYear()} Odinbi Software
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack alignItems={{ xs: 'center', md: 'flex-end' }}>
              <Stack direction="row" spacing={4}>
                {_socials.map((social) => (
                  <IconButton
                    key={social.value}
                    color="primary"
                    style={iconStyle}
                    component={RouterLink}
                    href={social.link}
                    target="_blank"
                  >
                    <Iconify icon={social.icon} style={{ color: '#000' }} />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );

  // const mainFooter = (
  //   <>
  //     <Divider />

  //     <Container
  //       sx={{
  //         overflow: 'hidden',
  //         py: { xs: 8, md: 10 },
  //       }}
  //     >
  //       <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
  //         <Grid xs={12} md={4}>
  //           <Stack spacing={{ xs: 3, md: 5 }}>
  //             <Stack alignItems="flex-start" spacing={3}>
  //               <Logo />

  //               <Typography variant="body2" sx={{ color: 'text.secondary' }}>
  //                 The starting point for your next project based on easy-to-customize Material-UI ©
  //                 helps you build apps faster and better.
  //               </Typography>
  //             </Stack>

  //             <Stack spacing={1} alignItems="flex-start">
  //               <Typography variant="h6">Community</Typography>
  //               <Link variant="body2" sx={{ color: 'text.primary' }}>
  //                 Documentation
  //               </Link>

  //               <Link variant="body2" sx={{ color: 'text.primary' }}>
  //                 Changelog
  //               </Link>

  //               <Link variant="body2" sx={{ color: 'text.primary' }}>
  //                 Contributing
  //               </Link>
  //             </Stack>

  //             <Stack spacing={2}>
  //               <Stack spacing={1}>
  //                 <Typography variant="h6">Let’s stay in touch</Typography>
  //                 <Typography variant="caption" sx={{ color: 'text.secondary' }}>
  //                   Ubscribe to our newsletter to receive latest articles to your inbox weekly.
  //                 </Typography>
  //               </Stack>

  //               <TextField
  //                 fullWidth
  //                 hiddenLabel
  //                 placeholder="Email address"
  //                 InputProps={{
  //                   endAdornment: (
  //                     <InputAdornment position="end">
  //                       <Button variant="contained" color="inherit" size="large" sx={{ mr: -1.25 }}>
  //                         Subscribe
  //                       </Button>
  //                     </InputAdornment>
  //                   ),
  //                 }}
  //               />
  //             </Stack>

  //             <Stack spacing={2}>
  //               <Typography variant="h6">Social</Typography>
  //               <Stack direction="row" alignItems="center">
  //                 {_socials.map((social) => (
  //                   <IconButton key={social.value} color="primary">
  //                     <Iconify icon={social.icon} />
  //                   </IconButton>
  //                 ))}
  //               </Stack>
  //             </Stack>

  //             <Stack spacing={2}>
  //               <Typography variant="h6">Apps</Typography>
  //               <AppStoreButton />
  //             </Stack>
  //           </Stack>
  //         </Grid>

  //         <Grid xs={12} md={6}>
  //           {mdUp ? (
  //             <Masonry columns={4} spacing={2} defaultColumns={4} defaultSpacing={2}>
  //               {renderLists.map((list) => (
  //                 <ListDesktop key={list.subheader} list={list} />
  //               ))}
  //             </Masonry>
  //           ) : (
  //             <Stack spacing={1.5}>
  //               {renderLists.map((list) => (
  //                 <ListMobile key={list.subheader} list={list} />
  //               ))}
  //             </Stack>
  //           )}
  //         </Grid>
  //       </Grid>
  //     </Container>

  //     <Divider />

  //     <Container>
  //       <Stack
  //         spacing={2.5}
  //         direction={{ xs: 'column', md: 'row' }}
  //         justifyContent="space-between"
  //         sx={{ py: 3, textAlign: 'center' }}
  //       >
  //         <Typography variant="caption" sx={{ color: 'text.secondary' }}>
  //           © 2023. All rights reserved
  //         </Typography>

  //         <Stack direction="row" spacing={3} justifyContent="center">
  //           <Link variant="caption" sx={{ color: 'text.secondary' }}>
  //             Help Center
  //           </Link>

  //           <Link variant="caption" sx={{ color: 'text.secondary' }}>
  //             Terms of Service
  //           </Link>
  //         </Stack>
  //       </Stack>
  //     </Container>
  //   </>
  // );

  // return <footer>{isHome ? simpleFooter : mainFooter}</footer>;

  return <footer>{simpleFooter}</footer>;
}

// ----------------------------------------------------------------------

export function ListDesktop({ list }) {
  const pathname = usePathname();

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography variant="subtitle2">{list.subheader}</Typography>

      {list.items?.map((link) => {
        const active = pathname === link.path || pathname === `${link.path}/`;

        return (
          <Link
            component={RouterLink}
            key={link.title}
            href={link.path}
            variant="caption"
            sx={{
              color: 'text.secondary',
              '&:hover': {
                color: 'text.primary',
              },
              ...(active && {
                color: 'text.primary',
                fontWeight: 'fontWeightSemiBold',
              }),
            }}
          >
            {link.title}
          </Link>
        );
      })}
    </Stack>
  );
}

ListDesktop.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};

// ----------------------------------------------------------------------

export function ListMobile({ list }) {
  const pathname = usePathname();

  const listExpand = useBoolean();

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography
        variant="subtitle2"
        onClick={listExpand.onToggle}
        sx={{
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        {list.subheader}
        <Iconify
          width={16}
          icon={listExpand.value ? 'carbon:chevron-down' : 'carbon:chevron-right'}
          sx={{ ml: 0.5 }}
        />
      </Typography>

      <Collapse in={listExpand.value} unmountOnExit sx={{ width: 1 }}>
        <Stack spacing={1.5} alignItems="flex-start">
          {list.items?.map((link) => (
            <Link
              component={RouterLink}
              key={link.title}
              href={link.path}
              variant="caption"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'text.primary',
                },
                ...(pathname === `${link.path}/` && {
                  color: 'text.primary',
                  fontWeight: 'fontWeightSemiBold',
                }),
              }}
            >
              {link.title}
            </Link>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}

ListMobile.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};

// ----------------------------------------------------------------------

function AppStoreButton({ ...other }) {
  return (
    <Stack direction="row" flexWrap="wrap" spacing={2} {...other}>
      <StyledAppStoreButton startIcon={<Iconify icon="ri:apple-fill" width={28} />}>
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download on the
          </Typography>

          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Apple Store
          </Typography>
        </Stack>
      </StyledAppStoreButton>

      <StyledAppStoreButton startIcon={<Iconify icon="logos:google-play-icon" width={28} />}>
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download from
          </Typography>

          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Google Play
          </Typography>
        </Stack>
      </StyledAppStoreButton>
    </Stack>
  );
}
