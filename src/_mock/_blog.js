import { CRM_SOLOTION_CONTENT_JP, HR_CONTENT_JP, OKR_CONTENT_JP, PRODUCTION_MANAGEMENT_CONTENT_JP, PROJECT_MANAGEMENT_SOLOTION_CONTENT_JP } from 'src/assets/data/jp-blogs';
import {
  CRM_SOLOTION_CONTENT,
  HR_CONTENT,
  OKR_CONTENT,
  PRODUCTION_MANAGEMENT_CONTENT,
  PROJECT_MANAGEMENT_CONTENT,
  PROJECT_MANAGEMENT_SOLOTION_CONTENT,
} from '../assets/data/blogs';
import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const content = (name) => `
<p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.</p>
<br/>

<p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh. Donec posuere vulputate arcu. Quisque rutrum.</p>
<br/>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
<br/>

<p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.</p>

<br/>
<br/>
<br/>
<p><img alt="alt marketing" src="/assets/images/${name}/${name}_post_01.jpg" /></p>
<br/>
<br/>
<br/>

<h4>Curabitur suscipit suscipit tellus</h4>
<br/>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
<br/>

<h4>Nullam accumsan lorem in</h4>
<br/>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
<br/>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.</p>

<br/>
<br/>
<br/>
<p><img alt="alt marketing" src="/assets/images/${name}/${name}_post_02.jpg" /></p>
<br/>
<br/>
<br/>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
<br/>

<p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.</p>
<br/>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
`;

const base = (index) => ({
  id: _mock.id(index),
  title: _mock.postTitle(index),
  description: _mock.description(index),
  category: 'Marketing',
  favorited: _mock.boolean(index),
  createdAt: _mock.time(index),
  duration: '8 minutes read',
  tags: _tags.slice(index + 1, index + 2),
  author: {
    name: _mock.fullName(index),
    role: _mock.role(index),
    avatarUrl: _mock.image.avatar(index),
    quotes: 'Member since Mar 15, 2021',
    about:
      'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem.',
  },
});

// ----------------------------------------------------------------------

export const _marketingPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('marketing'),
  coverUrl: _mock.image.marketing(index),
  heroUrl: `/assets/images/marketing/marketing_post_hero.jpg`,
}));

export const _travelPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('travel'),
  coverUrl: _mock.image.travel(index),
  heroUrl: `/assets/images/travel/travel_post_hero.jpg`,
}));

