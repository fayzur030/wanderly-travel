import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Field, FieldGroup } from '../ui/field'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Save } from 'lucide-react'
import { Destinations } from '@/types/allDestinationType'
interface EditDestinationModalProps {
  destination: Destinations
}

const CATEGORIES = [
  'Beach',
  'Mountain',
  'Adventure',
  'City',
  'Historical',
  'Nature',
]

const EditDestinationModal = ({ destination }: EditDestinationModalProps) => {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant='outline'>Edit</Button>} />

      <DialogContent className='max-h-[90vh] overflow-y-auto sm:max-w-xl'>
        <form>
          <DialogHeader>
            <DialogTitle>Edit Destination</DialogTitle>
            <DialogDescription>
              Update your travel destination details below.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className='mt-5 gap-4'>
            <Field>
              <Label htmlFor='destinationName'>Destination Name</Label>
              <Input
                defaultValue={destination.destinationName}
                id='destinationName'
                name='destinationName'
                placeholder='e.g. Bali Paradise'
                required
              />
            </Field>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
              <Field>
                <Label htmlFor='country'>Country</Label>
                <Input
                  defaultValue={destination.country}
                  id='country'
                  name='country'
                  placeholder='e.g. Indonesia'
                  required
                />
              </Field>

              <Field>
                <Label htmlFor='category'>Category</Label>
                <Select
                  name='category'
                  required
                  defaultValue={destination.category}
                >
                  <SelectTrigger id='category' className='w-full'>
                    <SelectValue placeholder='Select category' />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </div>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
              <Field>
                <Label htmlFor='price'>Price (USD)</Label>
                <Input
                  defaultValue={destination.price}
                  id='price'
                  name='price'
                  type='number'
                  min='0'
                  placeholder='e.g. 1299'
                  required
                />
              </Field>

              <Field>
                <Label htmlFor='duration'>Duration</Label>
                <Input
                  defaultValue={destination.duration}
                  id='duration'
                  name='duration'
                  placeholder='e.g. 7 Days/6 Nights'
                  required
                />
              </Field>
            </div>

            <Field>
              <Label htmlFor='departureDate'>Departure Date</Label>
              <Input
                defaultValue={destination.departureDate}
                id='departureDate'
                name='departureDate'
                type='date'
                required
              />
            </Field>

            <Field>
              <Label htmlFor='imageUrl'>Image URL</Label>
              <Input
                defaultValue={destination.imageUrl}
                id='imageUrl'
                name='imageUrl'
                type='url'
                placeholder='https://example.com/image.jpg'
                required
              />
            </Field>

            <Field>
              <Label htmlFor='description'>Description</Label>
              <Textarea
                defaultValue={destination.description}
                id='description'
                name='description'
                className='min-h-28'
                placeholder='Describe the travel experience...'
                required
              />
            </Field>
          </FieldGroup>

          <DialogFooter className='mt-6 flex-row justify-end gap-3'>
            <DialogClose
              render={
                <Button type='button' variant='outline'>
                  Cancel
                </Button>
              }
            />

            <Button
              type='submit'
              className='bg-[#15A1BF] text-white hover:bg-[#1290ab]'
            >
              <Save className='size-4' aria-hidden='true' />
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditDestinationModal
