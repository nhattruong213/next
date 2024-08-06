import StyledMarkdown from './styles';

// ----------------------------------------------------------------------

export default function Markdown({ content, firstLetter = false, sx }) {
  return <StyledMarkdown dangerouslySetInnerHTML={{ __html: content }} sx={sx} />;
}