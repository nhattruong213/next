'use client';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import HomeOurServices from 'src/sections/home/home-our-services';
import HomeFreeSEO from 'src/sections/home/home-free-seo';
import HomeLatestPosts from 'src/sections/home/home-latest-posts';
import HomeTestimonial from 'src/sections/home/home-testimonial';
import {
  getCurentCaseStudies,
  getPosts,
  getTestimonials,
} from 'src/_mock';

import { useTranslations } from 'next-intl';
import MarketingCaseStudyList from '../list/marketing-case-study-list';
// ----------------------------------------------------------------------

export default function CaseStudiesView() {
  const t = useTranslations('case_studies_page');
  const tContent = useTranslations('case_studies');
  const TTestimonials = useTranslations('testimonial');
  const tBlog = useTranslations('blog');

  const _curentCaseStudies = getCurentCaseStudies(tContent);
  const _testimonials = getTestimonials(TTestimonials);
  const _careerPosts = getPosts(tBlog);
  
  return (
    <>
      <Container>
        <Stack
          spacing={3}
          sx={{
            py: 5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">{t('title')}</Typography>

          <Typography sx={{ color: 'text.secondary' }} dangerouslySetInnerHTML={ {__html: t('description')}}/>
        </Stack>

        <MarketingCaseStudyList caseStudies={_curentCaseStudies} />
      </Container>

      <HomeOurServices />

      <HomeTestimonial testimonials={_testimonials} />

      <HomeLatestPosts posts={_careerPosts.slice(0, 5)} />

      <HomeFreeSEO />
    </>
  );
}
