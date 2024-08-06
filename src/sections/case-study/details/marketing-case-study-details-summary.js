import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

import { _socials } from 'src/_mock';
import Iconify from 'src/components/iconify';

import { useLocale, useTranslations } from 'next-intl';
import { dayjs, setDayjsLocale } from 'src/services/day';
import MarketingCaseStudyDetailsGallery from './marketing-case-study-details-gallery';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyDetailsSummary({ caseStudy }) {
  const { title, description, category, website, createdAt, technologies } = caseStudy;
  const t = useTranslations('case_detail');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  setDayjsLocale(locale === 'jp' ? 'ja' : locale);
  const handleShare = (social) => {
    let shareUrl = '';
    const articleUrl = window.location.href;

    if (social.value === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`;
    } else if (social.value === 'linkedin') {
      shareUrl = `https://www.linkedin.com/shareArticle?url=${articleUrl}`;
    }

    window.open(shareUrl, '_blank');
  };

  return (
    <Stack spacing={3} sx={{ p: 5, borderRadius: 2, bgcolor: 'background.neutral' }}>
      <Stack spacing={2}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          {t('customer')}
        </Typography>

        <Typography variant="h6">{title}</Typography>

        <Typography variant="body2">{description}</Typography>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          {t('website')}
        </Typography>

        <Link variant="body2" color="inherit">
          {website}
        </Link>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack spacing={1}>
        <Typography variant="overline" sx={{ color: 'text.disabled', pt: 1 }}>
          {t('technologies')}
        </Typography>
        <Typography variant="body2">{t('frontend')}: {technologies?.frontend}</Typography>
        <Typography variant="body2">{t('backend')}: {technologies?.backend}</Typography>
        <Typography variant="body2">{t('database')}: {technologies?.database}</Typography>

        <Typography variant="overline" sx={{ color: 'text.disabled', pt: 1 }}>
          {t('category')}
        </Typography>

        <Typography variant="body2" sx={{ pb: 1 }}>
          {category}
        </Typography>

        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          {t('date')}
        </Typography>

        <Typography variant="body2">{dayjs(createdAt).format('LL')}</Typography>
      </Stack>

      {caseStudy?.galleryImgs && (
        <MarketingCaseStudyDetailsGallery images={caseStudy?.galleryImgs} />
      )}

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack direction="row" alignItems="center" spacing={0.5}>
        <Typography variant="subtitle2">{tCommon('share')}:</Typography>

        <Stack direction="row">
          {_socials.map((social) => (
            <IconButton
              key={social.value}
              onClick={(event) => {
                handleShare(social);
              }}
            >
              <Iconify icon={social.icon} sx={{ color: social.color }} />
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

MarketingCaseStudyDetailsSummary.propTypes = {
  caseStudy: PropTypes.shape({
    title: PropTypes.string,
    website: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
  }),
};
