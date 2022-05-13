import client from 'graphql/client'
import { GET_PAGES } from 'graphql/querys'

import AboutTemplate from 'templates/About'

export default function AboutPage() {
  return <AboutTemplate />
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)

  console.log(pages)

  return {
    props: {}
  }
}

// getStaticPaths => serve para gerar as urls em build time: /about
// getStaticProps => serve para buscar dados da pagina (props) - build time
// getServerSideProps => serve para buscar dados da pagina (props) - runtime
// getInitialProps => serve para buscar dados da pagina (props) - runtime
