import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import { paths } from 'src/routes/paths';
import { fDate } from 'src/utils/format-time';
import { RouterLink } from 'src/routes/components';
import TextMaxLine from 'src/components/text-max-line';

import PostTimeBlock from './common/post-time-block';

// ----------------------------------------------------------------------

export default function HomeLatestPostItem({ post, order, largePost }) {
  const theme = useTheme();
  const id = post?.id;
  return (
    <Stack
      spacing={2}
      sx={{
        ...(largePost && {
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        }),
      }}
    >
      <Image
        src={post.coverUrl}
        alt={post.title}
        ratio={(largePost && '3/4') || (order && '4/3') || '1/1'}
        overlay={
          largePost
            ? `linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${
                theme.palette.common.black
              } 100%)`
            : ''
        }
        sx={{ borderRadius: 2 }}
      />

      <Stack
        spacing={largePost ? 2 : 1}
        sx={{
          ...(largePost && {
            p: 5,
            bottom: 0,
            zIndex: 9,
            position: 'absolute',
            color: 'common.white',
          }),
        }}
      >
        <PostTimeBlock
          createdAt={fDate(post.createdAt)}
          duration={post.duration}
          sx={{
            ...(largePost && {
              opacity: 0.72,
              color: 'inherit',
            }),
          }}
        />

        <Link component={RouterLink} href={{ pathname: paths.post + id }} color="inherit">
          <TextMaxLine variant={largePost ? 'h3' : 'h6'}>{post.title}</TextMaxLine>
        </Link>

        {largePost && <Typography sx={{ opacity: 0.48 }}>{post.description}</Typography>}
      </Stack>
    </Stack>
  );
}

HomeLatestPostItem.propTypes = {
  order: PropTypes.number,
  largePost: PropTypes.bool,
  post: PropTypes.shape({
    title: PropTypes.string,
    coverUrl: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
  }),
};
