import PropTypes from 'prop-types';

import Rating from '@mui/material/Rating';
import { Stack, Grid, Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function HomeTestimonialItem({ testimonial, sx, ...other }) {
  return (
    <Stack
      spacing={1}
      sx={{
        p: 3,
        borderRadius: 2,
        minHeight: 200,
        bgcolor: 'background.neutral',
        ...sx,
      }}
      {...other}
    >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt={testimonial.name}
              src={testimonial.avatarUrl}
              sx={{ width: 56, height: 56, marginRight: '8px' }}
            />
            <div>
              <Typography variant="subtitle2">{testimonial.name}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {testimonial.role}
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{ textAlign: 'end' }}>
            <Typography variant="h4" gutterBottom>
              <Rating size="small" value={testimonial.ratingNumber} readOnly />
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {testimonial.review}
      </Typography>
    </Stack>
  );
}

HomeTestimonialItem.propTypes = {
  sx: PropTypes.object,
  testimonial: PropTypes.shape({
    name: PropTypes.string,
    review: PropTypes.string,
    ratingNumber: PropTypes.number,
    createdAt: PropTypes.string,
  }),
};
