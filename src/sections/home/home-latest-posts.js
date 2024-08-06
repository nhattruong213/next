import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { useResponsive } from 'src/hooks/use-responsive';

import { useTranslations } from 'next-intl';
import PostItemMobile from './common/post-item-mobile';
import HomeLatestPostItem from './home-latest-post-item';

// ----------------------------------------------------------------------

export default function HomeLatestPosts({ posts }) {
  const mdUp = useResponsive('up', 'md');
  const t = useTranslations('blog')
  const tCommon = useTranslations('common');
  const latestPost = posts[0];

  const viewAllBtn = (
    <Button
      component={RouterLink}
      href={paths.posts}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      {tCommon('view_all')}
    </Button>
  );

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: 10,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'space-between' }}
        sx={{
          mb: { xs: 8, md: 10 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Stack
          sx={{
            maxWidth: { md: 600 },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            {tCommon('blog')}
          </Typography>

          <Typography variant="h2" sx={{ my: 3 }}>
            {t('title')}
          </Typography>

          <Typography sx={{ color: 'text.secondary', maxWidth: { md: 450 } }}>
            {t('description')}
          </Typography>
        </Stack>

        {mdUp && viewAllBtn}
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 3, md: 4 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          },
        }}
      >
        {mdUp ? (
          <>
            <HomeLatestPostItem post={latestPost} largePost />

            <Masonry columns={{ xs: 1, md: 2 }} spacing={4}>
              {posts.slice(1, 5).map((post, index) => (
                <HomeLatestPostItem key={post.id} post={post} order={index % 2} />
              ))}
            </Masonry>
          </>
        ) : (
          <>
            {posts.slice(0, 5).map((post) => (
              <PostItemMobile key={post.id} post={post} />
            ))}
          </>
        )}
      </Box>

      {!mdUp && (
        <Stack alignItems="center" sx={{ mt: 8 }}>
          {viewAllBtn}
        </Stack>
      )}
    </Container>
  );
}

HomeLatestPosts.propTypes = {
  posts: PropTypes.array,
};
