import type { NextPage } from 'next'
import ImageBanner from '../components/ImageBanner'
import IntroTitle from '../components/IntroTitle'
import Layout from '../components/Layout'
import Title from '../components/Title'
import Section from '../components/Section'

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <IntroTitle />
        <ImageBanner imageUrl="/rocket-launch.png">
          <Title title="Explore the Universe" />
        </ImageBanner>
        <Section>
          <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </Section>
        <ImageBanner imageUrl="/tunnel.png">
          <Title title="We make it possible" />
        </ImageBanner>
        <Section colored>
          <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </Section>
      </Layout>
    </div>
  )
}

export default Home
