import { _mock } from './_mock';
import images from '../../public/assets/logo/slide';
import imageAboutUs from '../../public/assets/images/aboutUs/activities';
// ----------------------------------------------------------------------

export const _categories = [
  {
    label: 'Customer Relationship Management',
    path: '/solutions/customer-relationship-managerment',
  },
  { label: 'Human Resources Management', path: '/solutions/human-resource-management' },
  { label: 'Business Intelligence', path: '/solutions/business-intelligence' },
  { label: 'Accounting and Finance', path: '/solutions/accounting-finance' },
  { label: 'Production Management', path: '/solutions/production-management' },
  { label: 'Project Management', path: '/solutions/project-management' },
  { label: 'OKR and Performance Management', path: '/solutions/okr-performance-management' },
  { label: 'Inventory Management', path: '/solutions/inventory-management' },
  { label: 'Robotic Process Automation', path: '/solutions/robotic-process-automation' },
];

// ----------------------------------------------------------------------
export const _testimonialsData = [
  {
    id: 1,
    name: 'Le Truong Ky',
    role: 'CEO/DINCO E&C',
    avatarUrl: '/assets/images/avatar/customer/le-truong-ky.jpg',
    createdAt: '',
    ratingNumber: 5,
    review:
      'The personalized Project Management software significantly enhanced our efficiency, ensuring that we remained within budget and met our schedule.',
  },
  {
    id: 2,
    name: 'Dang Tien Duc',
    role: 'CEO/DUFAGO',
    avatarUrl: '/assets/images/avatar/customer/dang-duc-tien.jpg',
    createdAt: '',
    ratingNumber: 5,
    review:
      'Their tools for managing production optimize organization, tracking, and process improvement, guaranteeing exceptional performance standards.',
  },
  {
    id: 3,
    name: 'Khoa Phan',
    role: 'CEO/RUOUNGON',
    avatarUrl: '/assets/images/avatar/customer/khoa-phan.jpg',
    createdAt: '',
    ratingNumber: 5,
    review:
      'The integration of OKR software dismantled barriers to our goals, maintaining our focus and driving efficiency.',
  },
];

export const _testimonials = [...Array(3)].map((_, index) => ({
  id: _testimonialsData[index]?.id,
  name: _testimonialsData[index]?.name,
  role: _testimonialsData[index]?.role,
  avatarUrl: _testimonialsData[index]?.avatarUrl,
  createdAt: _testimonialsData[index]?.createdAt,
  ratingNumber: _testimonialsData[index]?.ratingNumber,
  review: _testimonialsData[index]?.review,
}));

export const getTestimonials = (t) => [
    {
      id: 1,
      name: 'Le Truong Ky',
      role: 'CEO/DINCO E&C',
      avatarUrl: '/assets/images/avatar/customer/le-truong-ky.jpg',
      createdAt: '',
      ratingNumber: 5,
      review: t('letruongky'),
    },
    {
      id: 2,
      name: 'Dang Tien Duc',
      role: 'CEO/DUFAGO',
      avatarUrl: '/assets/images/avatar/customer/dang-duc-tien.jpg',
      createdAt: '',
      ratingNumber: 5,
      review: t('dangtienduc'),
    },
    {
      id: 3,
      name: 'Khoa Phan',
      role: 'CEO/RUOUNGON',
      avatarUrl: '/assets/images/avatar/customer/khoa-phan.jpg',
      createdAt: '',
      ratingNumber: 5,
      review: t('khoaphan'),
    },
  ]

export const _testimonialsOnly = [...Array(1)].map((_, index) => ({
  id: _testimonialsData[index]?.id,
  name: _testimonialsData[index]?.name,
  role: _testimonialsData[index]?.role,
  avatarUrl: _testimonialsData[index]?.avatarUrl,
  createdAt: _testimonialsData[index]?.createdAt,
  ratingNumber: _testimonialsData[index]?.ratingNumber,
  review: _testimonialsData[index]?.review,
}));

// ----------------------------------------------------------------------

export const _socials = [
  {
    value: 'facebook',
    label: 'FaceBook',
    icon: 'carbon:logo-facebook',
    color: '#1877F2',
    link: 'https://www.facebook.com/odinbi/',
  },
  // {
  //   value: 'linkedin',
  //   label: 'Linkedin',
  //   icon: 'carbon:logo-linkedin',
  //   color: '#007EBB',
  //   link: 'https://www.linkedin.com/company/odinbi',
  // },
  // {
  //   value: 'instagram',
  //   label: 'Instagram',
  //   icon: 'carbon:logo-instagram',
  //   color: '#E02D69',
  // },

  // {
  //   value: 'twitter',
  //   label: 'Twitter',
  //   icon: 'carbon:logo-twitter',
  //   color: '#00AAEC',
  // },
];

// ----------------------------------------------------------------------

const LAT_LONG = [
  [33, 65],
  [-12.5, 18.5],
  [20.96, 26.27],
];

export const _offices = ['Jordan', 'Canada', 'Portugal'].map((office, index) => ({
  id: _mock.id(index),
  country: office,
  address: _mock.fullAddress(index),
  phoneNumber: _mock.phoneNumber(index),
  email: _mock.email(index),
  photo: _mock.image.travel(index + 4),
  latlng: LAT_LONG[index],
}));

// ----------------------------------------------------------------------

const BRANDS_NAME = [
  'dinco',
  'quocTien',
  'dufago',
  'ngocThy',
  'huyTan',
  'thieuYen',
  'ruouNgon',
  'thienSon',
  'hungVuong',
  'codezone',
];

const BRANDS_LINK = [
  'https://dinco.com.vn/',
  'https://quoctien.vn/',
  'https://dufago.com.vn/',
  'https://ngocthyauto.bonbanh.com/',
  '#our-clients',
  '#our-clients',
  'https://ruoungon.vn/',
  'http://betongthienson.vn/',
  'https://hondahungvuong.com/',
  'https://codezone.vn/',
];

const ACTIVITIES_IMG = ['image1', 'image3', 'image4', 'image5', 'image6', 'image7'];

export const _brands = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: images[brand],
  link: BRANDS_LINK[index],
}));

export const _activities = ACTIVITIES_IMG.map((image, index) => ({
  id: index,
  name: image,
  image: imageAboutUs[image],
}));

const BRANDS_NAME_TWO = [
  'dufago',
  'codezone',
  'huyTan',
  'thienSon',
  'ngocThy',
  'ruouNgon',
  'hungVuong',
  'thieuYen',
  'dinco',
  'quocTien',
];

export const _brandsTwo = BRANDS_NAME_TWO.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: images[brand],
}));

export const _brandsColor = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: images[brand],
}));

// ----------------------------------------------------------------------

export const _faqs = [
  'How do we initiate the software development project process?',
  'On what platform does the project operate?.',
  "What is the project's payment process like?",
  "How is the project's security and privacy ensured?",
  "What's the average project completion timeframe?",
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer:
    'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
}));

export const _faqsSupport = [
  `[Covid] Seasonal Shopping Guide`,
  'I Want To Check Where My Order Is Delivered',
  '[Shipping Information] How To Contact The Shipping Unit/Look Up Shipping Information/Delivery Exchange?',
  '[Seller] Start Selling With Shopee',
  'Why Is My Account Locked/Limited?',
  'Free Shipping Code User Guide (Freeship Code)',
  'How To Buy / Order On Shopee App',
  `Why I Didn't Receive the Verification Code (OTP)?`,
  `Frequently Asked Questions About Product Reviews / Comments`,
  `How to Login Shopee Account When Forgot/Lost Password`,
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer:
    'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
}));