export const _careerPostsData = [
  {
    id: 'hr-management-system',
    title: 'HR management system - A modern technology solution for HR digitalization',
    breadcrumb: 'HR management system',
    description: '',
    category: 'Marketing',
    favorited: '',
    createdAt: '',
    duration: 'January 24, 2020',
    tags: ['Human Resources Management'],
    author: {
      name: 'Courtney Henry',
      role: 'Curator of Marketing Course',
      avatarUrl: '',
      quotes: 'Member since Mar 15, 2021',
      about:
        'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem..',
    },
    content: HR_CONTENT,
    coverUrl: '/assets/images/blogs/HR_COVER.jpg',
    heroUrl: `/assets/images/career/career_post_hero.jpg`,
  },
  {
    id: 'okr-management-application',
    title:
      'OKR management application - An effective tool to help businesses achieve business goals',
    breadcrumb: 'OKR management application',
    description: '',
    category: 'Marketing',
    favorited: '',
    createdAt: '',
    duration: 'August 1, 2019',
    tags: ['OKR and Performance Management'],
    author: {
      name: 'Courtney Henry',
      role: 'Curator of Marketing Course',
      avatarUrl: '',
      quotes: 'Member since Mar 15, 2021',
      about:
        'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem..',
    },
    content: OKR_CONTENT,
    coverUrl: '/assets/images/blogs/OKR_COVER.png',
    heroUrl: `/assets/images/career/career_post_hero.jpg`,
  },
  {
    id: 'production-management-application',
    title:
      'Production Management Application - Modernization and Optimization of Manufacturing Processes',
    breadcrumb: 'Production Management Application',
    description: '',
    category: 'Marketing',
    favorited: '',
    createdAt: '',
    duration: 'August 16, 2019',
    tags: ['Production Management'],
    author: {
      name: 'Courtney Henry',
      role: 'Curator of Marketing Course',
      avatarUrl: '',
      quotes: 'Member since Mar 15, 2021',
      about:
        'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem..',
    },
    content: PRODUCTION_MANAGEMENT_CONTENT,
    coverUrl: '/assets/images/blogs/PRODUCTION_COVER.png',
    heroUrl: `/assets/images/career/career_post_hero.jpg`,
  },
  {
    id: 'project-management-solution',
    title:
      'Project Management Solution - Enhancing Quality and Efficiency of Construction Project Implementation',
    breadcrumb: 'Project Management Solution',
    description: '',
    category: 'Marketing',
    favorited: '',
    createdAt: '',
    duration: 'May 20, 2021',
    tags: ['Project Management'],
    author: {
      name: 'Courtney Henry',
      role: 'Curator of Marketing Course',
      avatarUrl: '',
      quotes: 'Member since Mar 15, 2021',
      about:
        'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem..',
    },
    content: PROJECT_MANAGEMENT_SOLOTION_CONTENT,
    coverUrl: '/assets/images/blogs/PROJECT_COVER.png',
    heroUrl: `/assets/images/career/career_post_hero.jpg`,
  },
  {
    id: 'crm-solution',
    title: 'CRM Solution - Optimizing Customer Management and Care',
    breadcrumb: 'CRM Solution',
    description: '',
    category: 'Marketing',
    favorited: '',
    createdAt: '',
    duration: 'September 30, 2022',
    tags: ['Customer Relationship Management'],
    author: {
      name: 'Courtney Henry',
      role: 'Curator of Marketing Course',
      avatarUrl: '',
      quotes: 'Member since Mar 15, 2021',
      about:
        'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem..',
    },
    content: CRM_SOLOTION_CONTENT,
    coverUrl: '/assets/images/blogs/CRM_COVER.jpg',
    heroUrl: `/assets/images/career/career_post_hero.jpg`,
  },
];

export const _careerPosts = [...Array(5)].map((_, index) => ({
  id: _careerPostsData[index]?.id,
  title: _careerPostsData[index]?.title,
  description: _careerPostsData[index]?.description,
  breadcrumb: _careerPostsData[index]?.breadcrumb,
  category: _careerPostsData[index]?.category,
  favorited: _careerPostsData[index]?.favorited,
  createdAt: _careerPostsData[index]?.createdAt,
  duration: _careerPostsData[index]?.duration,
  tags: _careerPostsData[index]?.tags,
  author: {
    name: _careerPostsData[index]?.author?.name,
    role: _careerPostsData[index]?.author?.role,
    avatarUrl: _mock.image.avatar(index),
    quotes: _careerPostsData[index]?.author?.quotes,
    about: _careerPostsData[index]?.author?.about,
  },
  content: _careerPostsData[index]?.content,
  coverUrl: _careerPostsData[index]?.coverUrl,
  heroUrl: _careerPostsData[index]?.heroUrl,
}));

export const _coursePosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('course'),
  coverUrl: _mock.image.course(index),
  heroUrl: `/assets/images/course/course_post_hero.jpg`,
}));

