import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import { _faqs } from 'src/_mock';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { useResponsive } from 'src/hooks/use-responsive';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

export default function HomeFaqs() {
  const mdUp = useResponsive('up', 'md');
  const t = useTranslations('Homepage.question');
  const [expanded, setExpanded] = useState(false);

  const handleChangeExpanded = useCallback(
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  const CONTENTS = [
    {
      question: t('question1.quest'),
      answer: t('question1.answer'),
    },
    {
      question: t('question2.quest'),
      answer: t('question2.answer'),
    },
    {
      question: t('question3.quest'),
      answer: t('question3.answer'),
    },
    {
      question: t('question4.quest'),
      answer: t('question4.answer'),
    },
    {
      question: t('question5.quest'),
      answer: t('question5.answer'),
    },
  ];

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={2} sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="overline" color="text.disabled">
              FAQS
            </Typography>

            <Typography variant="h2">{t('title')}</Typography>
          </Stack>

          {CONTENTS.map((faq, i) => (
            <Accordion
              key={i}
              expanded={expanded === faq.question}
              onChange={handleChangeExpanded(faq.question)}
            >
              <AccordionSummary
                sx={{
                  minHeight: 64,
                  [`& .${accordionSummaryClasses.content}`]: {
                    p: 0,
                    m: 0,
                  },
                  [`&.${accordionSummaryClasses.expanded}`]: {
                    bgcolor: 'action.selected',
                  },
                }}
              >
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  {faq.question}
                </Typography>

                <Iconify
                  width={24}
                  icon={expanded === faq.question ? 'carbon:subtract' : 'carbon:add'}
                />
              </AccordionSummary>

              <AccordionDetails>{faq.answer}</AccordionDetails>
            </Accordion>
          ))}
        </Grid>

        {mdUp && (
          <Grid xs={12} md={6} lg={5}>
            <Image alt="faqs" src="/assets/illustrations/illustration_faqs.svg" />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
