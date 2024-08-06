'use client';

import { getCurentCaseStudies, getTestimonials, getPosts } from 'src/_mock';

import HomeCaseStudies from 'src/sections/home/home-case-studies';
import HomeOurServices from 'src/sections/home/home-our-services';
import HomeTestimonial from 'src/sections/home/home-testimonial';
import HomeLatestPosts from 'src/sections/home/home-latest-posts';
import HomeFreeSEO from 'src/sections/home/home-free-seo';
import { useLocale, useTranslations } from 'next-intl';
import SolutionInventoryHero from '../SolutionInventoryHero';
import SolutionInventoryOverView from '../SolutionInventoryOverView';
import SolutionInventoryKeyCapabilities from '../SolutionInventoryKeyCapabilities';
import SolutionInventoryBenefits from '../SolutionInventoryBenefits';
import SolutionInventoryAbout from '../SolutionInventoryAbout';

// ----------------------------------------------------------------------

export default function SolutionInventoryView() {
  const tCase = useTranslations('case_studies');
  const tTestimonial = useTranslations('testimonial');
  const tBlog = useTranslations('blog');

  const locale = useLocale();
  const _curentCaseStudies = getCurentCaseStudies(tCase, locale);
  const _testimonials = getTestimonials(tTestimonial);
  const _careerPosts = getPosts(tBlog);

  return (
    <>
      <SolutionInventoryHero />

      <SolutionInventoryOverView />

      <SolutionInventoryAbout />

      <SolutionInventoryKeyCapabilities />

      <SolutionInventoryBenefits />

      <HomeCaseStudies caseStudies={_curentCaseStudies} />

      <HomeOurServices />

      <HomeTestimonial testimonials={_testimonials} />

      <HomeLatestPosts posts={_careerPosts.slice(0, 5)} />

      <HomeFreeSEO />
    </>
  );
}
