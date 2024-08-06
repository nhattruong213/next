'use client';

import { useState, useCallback, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { usePathname } from 'src/routes/hooks';
import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { fDate } from 'src/utils/format-time';
import Markdown from 'src/components/markdown';
import { _socials, getPosts } from 'src/_mock';
import HomeFreeSEO from 'src/sections/home/home-free-seo';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import HomeLatestPosts from 'src/sections/home/home-latest-posts';

import { useLocale, useTranslations } from 'next-intl';
import PostTags from '../../blog/common/post-tags';
import PostAuthor from '../../blog/common/post-author';
import PostTimeBlock from '../../blog/common/post-time-block';
import PostSocialsShare from '../../blog/common/post-socials-share';

// ----------------------------------------------------------------------

export default function PostView() {
  const pathUrlName = usePathname();
  const tBlog = useTranslations('blog');
  const parts = pathUrlName.split('/');
  const locale = useLocale();
  const tCommon = useTranslations('common');

  const desiredPart = parts[2];
  const _careerPosts = getPosts(tBlog, locale);
  const post = _careerPosts.find((item) => item.id === desiredPart);

  if (!post) {
    return (
      <>
        <Container
          sx={{
            overflow: 'hidden',
            pt: 5,
            pb: { xs: 10, md: 15 },
          }}
        >
          <p>Loading...</p>
        </Container>
      </>
    );
  }

  const { title, breadcrumb, description, duration, createdAt, favorited, author, tags, content } =
    post;

  const [favorite, setFavorite] = useState(favorited || null);

  const [open, setOpen] = useState(null);

  const handleOpen = useCallback((event) => {
    setOpen(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(null);
  }, []);

  const handleChangeFavorite = useCallback((event) => {
    setFavorite(event.target.checked);
  }, []);

  return (
    <>
      <Divider />

      <Container sx={{ overflow: 'hidden' }}>
        <Grid container spacing={3} justifyContent={{ md: 'center' }}>
          <Grid xs={12} md={8}>
            <CustomBreadcrumbs
              links={[
                { name: tCommon('home'), href: '/' },
                { name: tCommon('blog'), href: paths.posts },
                { name: breadcrumb },
              ]}
              sx={{ my: 5 }}
            />

            <Typography variant="h2" component="h1" sx={{ my: 5 }}>
              {title}
            </Typography>

            <Typography variant="h5" sx={{ mb: 5 }}>
              {description}
            </Typography>

            <Markdown content={content} />

            <PostTags tags={tags} />

            <PostSocialsShare />

            <Divider sx={{ mt: 8 }} />
          </Grid>
        </Grid>
      </Container>

      <HomeLatestPosts posts={_careerPosts.slice(0, 5)} />

      <HomeFreeSEO />

      <Divider />

      <Popover
        open={!!open}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        slotProps={{
          paper: {
            sx: { width: 220 },
          },
        }}
      >
        {_socials.map((social) => (
          <MenuItem key={social.value} onClick={handleClose}>
            <Iconify icon={social.icon} width={24} sx={{ mr: 1, color: social.color }} />
            Share via {social.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
