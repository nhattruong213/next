import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const TEACHERS = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  role: _mock.role(index),
  name: _mock.fullName(index),
  avatarUrl: _mock.image.avatar(index),
  totalCourses: 48,
  totalReviews: 3458,
  totalStudents: 18000,
  ratingNumber: _mock.number.rating(index),
}));

const LESSONS = [...Array(9)].map((_, index) => ({
  id: _mock.id(index),
  duration: 60 - index,
  title: `Lesson ${index + 1}`,
  videoPath: _mock.video(index),
  description: _mock.sentence(index),
  unLocked: [0, 1, 2].includes(index),
}));

export const _courses = [...Array(12)].map((_, index) => {
  const languages = ['Russian', 'Spanish', 'English'];

  const skills = _tags.slice(0, 5);

  const level =
    (index % 2 && 'Intermediate') ||
    (index % 4 && 'Expert') ||
    (index % 5 && 'All Levels') ||
    'Beginner';

  const learnList = [
    'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
    'Vulputate placerat amet pulvinar lorem nisl.',
    'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
    'Etiam duis lobortis in fames ultrices commodo nibh.',
    'Fusce neque. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.',
    'Curabitur a felis in nunc fringilla tristique. Praesent congue erat at massa.',
  ];

  return {
    id: _mock.id(index),
    level,
    skills,
    languages,
    learnList,
    resources: 12,
    totalHours: 100,
    lessons: LESSONS,
    totalQuizzes: 100,
    totalReviews: 3458,
    teachers: TEACHERS,
    totalStudents: 180000,
    createdAt: new Date(),
    category: _tags[index],
    slug: _mock.courseTitle(index),
    bestSeller: index === 2 || false,
    coverUrl: _mock.image.course(index),
    ratingNumber: _mock.number.rating(index),
    description: _mock.description(index),
    price: (index % 2 && 159.99) || 269.99,
    priceSale: (index === 2 && 89.99) || (index === 5 && 69.99) || 0,
    shareLinks: {
      facebook: `facebook/user-name`,
      instagram: `instagram/user-name`,
      linkedin: `linkedin/user-name`,
      twitter: `twitter/user-name`,
    },
  };
});

const _coursesByCategorDATA = [
  {
    id: 1,
    name: 'Enhanced Accuracy',
    totalStudents:
      'Reduce the likelihood of human errors in data entry and calculations, resulting in more accurate financial records and reports',
  },
  {
    id: 2,
    name: 'Time and Cost Savings',
    totalStudents:
      'Efficient resource allocation, reduced waste, and improved ROI are outcomes of data-driven cost analysis',
  },
  {
    id: 3,
    name: 'Enhanced Competitiveness',
    totalStudents:
      'Ensure compliance with financial regulations and reporting standards, reducing the risk of financial penalties and legal issues',
  },
  {
    id: 4,
    name: 'Customer Insights',
    totalStudents:
      'BI aids in understanding customer behavior, enhancing marketing strategies and customer satisfaction.',
  },
  {
    id: 5,
    name: 'Risk Mitigation',
    totalStudents:
      'Identifying and addressing potential risks promptly reduces business vulnerabilities and enhances resilience.',
  },
  {
    id: 6,
    name: 'Operational Efficiency',
    totalStudents:
      'Streamlining processes and optimizing workflows through BI leads to increased productivity and profitability.',
  },
];

export const _coursesByCategories = [...Array(6)].map((_, index) => ({
  id: _coursesByCategorDATA[index]?.id,
  name: _coursesByCategorDATA[index]?.name,
  totalStudents: _coursesByCategorDATA[index]?.totalStudents,
}));

export const getCoursesByCategories = (t) => [
    {
      id: 1,
      name: t('enhanced_accuracy.name'),
      totalStudents: t('enhanced_accuracy.totalStudents'),
    },
    {
      id: 2,
      name: t('time_cost_savings.name'),
      totalStudents: t('time_cost_savings.totalStudents'),
    },
    {
      id: 3,
      name: t('enhanced_competitiveness.name'),
      totalStudents: t('enhanced_competitiveness.totalStudents'),
    },
    {
      id: 4,
      name: t('customer_insights.name'),
      totalStudents: t('customer_insights.totalStudents'),
    },
    {
      id: 5,
      name: t('risk_mitigation.name'),
      totalStudents: t('risk_mitigation.totalStudents'),
    },
    {
      id: 6,
      name: t('operational_efficiency.name'),
      totalStudents: t('operational_efficiency.totalStudents'),
    },
  ];

