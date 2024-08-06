import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Tooltip from '@mui/material/Tooltip';
import { Box, ClickAwayListener, IconButton, List, MenuItem, Paper, Popover, Typography } from '@mui/material';

import { useLocale } from 'next-intl';
import { setUserLocale } from 'src/services/locale';
import { Stack } from '@mui/system';
import { setDayjsLocale } from 'src/services/day';
import Iconify from '../../components/iconify';
// ----------------------------------------------------------------------

const LANGS = [
  {
    label: 'English',
    value: 'en',
    icon:  <Iconify icon="emojione-v1:flag-for-united-states" />,
  },
  {
    label: 'Japanese',
    value: 'jp',
    icon:  <Iconify icon="twemoji:flag-japan" />,
  },
];

// ----------------------------------------------------------------------
LanguagePopover.propTypes = {
  sx: PropTypes.object,
};

export default function LanguagePopover({ sx }) {
  const locale = useLocale();
  const [currentLang, setCurrentLang] = useState(locale);
  const anchorRef = useRef(null);

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  const handleChangeLang = (newLang) => {
    setCurrentLang(newLang);
    setUserLocale(newLang);
    setDayjsLocale(newLang === 'jp' ? 'ja' : newLang);
    handleClose()
  };

  return (
    <>
      <IconButton
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        disableRipple
        sx={{ color: 'grey.800' }}
      >
          <Iconify icon="zondicons:network" />
      </IconButton>
      <Popover
        open={Boolean(open)}
        anchorEl={anchorRef.current}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
            {LANGS.map((option) => (
              <MenuItem
                key={option.value}
                selected={option.value === currentLang}
                onClick={() => handleChangeLang(option.value)}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {option.icon}
                  <Typography>{option.label}</Typography>
                </Box>
              </MenuItem>
            ))}
          </List>
        </ClickAwayListener>
      </Popover>
    </>
  );
}
