'use client';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';
import {
  _brands,
  _marketingPosts,
  _brandsTwo,
  _members,
  getCurentCaseStudies,
  getTestimonials,
  getPosts,
} from 'src/_mock';

import { useTranslations } from 'next-intl';
import HomeHero from '../home-hero';
import HomeFaqs from '../home-faqs';
import HomeServices from '../home-services';
import HomeHowItWork from '../home-how-it-work';
import HomeOurClients from '../home-our-clients';
import HomeOurServices from '../home-our-services';
import HomeCaseStudies from '../home-case-studies';
import HomeFreeSEO from '../home-free-seo';
import HomeServicesInclude from '../home-services-include';
import HomeTestimonial from '../home-testimonial';
import HomeServicesMobileApp from '../home-services-mobile-app';
import HomeLatestPosts from '../home-latest-posts';
import HomeOurTeam from '../home-our-team';
// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  const t = useTranslations('case_studies');
  const tTestimonials = useTranslations('testimonial');
  const tPost = useTranslations('blog');
  const _curentCaseStudies = getCurentCaseStudies(t);
  const _testimonials = getTestimonials(tTestimonials);
  const _careerPosts = getPosts(tPost)
  return (
    <>
      {/* <ScrollProgress scrollYProgress={scrollYProgress} /> */}

      <HomeHero />

      <HomeOurClients brands={_brands} />

      <HomeServices />

      <HomeServicesMobileApp />

      <HomeServicesInclude />

      <HomeCaseStudies caseStudies={_curentCaseStudies} />

      <HomeOurTeam members={_members} />

      <HomeOurServices />

      <HomeTestimonial testimonials={_testimonials} />

      <HomeHowItWork />

      <HomeFaqs />

      <HomeLatestPosts posts={_careerPosts.slice(0, 5)} />

      <HomeFreeSEO />
    </>
  );
}
