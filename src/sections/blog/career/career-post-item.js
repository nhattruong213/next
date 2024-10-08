import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import Image from 'src/components/image';
import { fDate } from 'src/utils/format-time';
import { RouterLink } from 'src/routes/components';

import PostTimeBlock from '../common/post-time-block';

// ----------------------------------------------------------------------

export default function CareerPostItem({ post, index }) {
  const noImage = index === 1 || index === 4;

  const smallImage = index === 2 || index === 7;

  return (
    <Stack
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Link component={RouterLink} href={paths.post + post.id} color="inherit" underline="none">
        {!noImage && (
          <Image src={post.coverUrl} alt={post.title} ratio={smallImage ? '4/3' : '1/1'} />
        )}

        <Stack
          spacing={1}
          sx={{
            p: 3,
            bgcolor: 'background.neutral',
            ...(noImage && {
              bgcolor: 'primary.lighter',
            }),
          }}
        >
          <PostTimeBlock
            createdAt={fDate(post.createdAt)}
            duration={post.duration}
            sx={{
              ...(noImage && { color: 'grey.500' }),
            }}
          />

          <Link
            color="inherit"
            variant="h5"
            sx={{
              ...(noImage && {
                color: 'grey.800',
              }),
            }}
          >
            {post.title}
          </Link>

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              ...(noImage && {
                color: 'grey.600',
              }),
            }}
          >
            {post.description}
          </Typography>
        </Stack>
      </Link>
    </Stack>
  );
}

CareerPostItem.propTypes = {
  index: PropTypes.number,
  post: PropTypes.shape({
    title: PropTypes.string,
    coverUrl: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.shape({
      avatarUrl: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
};
