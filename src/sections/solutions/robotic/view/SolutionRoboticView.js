'use client';

import { getCurentCaseStudies, getTestimonials, getPosts, getRoboticByCategories } from 'src/_mock';

import HomeCaseStudies from 'src/sections/home/home-case-studies';
import HomeOurServices from 'src/sections/home/home-our-services';
import HomeTestimonial from 'src/sections/home/home-testimonial';
import HomeLatestPosts from 'src/sections/home/home-latest-posts';
import HomeFreeSEO from 'src/sections/home/home-free-seo';
import { useLocale, useTranslations } from 'next-intl';
import SolutionRoboticHero from '../SolutionRoboticHero';
import SolutionRoboticOverView from '../SolutionRoboticOverView';
import SolutionRoboticKeyCapabilities from '../SolutionRoboticKeyCapabilities';
import SolutionRoboticBenefits from '../SolutionRoboticBenefits';
import SolutionRoboticAbout from '../SolutionRoboticAbout';

// ----------------------------------------------------------------------

export default function SolutionRoboticView() {
  const tCase = useTranslations('case_studies');
  const tTestimonial = useTranslations('testimonial');
  const tRobotic = useTranslations('solutions.robotic.benefits');
  const tBlog = useTranslations('blog');

  const locale = useLocale();
  const _curentCaseStudies = getCurentCaseStudies(tCase, locale);
  const _testimonials = getTestimonials(tTestimonial);
  const _roboticByCategories = getRoboticByCategories(tRobotic);
  const _careerPosts = getPosts(tBlog);

  return (
    <>
      <SolutionRoboticHero />

      <SolutionRoboticOverView />

      <SolutionRoboticAbout />

      <SolutionRoboticKeyCapabilities />

      <SolutionRoboticBenefits categories={_roboticByCategories} />

      <HomeCaseStudies caseStudies={_curentCaseStudies} />

      <HomeOurServices />

      <HomeTestimonial testimonials={_testimonials} />

      <HomeLatestPosts posts={_careerPosts.slice(0, 5)} />

      <HomeFreeSEO />
    </>
  );
}
