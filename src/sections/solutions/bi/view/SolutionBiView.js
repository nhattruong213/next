'use client';

import HomeCaseStudies from 'src/sections/home/home-case-studies';
import HomeOurServices from 'src/sections/home/home-our-services';
import HomeTestimonial from 'src/sections/home/home-testimonial';
import HomeLatestPosts from 'src/sections/home/home-latest-posts';
import HomeFreeSEO from 'src/sections/home/home-free-seo';
import { useLocale, useTranslations } from 'next-intl';
import { getCurentCaseStudies, getPosts, getTestimonials } from 'src/_mock';
import SolutionBiHero from '../SolutionBiHero';
import SolutionBiOverView from '../SolutionBiOverView';
import SolutionBiKeyCapabilities from '../SolutionBiKeyCapabilities';
import SolutionBiBenefits from '../SolutionBiBenefits';
import SolutionBiAbout from '../SolutionBiAbout';

// ----------------------------------------------------------------------

export default function SolutionBiView() {
  const tCase = useTranslations('case_studies');
  const tTestimonial = useTranslations('testimonial');
  const tBlog = useTranslations('blog');
  const locale = useLocale();
  const _curentCaseStudies = getCurentCaseStudies(tCase, locale);
  const _testimonials = getTestimonials(tTestimonial);
  const _careerPosts = getPosts(tBlog);

  return (
    <>
      <SolutionBiHero />

      <SolutionBiOverView />

      <SolutionBiAbout />

      <SolutionBiKeyCapabilities />

      <SolutionBiBenefits />

      <HomeCaseStudies caseStudies={_curentCaseStudies} />

      <HomeOurServices />

      <HomeTestimonial testimonials={_testimonials} />

      <HomeLatestPosts posts={_careerPosts.slice(0, 5)} />

      <HomeFreeSEO />
    </>
  );
}
