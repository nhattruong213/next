import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------
export const navLinks = [
  {
    order: '1',
    subheader: 'Solution',
    cover: '/assets/images/menu/menu_marketing.jpg',

    items: [
      {
        title: 'Customer Relationship Management',
        icon: '/assets/icons/ic_agreement.svg',
        path: '/solutions/customer-relationship-managerment',
      },
      {
        title: 'Human Resources Management',
        icon: '/assets/icons/ic_popularity.svg',
        path: '/solutions/human-resource-management',
      },
      {
        title: 'Business Intelligence',
        icon: '/assets/icons/ic_statistics.svg',
        path: '/solutions/business-intelligence',
      },
      {
        title: 'Accounting and Finance',
        icon: '/assets/icons/ic_money.svg',
        path: '/solutions/accounting-finance',
      },
      {
        title: 'Production Management',
        icon: '/assets/icons/ic_optimization.svg',
        path: '/solutions/production-management',
      },
      {
        title: 'Project Management',
        icon: '/assets/icons/ic_report.svg',
        path: '/solutions/project-management',
      },
      {
        title: 'OKR and Performance Management',
        icon: '/assets/icons/ic_checklist.svg',
        path: '/solutions/okr-performance-management',
      },
      {
        title: 'Inventory Management',
        icon: '/assets/icons/ic_creativity.svg',
        path: '/solutions/inventory-management',
      },
      {
        title: 'Robotic Process Automation',
        icon: '/assets/icons/ic_file.svg',
        path: '/solutions/robotic-process-automation',
      },
    ],
  },
];

export const getLinks = (t) => [
    {
      order: '1',
      subheader: 'Solution',
      cover: '/assets/images/menu/menu_marketing.jpg',
      items: [
        {
          title: t('links_solutions.customer_relationship_management'),
          icon: '/assets/icons/ic_agreement.svg',
          path: '/solutions/customer-relationship-managerment',
        },
        {
          title: t('links_solutions.human_resources_management'),
          icon: '/assets/icons/ic_popularity.svg',
          path: '/solutions/human-resource-management',
        },
        {
          title: t('links_solutions.business_intelligence'),
          icon: '/assets/icons/ic_statistics.svg',
          path: '/solutions/business-intelligence',
        },
        {
          title: t('links_solutions.accounting_and_finance'),
          icon: '/assets/icons/ic_money.svg',
          path: '/solutions/accounting-finance',
        },
        {
          title: t('links_solutions.production_management'),
          icon: '/assets/icons/ic_optimization.svg',
          path: '/solutions/production-management',
        },
        {
          title: t('links_solutions.project_management'),
          icon: '/assets/icons/ic_report.svg',
          path: '/solutions/project-management',
        },
        {
          title: t('links_solutions.okr_and_performance_management'),
          icon: '/assets/icons/ic_checklist.svg',
          path: '/solutions/okr-performance-management',
        },
        {
          title: t('links_solutions.inventory_management'),
          icon: '/assets/icons/ic_creativity.svg',
          path: '/solutions/inventory-management',
        },
        {
          title: t('links_solutions.robotic_process_automation'),
          icon: '/assets/icons/ic_file.svg',
          path: '/solutions/robotic-process-automation',
        },
      ],
    },
  ]

