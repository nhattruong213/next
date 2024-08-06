import PropTypes from 'prop-types';
import { useState, useCallback, useEffect } from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { useTranslations } from 'next-intl';
import MarketingCaseStudyItem from './marketing-case-study-item';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyList({ caseStudies }) {
  const t = useTranslations('case_studies');
  const all = t('all');
  const [tab, setTab] = useState(all);

  const getCategories = caseStudies.map((project) => project.category);

  const categories = [all, ...Array.from(new Set(getCategories))];

  const filtered = applyFilter(caseStudies, tab, all);

  const handleChangeTab = useCallback((event, newValue) => {
    setTab(newValue);
  }, []);

  useEffect(() => {
    setTab(all);
  }, [all])

  return (
    <>
      <Tabs
        value={tab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChangeTab}
      >
        {categories.map((category, i) => (
          <Tab key={category} value={category} label={category} />
        ))}
      </Tabs>

      <Box
        sx={{
          pt: 5,
          pb: 10,
          gap: 4,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {filtered.map((project) => (
          <MarketingCaseStudyItem key={project.id} project={project} />
        ))}
      </Box>

      {/* <Pagination
        count={1}
        color="primary"
        sx={{
          pb: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      /> */}
    </>
  );
}

MarketingCaseStudyList.propTypes = {
  caseStudies: PropTypes.array,
};

// ----------------------------------------------------------------------

function applyFilter(arr, category, all = 'All') {
  if (category !== all) {
    arr = arr.filter((project) => project.category === category);
  }
  return arr;
}
