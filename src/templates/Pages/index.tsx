import * as S from './styles'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'

const PageTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta,
        odio in tincidunt faucibus, lectus tortor molestie dui, at interdum diam
        nulla sit amet arcu. Curabitur a sagittis sem. Mauris lacinia arcu et
        nibh iaculis, vitae ornare arcu accumsan. Nunc non risus erat. Nullam
        non diam luctus, interdum nibh vitae, ullamcorper neque. Vivamus non
        ligula ut lorem pharetra finibus eu a tortor. Suspendisse eu porta
        mauris, in imperdiet nunc.
      </p>
    </S.Body>
  </S.Content>
)

export default PageTemplate