export const getPosts = (t, locale = 'en') => {
  const posts = [
    {
      id: 'hr-management-system',
      title: t('hr-management-system.title'),
      breadcrumb: t('hr-management-system.breadcrumb'),
      description: '',
      category: 'Marketing',
      favorited: '',
      createdAt: '',
      duration: t('hr-management-system.duration'),
      tags: [t('hr-management-system.tags1')],
      author: {
        name: 'Courtney Henry',
        role: 'Curator of Marketing Course',
        avatarUrl: '',
        quotes: 'Member since Mar 15, 2021',
        about:
          'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem..',
      },
      content: locale === 'jp' ? HR_CONTENT_JP : HR_CONTENT,
      coverUrl: '/assets/images/blogs/HR_COVER.jpg',
      heroUrl: `/assets/images/career/career_post_hero.jpg`,
    },
    {
      id: 'okr-management-application',
      title: t('okr-management-application.title'),
      breadcrumb: t('okr-management-application.breadcrumb'),
      description: '',
      category: 'Marketing',
      favorited: '',
      createdAt: '',
      duration: t('okr-management-application.duration'),
      tags: [t('okr-management-application.tags1')],
      author: {
        name: 'Courtney Henry',
        role: 'Curator of Marketing Course',
        avatarUrl: '',
        quotes: 'Member since Mar 15, 2021',
        about:
          'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem..',
      },
      content: locale === 'jp' ? OKR_CONTENT_JP : OKR_CONTENT,
      coverUrl: '/assets/images/blogs/OKR_COVER.png',
      heroUrl: `/assets/images/career/career_post_hero.jpg`,
    },
    {
      id: 'production-management-application',
      title: t('production-management-application.title'),
      breadcrumb: t('production-management-application.breadcrumb'),
      description: '',
      category: 'Marketing',
      favorited: '',
      createdAt: '',
      duration: t('production-management-application.duration'),
      tags: [t('production-management-application.tags1')],
      author: {
        name: 'Courtney Henry',
        role: 'Curator of Marketing Course',
        avatarUrl: '',
        quotes: 'Member since Mar 15, 2021',
        about:
          'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem..',
      },
      content: locale === 'jp' ? PRODUCTION_MANAGEMENT_CONTENT_JP : PRODUCTION_MANAGEMENT_CONTENT,
      coverUrl: '/assets/images/blogs/PRODUCTION_COVER.png',
      heroUrl: `/assets/images/career/career_post_hero.jpg`,
    },
    {
      id: 'project-management-solution',
      title: t('project-management-solution.title'),
      breadcrumb: t('project-management-solution.breadcrumb'),
      description: '',
      category: 'Marketing',
      favorited: '',
      createdAt: '',
      duration: t('project-management-solution.duration'),
      tags: [t('project-management-solution.tags1')],
      author: {
        name: 'Courtney Henry',
        role: 'Curator of Marketing Course',
        avatarUrl: '',
        quotes: 'Member since Mar 15, 2021',
        about:
          'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem..',
      },
      content: locale === 'jp' ? PROJECT_MANAGEMENT_SOLOTION_CONTENT_JP : PROJECT_MANAGEMENT_SOLOTION_CONTENT,
      coverUrl: '/assets/images/blogs/PROJECT_COVER.png',
      heroUrl: `/assets/images/career/career_post_hero.jpg`,
    },
    {
      id: 'crm-solution',
      title: t('crm-solution.title'),
      breadcrumb: t('crm-solution.breadcrumb'),
      description: '',
      category: 'Marketing',
      favorited: '',
      createdAt: '',
      duration: t('crm-solution.duration'),
      tags: [t('crm-solution.tags1')],
      author: {
        name: 'Courtney Henry',
        role: 'Curator of Marketing Course',
        avatarUrl: '',
        quotes: 'Member since Mar 15, 2021',
        about:
          'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem..',
      },
      content: locale === 'jp' ? CRM_SOLOTION_CONTENT_JP : CRM_SOLOTION_CONTENT,
      coverUrl: '/assets/images/blogs/CRM_COVER.jpg',
      heroUrl: `/assets/images/career/career_post_hero.jpg`,
    },
  ];

  return posts.map((post, index) => ({
    ...post,
    author: {
      ...post.author,
      avatarUrl: _mock.image.avatar(index),
    }
  }))
}
