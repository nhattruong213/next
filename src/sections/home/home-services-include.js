import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import SvgColor from 'src/components/svg-color';
import { RouterLink } from 'src/routes/components';
import { useTranslations } from 'next-intl';


export default function HomeServicesInclude() {
  const t = useTranslations('Homepage');

  const SERVICES = [
    {
      title: t('customer_relationship.title'),
      description: t('customer_relationship.description'),
      icon: '/assets/icons/ic_agreement.svg',
      link: 'solutions/customer-relationship-managerment',
    },
    {
      title: t('human_resources.title'),
      description: t('human_resources.description'),
      icon: '/assets/icons/ic_popularity.svg',
      link: 'solutions/human-resource-management',
    },
    {
      title: t('business_intelligence.title'),
      description: t('business_intelligence.description'),
      icon: '/assets/icons/ic_statistics.svg',
      link: 'solutions/business-intelligence',
    },
    {
      title: t('accounting_finance.title'),
      description: t('accounting_finance.description'),
      icon: '/assets/icons/ic_money.svg',
      link: 'solutions/accounting-finance',
    },
    {
      title: t('production_management.title'),
      description: t('production_management.description'),
      icon: '/assets/icons/ic_optimization.svg',
      link: 'solutions/production-management',
    },
    {
      title: t('project_management.title'),
      description: t('project_management.description'),
      icon: '/assets/icons/ic_report.svg',
      link: 'solutions/project-management',
    },
    {
      title: t('performance_management.title'),
      description: t('performance_management.description'),
      icon: '/assets/icons/ic_checklist.svg',
      link: 'solutions/okr-performance-management',
    },
    {
      title: t('inventory_management.title'),
      description: t('inventory_management.description'),
      icon: '/assets/icons/ic_creativity.svg',
      link: 'solutions/inventory-management',
    },
    {
      title: t('robotic.title'),
      description: t('robotic.description'),
      icon: '/assets/icons/ic_file.svg',
      link: 'solutions/robotic-process-automation',
    },
  ];

  return (
    <Container
      id="solutions"
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2">{t('our_solutions')}</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 629,
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      >
        {t('solutions_description')}
      </Typography>

      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {SERVICES.map((value) => (
          <Link
            href={value.link}
            key={value.title}
            color="inherit"
            underline="none"
            sx={{
              backgroundColor: '#ffffff',
              p: 2,
              borderRadius: 1.5,
              cursor: 'pointer',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
              '&:hover': {
                backgroundColor: '#f0f0f0',
                transform: 'scale(1.05)',
              },
            }}
          >
            <SvgColor
              src={value.icon}
              color="info"
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                bgcolor: 'primary.main',
              }}
            />
            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              <Typography variant="h5" color="inherit">
                {value.title}
              </Typography>
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>{value.description}</Typography>
          </Link>
        ))}
      </Box>
    </Container>
  );
}
