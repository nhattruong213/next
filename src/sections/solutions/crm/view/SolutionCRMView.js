'use client';

import { getCurentCaseStudies, getPosts, getTestimonials } from 'src/_mock';

import HomeCaseStudies from 'src/sections/home/home-case-studies';
import HomeOurServices from 'src/sections/home/home-our-services';
import HomeTestimonial from 'src/sections/home/home-testimonial';
import HomeLatestPosts from 'src/sections/home/home-latest-posts';
import HomeFreeSEO from 'src/sections/home/home-free-seo';
import { useLocale, useTranslations } from 'next-intl';
import SolutionCRMHero from '../SolutionCRMHero';
import SolutionCRMOverView from '../SolutionCRMOverView';
import SolutionCRMKeyCapabilities from '../SolutionCRMKeyCapabilities';
import SolutionCRMBenefits from '../SolutionCRMBenefits';
import SolutionCRMAbout from '../SolutionCRMAbout';

// ----------------------------------------------------------------------

export default function SolutionCRMView() {
  const tCase = useTranslations('case_studies');
  const tTestimonial = useTranslations('testimonial');
  const tBlog = useTranslations('blog');
  const locale = useLocale();
  const _curentCaseStudies = getCurentCaseStudies(tCase, locale);
  const _testimonials = getTestimonials(tTestimonial);
  const _careerPosts = getPosts(tBlog);

  return (
    <>
      <SolutionCRMHero />

      <SolutionCRMOverView />

      <SolutionCRMAbout />

      <SolutionCRMKeyCapabilities />

      <SolutionCRMBenefits />

      <HomeCaseStudies caseStudies={_curentCaseStudies} />

      <HomeOurServices />

      <HomeTestimonial testimonials={_testimonials} />

      <HomeLatestPosts posts={_careerPosts.slice(0, 5)} />

      <HomeFreeSEO />
    </>
  );
}
