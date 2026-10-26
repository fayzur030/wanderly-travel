import DestinationDetails from '@/components/destinations/DestinationDetails'
import { getDestinationById } from '@/services/getDestinationById'

interface DetailsProps {
  params: Promise<{
    id: string
  }>
}

const DestinationDetailsPage = async ({ params }: DetailsProps) => {
  const { id } = await params
  const detailsdestination = await getDestinationById(id)
  return (
    <>
      <DestinationDetails destination={detailsdestination} />
    </>
  )
}

export default DestinationDetailsPage