export const pageLinks = [
  {
    order: '1',
    subheader: 'Marketing',
    cover: '/assets/images/menu/menu_marketing.jpg',
    items: [{ title: 'Customer Relationship Managerment', path: paths.marketing.root }],
  },
  {
    order: '6',
    subheader: 'Travel',
    cover: '/assets/images/menu/menu_travel.jpg',
    items: [
      { title: 'Landing', path: paths.travel.root },
      { title: 'Tours', path: paths.travel.tours },
      { title: 'Tour', path: paths.travel.tour },
      { title: 'Checkout', path: paths.travel.checkout },
      { title: 'Order Completed', path: paths.travel.orderCompleted },
      { title: 'Blog Posts', path: paths.travel.posts },
      { title: 'Blog Post', path: paths.travel.post },
      { title: 'About', path: paths.travel.about },
      { title: 'Contact', path: paths.travel.contact },
    ],
  },
  {
    order: '2',
    subheader: 'Career',
    cover: '/assets/images/menu/menu_career.jpg',
    items: [
      { title: 'Landing', path: paths.career.root },
      { title: 'Jobs', path: paths.career.jobs },
      { title: 'Job', path: paths.career.job },
      { title: 'Blog Posts', path: paths.career.posts },
      { title: 'Blog Post', path: paths.career.post },
      { title: 'About', path: paths.career.about },
      { title: 'Contact', path: paths.career.contact },
    ],
  },
  {
    order: '5',
    subheader: 'E-learning',
    cover: '/assets/images/menu/menu_elearning.jpg',
    items: [
      { title: 'Landing', path: paths.eLearning.root },
      { title: 'Courses', path: paths.eLearning.courses },
      { title: 'Course', path: paths.eLearning.course },
      { title: 'Blog Posts', path: paths.eLearning.posts },
      { title: 'Blog Post', path: paths.eLearning.post },
      { title: 'About', path: paths.eLearning.about },
      { title: 'Contact', path: paths.eLearning.contact },
    ],
  },
  {
    isNew: true,
    order: '3',
    subheader: 'E-commerce',
    cover: '/assets/images/menu/menu_ecommerce.jpg',
    items: [
      { title: 'Landing', path: paths.eCommerce.root },
      { title: 'Products', path: paths.eCommerce.products },
      { title: 'Product', path: paths.eCommerce.product },
      { title: 'Cart', path: paths.eCommerce.cart },
      { title: 'Checkout', path: paths.eCommerce.checkout },
      { title: 'Order Completed', path: paths.eCommerce.orderCompleted },
      { title: 'Wishlist', path: paths.eCommerce.wishlist },
      { title: 'Compare', path: paths.eCommerce.compare },
      { title: 'Account Personal', path: paths.eCommerce.account.personal },
      { title: 'Account Wishlist', path: paths.eCommerce.account.wishlist },
      { title: 'Account Vouchers', path: paths.eCommerce.account.vouchers },
      { title: 'Account Orders', path: paths.eCommerce.account.orders },
      { title: 'Account Payment', path: paths.eCommerce.account.payment },
    ],
  },
  {
    order: '4',
    subheader: 'Common',
    items: [
      { title: 'Login Cover', path: paths.loginCover },
      { title: 'Login Illustration', path: paths.loginIllustration },
      { title: 'Login Background', path: paths.loginBackground },
      { title: 'Register Cover', path: paths.registerCover },
      { title: 'Register Illustration', path: paths.registerIllustration },
      { title: 'Register Background', path: paths.registerBackground },
      { title: 'Forgot Password', path: paths.forgotPassword },
      { title: 'Verify Code', path: paths.verify },
      { title: '404 Error', path: paths.page404 },
      { title: '500 Error', path: paths.page500 },
      { title: 'Maintenance', path: paths.maintenance },
      { title: 'ComingSoon', path: paths.comingsoon },
      { title: 'Pricing 01', path: paths.pricing01 },
      { title: 'Pricing 02', path: paths.pricing02 },
      { title: 'Payment', path: paths.payment },
      { title: 'Support', path: paths.support },
    ],
  },
];

export const navConfig = [
  { title: 'Home', path: '/' },
  {
    title: 'Solutions',
    path: '#solutions',
    children: [navLinks[0]],
  },
  { title: 'Insights', path: paths.posts },
  { title: 'Case Studies', path: paths.caseStudies },
  { title: 'About Us', path: paths.aboutUs },
];

export const getNavConfig = (t) => {
  const links = getLinks(t);

  return [
    { title: t('home'), path: '/' },
    {
      title: t('solutions'),
      path: '#solutions',
      children: [links[0]],
    },
    { title: t('insights'), path: paths.posts },
    { title: t('case_studies'), path: paths.caseStudies },
    { title: t('about_us'), path: paths.aboutUs },
  ]
}
