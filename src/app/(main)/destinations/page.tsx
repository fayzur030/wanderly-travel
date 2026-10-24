import AllDestinations from '@/components/destinations/AllDestinations'
import { allDestinationService } from '@/services/AllDestinationService'
import { Suspense } from 'react'

const Destinations = async () => {
  const result = await allDestinationService()
  return (
    <div>
      <Suspense fallback={<p>Loading</p>}>
        <AllDestinations destinations={result} />
      </Suspense>
    </div>
  )
}

export default Destinations
