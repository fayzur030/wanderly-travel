'use client'

import { Save, Trash } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { PackageForm } from '@/types/addDestinationTypes'

import { toast } from 'sonner'
import { authClient } from '@/lib/auth-client'

const CATEGORIES = [
  'Beach',
  'Mountain',
  'City',
  'Adventure',
  'Island',
  'Cultural',
] as const

const fieldClassName =
  'h-9 rounded-md border-neutral-200 bg-[#f7f8fa] px-3 text-xs text-neutral-900 shadow-none placeholder:text-neutral-400 focus-visible:border-[#15A1BF] focus-visible:bg-white focus-visible:ring-[#15A1BF]/20 md:text-xs dark:bg-input/30'

const labelClassName = 'text-[11px] font-semibold text-neutral-800'

const AddDestinationForm = () => {
  const [saved, setSaved] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const newDestination: PackageForm = {
      destinationName: String(formData.get('destinationName') ?? ''),
      country: String(formData.get('country') ?? ''),
      category: String(formData.get('category') ?? ''),
      price: Number(formData.get('price') ?? ''),
      duration: String(formData.get('duration') ?? ''),
      departureDate: String(formData.get('departureDate') ?? ''),
      imageUrl: String(formData.get('imageUrl') ?? ''),
      description: String(formData.get('description') ?? ''),
    }

    try {
      // Get JWT token from Better Auth
      const { data, error } = await authClient.token()

      if (error || !data?.token) {
        throw new Error('Failed to retrieve authentication token')
      }

      const jwtToken = data.token

      // Send destination data to Express backend
      const res = await fetch('http://localhost:5000/add-destination', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(newDestination),
      })

      if (!res.ok) {
        throw new Error('Add destination failed')
      }

      await res.json()

      toast.success('Destination added successfully!')
      form.reset()
    } catch (error) {
      console.error('Error adding destination:', error)
      toast.error('Failed to add destination')
    }
  }

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    const form = e.currentTarget.form
    form?.reset()
    setSaved(false)
  }

  return (
    <section className='mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:py-14'>
      <h1 className='text-[32px] leading-tight font-light tracking-tight text-neutral-900 sm:text-4xl'>
        Add New Travel Package
      </h1>

      <Card className='mx-auto mt-6 w-full max-w-xl gap-4 rounded-md py-4 shadow-sm ring-neutral-200'>
        <form onSubmit={handleSubmit}>
          <CardContent className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1.5'>
              <Label className={labelClassName} htmlFor='destinationName'>
                Destination Name
              </Label>
              <Input
                id='destinationName'
                name='destinationName'
                // value={form.destinationName}
                // onChange={updateField('destinationName')}
                className={fieldClassName}
                placeholder='e.g. Bali Paradise'
                required
              />
            </div>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
              <div className='flex flex-col gap-1.5'>
                <Label className={labelClassName} htmlFor='country'>
                  Country
                </Label>
                <Input
                  id='country'
                  name='country'
                  className={fieldClassName}
                  placeholder='e.g. Indonesia'
                  required
                />
              </div>

              <div className='flex flex-col gap-1.5'>
                <Label className={labelClassName} htmlFor='category'>
                  Category
                </Label>
                <Select name='category' required>
                  <SelectTrigger
                    id='category'
                    className='w-full rounded-md border-neutral-200 bg-[#f7f8fa] px-3 text-xs text-neutral-900 focus-visible:border-[#15A1BF] focus-visible:bg-white focus-visible:ring-[#15A1BF]/20 data-[size=default]:h-9 dark:bg-input/30'
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
              <div className='flex flex-col gap-1.5'>
                <Label className={labelClassName} htmlFor='price'>
                  Price (USD)
                </Label>
                <Input
                  id='price'
                  name='price'
                  className={fieldClassName}
                  placeholder='e.g. 1299'
                  inputMode='numeric'
                  required
                />
              </div>

              <div className='flex flex-col gap-1.5'>
                <Label className={labelClassName} htmlFor='duration'>
                  Duration
                </Label>
                <Input
                  id='duration'
                  name='duration'
                  className={fieldClassName}
                  placeholder='e.g. 7 Days/6 Nights'
                  required
                />
              </div>
            </div>

            <div className='flex flex-col gap-1.5'>
              <Label className={labelClassName} htmlFor='departureDate'>
                Departure Date
              </Label>
              <Input
                id='departureDate'
                name='departureDate'
                className={fieldClassName}
                placeholder='mm/dd/yyyy'
                required
              />
            </div>

            <div className='flex flex-col gap-1.5'>
              <Label className={labelClassName} htmlFor='imageUrl'>
                Image URL
              </Label>
              <Input
                id='imageUrl'
                name='imageUrl'
                type='url'
                className={fieldClassName}
                placeholder='https://example.com/image.jpg'
                required
              />
            </div>

            <div className='flex flex-col gap-1.5'>
              <Label className={labelClassName} htmlFor='description'>
                Description
              </Label>
              <Textarea
                id='description'
                name='description'
                className='field-sizing-fixed min-h-28 rounded-md border-neutral-200 bg-[#f7f8fa] px-3 py-2 text-xs text-neutral-900 shadow-none placeholder:text-neutral-400 focus-visible:border-[#15A1BF] focus-visible:bg-white focus-visible:ring-[#15A1BF]/20 md:text-xs dark:bg-input/30'
                placeholder='Describe the travel experience...'
                required
              />
            </div>
          </CardContent>

          <CardFooter className='mt-4 items-center justify-between border-neutral-100 bg-transparent'>
            <p
              aria-live='polite'
              className='truncate pr-3 text-[11px] text-emerald-600'
            >
              {saved ? 'Travel package saved.' : ''}
            </p>

            <div className='flex shrink-0 items-center gap-3'>
              <Button
                type='button'
                variant='outline'
                size='lg'
                onClick={handleCancel}
                className='border-red-300 text-red-500 rounded-none cursor-pointer hover:border-red-300 hover:bg-red-50 hover:text-red-600'
              >
                <Trash className='size-3.5' aria-hidden />
                Cancel
              </Button>
              <Button
                type='submit'
                size='lg'
                className='bg-[#15A1BF] rounded-none cursor-pointer text-white hover:bg-[#1290ab]'
              >
                <Save className='size-3.5' aria-hidden />
                Add Travel Package
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </section>
  )
}

export default AddDestinationForm
