import PropTypes from 'prop-types';
import { useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Portal from '@mui/material/Portal';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Image from 'src/components/image';
import Label from 'src/components/label';
import { usePathname } from 'src/routes/hooks';
import { useBoolean } from 'src/hooks/use-boolean';
import { RouterLink } from 'src/routes/components';
import { useActiveLink } from 'src/routes/hooks/use-active-link';
import SvgColor from 'src/components/svg-color';

import { NavItem } from './nav-item';
import { StyledMenu, StyledSubheader } from './styles';

// ----------------------------------------------------------------------

export default function NavList({ item }) {
  const pathname = usePathname();

  const menuOpen = useBoolean();

  const active = useActiveLink(item.path, false);

  const externalLink = item.path.includes('http');

  const mainList = item.children ? item.children.filter((list) => list.subheader !== 'Common') : [];

  const commonList = item.children
    ? item.children.find((list) => list.subheader === 'Common')
    : null;

  useEffect(() => {
    if (menuOpen.value) {
      menuOpen.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    if (item.children) {
      menuOpen.onTrue();
    }
  }, [item.children, menuOpen]);

  return (
    <>
      <NavItem
        item={item}
        active={active}
        open={menuOpen.value}
        externalLink={externalLink}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={menuOpen.onFalse}
      />

      {!!item.children && menuOpen.value && (
        <Portal>
          <Fade
            in={menuOpen.value}
            sx={{
              borderRadius: 1.5,
            }}
          >
            <StyledMenu onMouseEnter={handleOpenMenu} onMouseLeave={menuOpen.onFalse}>
              <Container
                sx={{
                  display: { md: 'flex' },
                  alignItems: { md: 'center' },
                }}
              >
                <Box
                  sx={{
                    p: 4,
                    position: 'relative',
                  }}
                >
                  {mainList.map((list) => (
                    <NavSubList
                      key={list.subheader}
                      subheader={list.subheader}
                      cover={list.cover}
                      items={list.items}
                      isNew={list.isNew}
                    />
                  ))}
                </Box>
              </Container>
            </StyledMenu>
          </Fade>
        </Portal>
      )}
    </>
  );
}

NavList.propTypes = {
  item: PropTypes.shape({
    children: PropTypes.array,
    path: PropTypes.string,
  }),
};

// ----------------------------------------------------------------------

// function NavSubList({ subheader, isNew, cover, items }) {
//   const pathname = usePathname();

//   const coverPath = items.length ? items[0].path : '';

//   const commonList = subheader === 'Common';

//   return (
//     <Box
//       sx={{
//         rowGap: 5,
//         columnGap: 5,
//         display: 'grid',
//         gridTemplateColumns: {
//           xs: 'repeat(1, 1fr)',
//           sm: 'repeat(2, 1fr)',
//           md: 'repeat(3, 1fr)',
//         },
//       }}
//     >
//       {items.map((value) => (
//         <Link
//           href={value.link}
//           key={value.title}
//           color="inherit"
//           underline="none"
//           sx={{
//             backgroundColor: '#ffffff',
//             p: 2,
//             borderRadius: '4px',
//             cursor: 'pointer',
//             transition: 'background-color 0.2s ease, transform 0.2s ease',
//             '&:hover': {
//               backgroundColor: '#f0f0f0',
//               transform: 'scale(1.05)',
//             },
//           }}
//         >
//           <SvgColor
//             src={value.icon}
//             color="info"
//             sx={{
//               width: 40,
//               height: 40,
//               mx: 'auto',
//               bgcolor: 'primary.main',
//             }}
//           />
//           <Typography variant="h5">
//             <Typography variant="h5" color="inherit">
//               {value.title}
//             </Typography>
//           </Typography>

//           <Typography sx={{ color: 'text.secondary' }}>{value.description}</Typography>
//         </Link>
//         // <div key={value?.title}>
//         //   <SvgColor
//         //     src={value?.icon}
//         //     color="info"
//         //     sx={{
//         //       width: 40,
//         //       height: 40,
//         //       mx: 'auto',
//         //       bgcolor: 'primary.main',
//         //     }}
//         //   />
//         //   <Typography variant="h6">
//         //     <Link component={RouterLink} href={value.link} variant="h6" color="inherit">
//         //       {value?.title}
//         //     </Link>
//         //   </Typography>
//         // </div>
//       ))}
//     </Box>
//   );
// }

function NavSubList({ subheader, isNew, cover, items }) {
  const pathname = usePathname();

  const coverPath = items.length ? items[0].path : '';

  const commonList = subheader === 'Common';

  return (
    <Stack spacing={2}>
      <Stack spacing={1.5} alignItems="flex-start">
        {items.map((item) => {
          // console.log(item.path);
          const active = pathname === item.path || pathname === `${item.path}/`;

          return <NavItem key={item.title} item={item} active={active} subItem />;
        })}
      </Stack>
    </Stack>
  );
}

NavSubList.propTypes = {
  cover: PropTypes.string,
  isNew: PropTypes.bool,
  items: PropTypes.array,
  subheader: PropTypes.string,
};
