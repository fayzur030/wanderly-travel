'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { getTokenFromClient } from '@/lib/getTokenFromClient'
import { Destinations } from '@/types/allDestinationType'
import { AlertTriangle, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

interface DeleteDestinationModalProps {
  destination: Destinations
}

export function DeleteDestination({
  destination,
}: DeleteDestinationModalProps) {
  const router = useRouter()

  const handleDelete = async (id: string) => {
    try {
      const jwtToken = await getTokenFromClient()

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/delete-destination/${id}`,
        {
          cache: 'no-cache',
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )

      if (!res.ok) {
        throw new Error('Failed to delete destination')
      }

      toast.success('Destination deleted successfully!')

      router.push('/destinations')
      router.refresh()
    } catch (error) {
      console.error('Error deleting destination:', error)
      toast.error('Failed to delete destination')
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button
            variant='outline'
            size='sm'
            className='gap-2 text-destructive cursor-pointer border-destructive/30 hover:bg-destructive/10'
          >
            Delete
          </Button>
        }
      />
      <AlertDialogContent
        size='default'
        className='w-full max-w-5xl rounded-none border border-gray-100 bg-white p-6 shadow-lg'
      >
        {/* Header Section */}
        <AlertDialogHeader className='flex flex-row items-center gap-4 text-left space-y-0 pb-4'>
          <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500'>
            <AlertTriangle
              className='h-6 w-6 stroke-[1.75]'
              aria-hidden='true'
            />
          </div>
          <AlertDialogTitle className='text-xl font-medium text-gray-900 tracking-tight'>
            Delete Travel Package
          </AlertDialogTitle>
        </AlertDialogHeader>

        {/* Description Section */}
        <AlertDialogDescription className='text-sm text-gray-600 leading-relaxed font-normal pt-1 pb-6'>
          Are you sure you want to delete{' '}
          <span className='font-bold text-gray-900'>Bali Paradise</span>? This
          action cannot be undone and will permanently remove this travel
          package from the system.
        </AlertDialogDescription>

        {/* Footer Section with Actions */}
        <div className='flex flex-row justify-end gap-3 sm:space-x-0'>
          <AlertDialogCancel className='mt-0 border border-gray-200 bg-white px-5 py-6 text-sm font-medium text-gray-600 rounded-none hover:bg-gray-50 hover:text-gray-900 cursor-pointer transition-colors shadow-none'>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleDelete(destination._id)}
            className='bg-[#EF4444] px-5 py-6 text-sm font-medium text-white rounded-none hover:bg-[#DC2626] cursor-pointer flex items-center gap-2 transition-colors shadow-none border-0'
          >
            <Trash2 className='h-4 w-4' aria-hidden='true' />
            Delete Package
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
