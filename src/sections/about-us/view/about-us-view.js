'use client';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import HomeOurServices from 'src/sections/home/home-our-services';
import HomeFreeSEO from 'src/sections/home/home-free-seo';
import HomeLatestPosts from 'src/sections/home/home-latest-posts';
import HomeTestimonial from 'src/sections/home/home-testimonial';
import {
  _brands,
  _testimonials,
  _curentCaseStudies,
  _marketingPosts,
  _careerPosts,
  _brandsTwo,
  _activities,
  _members,
} from 'src/_mock';
import HomeHowItWork from 'src/sections/home/home-how-it-work';
import HomeFaqs from 'src/sections/home/home-faqs';
import HomeOurClients from 'src/sections/home/home-our-clients';

import AboutUs from '../about-us';
import AboutUsOurClients from '../about-us-our-clients';
import AboutUsActivities from '../about-us-activities';
import AboutUsTeamAbout from '../about-us-team-about';
import AboutUsCoreValues from '../about-us-core-values';
import AboutUsOurVision from '../about-us-our-vision';

// ----------------------------------------------------------------------

export default function AboutUsView() {
  return (
    <>
      <AboutUs />

      {/* <AboutUsOurVision /> */}

      <AboutUsCoreValues />

      <AboutUsTeamAbout members={_members} />

      <AboutUsActivities brands={_activities} />

      <HomeFreeSEO />
    </>
  );
}
