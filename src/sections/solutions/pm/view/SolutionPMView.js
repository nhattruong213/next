'use client';

import { getCurentCaseStudies, getTestimonials, getPosts, getProjectByCategories } from 'src/_mock';

import HomeCaseStudies from 'src/sections/home/home-case-studies';
import HomeOurServices from 'src/sections/home/home-our-services';
import HomeTestimonial from 'src/sections/home/home-testimonial';
import HomeLatestPosts from 'src/sections/home/home-latest-posts';
import HomeFreeSEO from 'src/sections/home/home-free-seo';
import { useLocale, useTranslations } from 'next-intl';
import SolutionPMHero from '../SolutionPMHero';
import SolutionPMOverView from '../SolutionPMOverView';
import SolutionPMKeyCapabilities from '../SolutionPMKeyCapabilities';
import SolutionPMBenefits from '../SolutionPMBenefits';
import SolutionPMAbout from '../SolutionPMAbout';

// ----------------------------------------------------------------------

export default function SolutionPMView() {
  const tCase = useTranslations('case_studies');
  const tTestimonial = useTranslations('testimonial');
  const tBlog = useTranslations('blog');
  const t = useTranslations('solutions.project_management.benefits');

  const locale = useLocale();
  const _curentCaseStudies = getCurentCaseStudies(tCase, locale);
  const _testimonials = getTestimonials(tTestimonial);
  const _careerPosts = getPosts(tBlog);
  const _projectByCategories = getProjectByCategories(t);

  return (
    <>
      <SolutionPMHero />

      <SolutionPMOverView />

      <SolutionPMAbout />

      <SolutionPMKeyCapabilities />

      <SolutionPMBenefits categories={_projectByCategories} />

      <HomeCaseStudies caseStudies={_curentCaseStudies} />

      <HomeOurServices />

      <HomeTestimonial testimonials={_testimonials} />

      <HomeLatestPosts posts={_careerPosts.slice(0, 5)} />

      <HomeFreeSEO />
    </>
  );
}
