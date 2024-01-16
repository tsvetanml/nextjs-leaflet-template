import dynamic from 'next/dynamic'
import { useMemo } from 'react'

export default function Home() {
  const Map = useMemo(() => dynamic(
    () => import('./src/components/Map'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  return (
    <main>
      <Map />
    </main>
  )
}
