import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { bgBlur } from 'src/theme/css';
import Logo from 'src/components/logo';
import { paths } from 'src/routes/paths';
import Label from 'src/components/label';
import { useResponsive } from 'src/hooks/use-responsive';
import { useOffSetTop } from 'src/hooks/use-off-set-top';

import { useTranslations } from 'next-intl';
import { HEADER } from '../config-layout';
import Searchbar from '../common/searchbar';
import HeaderShadow from '../common/header-shadow';
import SettingsButton from '../common/settings-button';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { getNavConfig } from './config-navigation';
import LanguagePopover from './LanguagePopover';

// ----------------------------------------------------------------------

export default function Header({ headerOnDark }) {
  const theme = useTheme();
  const t = useTranslations('common');
  const offset = useOffSetTop();
  const navConfig = getNavConfig(t);
  const mdUp = useResponsive('up', 'md');

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{ height: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ lineHeight: 0, position: 'relative' }}>
            <Logo />
          </Box>

          {mdUp ? <NavDesktop data={navConfig} /> : <Box sx={{ flexGrow: 1 }}/>}

          <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">
            <LanguagePopover />
            {mdUp && (
              <Button variant="contained" color="inherit" href="#contact" rel="noopener">
                {t('contact_us')}
              </Button>
            )}
          </Stack>

          {!mdUp && <NavMobile data={navConfig} />}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}

Header.propTypes = {
  headerOnDark: PropTypes.bool,
};
