'use client';

import HomeCaseStudies from 'src/sections/home/home-case-studies';
import HomeOurServices from 'src/sections/home/home-our-services';
import HomeTestimonial from 'src/sections/home/home-testimonial';
import HomeLatestPosts from 'src/sections/home/home-latest-posts';
import HomeFreeSEO from 'src/sections/home/home-free-seo';
import { useLocale, useTranslations } from 'next-intl';
import { getCurentCaseStudies, getPosts, getTestimonials } from 'src/_mock';
import SolutionHRMHero from '../SolutionHRMHero';
import SolutionHRMOverView from '../SolutionHRMOverView';
import SolutionHRMKeyCapabilities from '../SolutionHRMKeyCapabilities';
import SolutionHRMBenefits from '../SolutionHRMBenefits';
import SolutionHRMAbout from '../SolutionHRMAbout';

// ----------------------------------------------------------------------

export default function SolutionHRMView() {
  const tCase = useTranslations('case_studies');
  const tTestimonial = useTranslations('testimonial');
  const tBlog = useTranslations('blog');
  const locale = useLocale();
  const _curentCaseStudies = getCurentCaseStudies(tCase, locale);
  const _testimonials = getTestimonials(tTestimonial);
  const _careerPosts = getPosts(tBlog);

  return (
    <>
      <SolutionHRMHero />

      <SolutionHRMOverView />

      <SolutionHRMAbout />

      <SolutionHRMKeyCapabilities />

      <SolutionHRMBenefits />

      <HomeCaseStudies caseStudies={_curentCaseStudies} />

      <HomeOurServices />

      <HomeTestimonial testimonials={_testimonials} />

      <HomeLatestPosts posts={_careerPosts.slice(0, 5)} />

      <HomeFreeSEO />
    </>
  );
}
