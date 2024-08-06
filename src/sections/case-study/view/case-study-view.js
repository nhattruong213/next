'use client';

import { useEffect, useState } from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import Image from 'src/components/image';
import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';
import Markdown from 'src/components/markdown';
import HomeFreeSEO from 'src/sections/home/home-free-seo';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { _testimonialsOnly, DATAS, getCurentCaseStudies } from 'src/_mock';
import { useResponsive } from 'src/hooks/use-responsive';

import { useLocale, useTranslations } from 'next-intl';
import StudyTestimonial from '../testimonial/study-testimonial';
import CaseStudyListSimilar from '../list/case-study-list-similar';
import MarketingCaseStudyDetailsGallery from '../details/marketing-case-study-details-gallery';
import MarketingCaseStudyDetailsSummary from '../details/marketing-case-study-details-summary';

// ----------------------------------------------------------------------

export default function CaseStudyView() {
  const pathUrlName = usePathname();
  const tCaseStudy = useTranslations('case_studies');
  const tCommon = useTranslations('common');
  const mdUp = useResponsive('up', 'md');
  const locale = useLocale();

  const parts = pathUrlName.split('/');

  const desiredPart = parts[2];

  const index = DATAS.findIndex((item) => item.id === desiredPart);
  const _curentCaseStudies = getCurentCaseStudies(tCaseStudy, locale)
  const mockCaseStudy = _curentCaseStudies[index];

  function getRandomItems(arr, n) {
    const shuffled = arr.slice();
    let i = shuffled.length;
    while (i > 0) {
      i -= 1;
      const rand = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[rand]] = [shuffled[rand], shuffled[i]];
    }
    return shuffled.slice(0, n);
  }

  const randomCaseStudies = getRandomItems(_curentCaseStudies, 3);

  if (!mockCaseStudy) {
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

  return (
    <>
      <Container
        sx={{
          overflow: 'hidden',
          pt: 5,
          pb: { xs: 10, md: 15 },
        }}
      >
        <Image
          alt="hero"
          src={mockCaseStudy?.heroUrl}
          ratio={mdUp ? '16/9' : '16/9'}
          sx={{ borderRadius: 2 }}
        />

        <CustomBreadcrumbs
          sx={{ my: 5 }}
          links={[
            { name: tCommon('home'), href: '/' },
            { name: tCommon('case_studies'), href: paths.caseStudies },
            { name: mockCaseStudy?.breadcrumbs },
          ]}
        />

        <Grid container spacing={{ xs: 5, md: 8 }} direction={{ md: 'row-reverse' }}>
          <Grid xs={12} md={4}>
            <MarketingCaseStudyDetailsSummary caseStudy={mockCaseStudy} />
          </Grid>

          <Grid xs={12} md={8}>
            <Markdown content={mockCaseStudy?.content} />
          </Grid>
        </Grid>
      </Container>

      <StudyTestimonial testimonial={mockCaseStudy.testimonial} />

      <CaseStudyListSimilar caseStudies={randomCaseStudies} />

      <HomeFreeSEO />
    </>
  );
}
