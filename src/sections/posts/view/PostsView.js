'use client';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { _mock, _categories, getPosts, getTags } from 'src/_mock';
import HomeFreeSEO from 'src/sections/home/home-free-seo';

import { useTranslations } from 'next-intl';
import PostSidebar from '../../blog/common/post-sidebar';
import CareerPosts from '../../blog/career/career-posts';

// ----------------------------------------------------------------------

export default function PostsView() {
  const t = useTranslations('blog');
  const tTags = useTranslations('tags');

  const _careerPosts = getPosts(t);
  const _tags = getTags(tTags);
  
  return (
    <>
      {/* <PostSearchMobile /> */}

      <Container
        sx={{
          pt: { xs: 0, md: 5 },
          pb: { xs: 8, md: 15 },
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <CareerPosts posts={_careerPosts} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={_tags}
              categories={_categories}
              recentPosts={{ list: _careerPosts.slice(-4) }}
              advertisement={{
                title: 'Advertisement',
                description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                imageUrl: _mock.image.career(10),
                path: '',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <HomeFreeSEO />
    </>
  );
}
