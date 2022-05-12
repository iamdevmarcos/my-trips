import dynamic from 'next/dynamic'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  // if ('navigator' in window) {
  //   const myLocation = navigator.geolocation.getCurrentPosition((position) =>
  //     console.log(`
  //       LATITUDE: ${position.coords.latitude}
  //       LONGITUDE: ${position.coords.longitude}
  //     `)
  //   )
  //   console.log(myLocation)
  // }

  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map />
    </>
  )
}
