'use client';

import { getCoursesByCategories, getCurentCaseStudies, getPosts, getTestimonials } from 'src/_mock';

import HomeCaseStudies from 'src/sections/home/home-case-studies';
import HomeOurServices from 'src/sections/home/home-our-services';
import HomeTestimonial from 'src/sections/home/home-testimonial';
import HomeLatestPosts from 'src/sections/home/home-latest-posts';
import HomeFreeSEO from 'src/sections/home/home-free-seo';
import { useLocale, useTranslations } from 'next-intl';
import SolutionAccHero from '../SolutionAccHero';
import SolutionAccOverView from '../SolutionAccOverView';
import SolutionAccKeyCapabilities from '../SolutionAccKeyCapabilities';
import SolutionAccBenefits from '../SolutionAccBenefits';
import SolutionAccAbout from '../SolutionAccAbout';

// ----------------------------------------------------------------------

export default function SolutionAccView() {
  const tCase = useTranslations('case_studies');
  const tTestimonial = useTranslations('testimonial');
  const tBlog = useTranslations('blog');
  const tCourse = useTranslations('solutions.accounting_finance.benefits');

  const locale = useLocale();
  const _curentCaseStudies = getCurentCaseStudies(tCase, locale);
  const _testimonials = getTestimonials(tTestimonial);
  const _careerPosts = getPosts(tBlog);
  const _coursesByCategories = getCoursesByCategories(tCourse);

  return (
    <>
      <SolutionAccHero />

      <SolutionAccOverView />

      <SolutionAccAbout />

      <SolutionAccKeyCapabilities />

      <SolutionAccBenefits categories={_coursesByCategories} />

      <HomeCaseStudies caseStudies={_curentCaseStudies} />

      <HomeOurServices />

      <HomeTestimonial testimonials={_testimonials} />

      <HomeLatestPosts posts={_careerPosts.slice(0, 5)} />

      <HomeFreeSEO />
    </>
  );
}
