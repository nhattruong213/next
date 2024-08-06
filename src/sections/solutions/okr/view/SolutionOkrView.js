'use client';

import { getCurentCaseStudies, getTestimonials, getPosts, getOkryCategories } from 'src/_mock';

import HomeCaseStudies from 'src/sections/home/home-case-studies';
import HomeOurServices from 'src/sections/home/home-our-services';
import HomeTestimonial from 'src/sections/home/home-testimonial';
import HomeLatestPosts from 'src/sections/home/home-latest-posts';
import HomeFreeSEO from 'src/sections/home/home-free-seo';
import { useLocale, useTranslations } from 'next-intl';
import SolutionOkrHero from '../SolutionOkrHero';
import SolutionOkrOverView from '../SolutionOkrOverView';
import SolutionOkrKeyCapabilities from '../SolutionOkrKeyCapabilities';
import SolutionOkrBenefits from '../SolutionOkrBenefits';
import SolutionOkrAbout from '../SolutionOkrAbout';

// ----------------------------------------------------------------------

export default function SolutionOkrView() {
  const tCase = useTranslations('case_studies');
  const tTestimonial = useTranslations('testimonial');
  const tBlog = useTranslations('blog');
  const t = useTranslations('solutions.okr_performance_management.benefits');

  const locale = useLocale();
  const _curentCaseStudies = getCurentCaseStudies(tCase, locale);
  const _testimonials = getTestimonials(tTestimonial);
  const _careerPosts = getPosts(tBlog);
  const _okryCategories = getOkryCategories(t);

  return (
    <>
      <SolutionOkrHero />

      <SolutionOkrOverView />

      <SolutionOkrAbout />

      <SolutionOkrKeyCapabilities />

      <SolutionOkrBenefits categories={_okryCategories} />

      <HomeCaseStudies caseStudies={_curentCaseStudies} />

      <HomeOurServices />

      <HomeTestimonial testimonials={_testimonials} />

      <HomeLatestPosts posts={_careerPosts.slice(0, 5)} />

      <HomeFreeSEO />
    </>
  );
}
