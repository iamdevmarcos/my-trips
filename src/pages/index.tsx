import dynamic from 'next/dynamic'

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
    <Map
      places={[
        {
          id: '2',
          name: 'Reykjavik',
          slug: 'reykjavik',
          location: {
            latitude: -3.662902153852959,
            longitude: -38.67868396259939
          }
        }
      ]}
    />
  )
}
