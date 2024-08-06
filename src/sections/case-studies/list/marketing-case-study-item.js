import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyItem({ project }) {
  const { title, heroUrl, coverUrl, category, id, breadcrumbs } = project;

  return (
    <div>
      <Link
        component={RouterLink}
        href={{ pathname: paths.caseStudy + id }}
        color="inherit"
        underline="none"
      >
        <Image src={heroUrl} alt={title} ratio="6/4" sx={{ borderRadius: 2 }} />

        <Stack spacing={1} sx={{ pt: 2.5, px: 2.5 }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            {title}
          </Typography>
          <Link color="inherit">
            <TextMaxLine variant="h5" line={1}>
              {breadcrumbs}
            </TextMaxLine>
          </Link>
        </Stack>
      </Link>
    </div>
  );
}

MarketingCaseStudyItem.propTypes = {
  project: PropTypes.shape({
    category: PropTypes.string,
    coverUrl: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string,
  }),
};