const _projectByCategoryData = [
  {
    id: 1,
    name: 'Improved Communication',
    totalStudents:
      'These solutions foster clear and efficient communication among team members, reducing misunderstandings and delays',
  },
  {
    id: 2,
    name: 'Enhanced Accountability',
    totalStudents:
      'By assigning issues to specific individuals or teams, responsibility is clearly defined, making it easier to track progress',
  },
  {
    id: 3,
    name: 'Reduced Delays',
    totalStudents:
      'Quick issue resolution minimizes project delays, which can save both time and money.',
  },
  {
    id: 4,
    name: 'Quality Assurance',
    totalStudents: 'Consistently addressing issues maintains high construction quality standards',
  },
  {
    id: 5,
    name: 'Risk Mitigation',
    totalStudents:
      'Effective issue management helps control risks by preventing issues from escalating into major problems',
  },
  {
    id: 6,
    name: 'Data-Driven Decision-Making',
    totalStudents:
      'Access to issue data and analytics allows for informed decision-making, helping to continuously improve project management processes',
  },
];

export const _projectByCategories = [...Array(6)].map((_, index) => ({
  id: _projectByCategoryData[index]?.id,
  name: _projectByCategoryData[index]?.name,
  totalStudents: _projectByCategoryData[index]?.totalStudents,
}));

export const getProjectByCategories = (t) => [
    {
      id: 1,
      name: t('improved_communication.name'),
      totalStudents: t('improved_communication.totalStudents'),
    },
    {
      id: 2,
      name: t('enhanced_accountability.name'),
      totalStudents: t('enhanced_accountability.totalStudents'),
    },
    {
      id: 3,
      name: t('reduced_delays.name'),
      totalStudents: t('reduced_delays.totalStudents'),
    },
    {
      id: 4,
      name: t('quality_assurance.name'),
      totalStudents: t('quality_assurance.totalStudents'),
    },
    {
      id: 5,
      name: t('risk_mitigation.name'),
      totalStudents: t('risk_mitigation.totalStudents'),
    },
    {
      name: t('data_driven_decision_making.name'),
      totalStudents: t('data_driven_decision_making.totalStudents'),
    }
  ]

const _okrByCategoryData = [
  {
    id: 1,
    name: 'Improved Goal Achievement',
    totalStudents: `Clear objectives and measurable key results drive employees' focus and efforts towards the most critical tasks`,
  },
  {
    id: 2,
    name: 'Enhanced Productivity',
    totalStudents:
      'Help in identifying and addressing roadblocks promptly, optimizing productivity across the organization',
  },
  {
    id: 3,
    name: 'Increased Employee Engagement',
    totalStudents:
      'The transparency and ownership foster a culture of high engagement and commitment',
  },
  {
    id: 4,
    name: 'Better Informed Decision-Making',
    totalStudents: 'Provide data-driven insights and immediate performance feedback',
  },
];

export const _okryCategories = [...Array(4)].map((_, index) => ({
  id: _okrByCategoryData[index]?.id,
  name: _okrByCategoryData[index]?.name,
  totalStudents: _okrByCategoryData[index]?.totalStudents,
}));

export const getOkryCategories = (t) => [
    {
      id: 1,
      name: t('improved_goal_achievement.name'),
      totalStudents: t('improved_goal_achievement.totalStudents'),
    },
    {
      id: 2,
      name: t('enhanced_productivity.name'),
      totalStudents: t('enhanced_productivity.totalStudents'),
    },
    {
      id: 3,
      name: t('increased_employee_engagement.name'),
      totalStudents: t('increased_employee_engagement.totalStudents'),
    },
    {
      id: 4,
      name: t('better_informed_decision_making.name'),
      totalStudents: t('better_informed_decision_making.totalStudents'),
    },
  ];

export const getRoboticByCategories = (t) => [
    {
      id: 1,
      name: t('cost_reduction.title'),
      totalStudents: t('cost_reduction.description'),
    },
    {
      id: 2,
      name: t('scalability.title'),
      totalStudents: t('scalability.description'),
    },
    {
      id: 3,
      name: t('error_reduction.title'),
      totalStudents: t('error_reduction.description'),
    },
    {
      id: 4,
      name: t('customer_satisfaction.title'),
      totalStudents: t('customer_satisfaction.description'),
    },
    {
      id: 5,
      name: t('enhanced_productivity.title'),
      totalStudents: t('enhanced_productivity.description'),
    },
    {
      id: 6,
      name: t('realtime_insights.title'),
      totalStudents: t('realtime_insights.description'),
    },
  ];
