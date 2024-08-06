import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import AboutUsTeamItem from './about-us-team-item';

// ----------------------------------------------------------------------

export default function AboutUsTeamAbout({ members }) {
  const t = useTranslations('about_us.team_about');
  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        {t('title')}
      </Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
          color: 'text.secondary',
        }}
      >
        {t('description')}
      </Typography>

      <Box
        sx={{
          columnGap: 3,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {members.map((member) => (
          <AboutUsTeamItem key={member.id} member={member} />
        ))}
      </Box>
    </Container>
  );
}

AboutUsTeamAbout.propTypes = {
  members: PropTypes.array,
};
