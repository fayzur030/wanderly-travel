'use client'

import { Save, Trash, X } from 'lucide-react'
import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

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

const CATEGORIES = [
  'Beach',
  'Mountain',
  'City',
  'Adventure',
  'Island',
  'Cultural',
] as const

type PackageForm = {
  destinationName: string
  country: string
  category: string
  price: string
  duration: string
  departureDate: string
  imageUrl: string
  description: string
}

const INITIAL_FORM: PackageForm = {
  destinationName: 'Bali Paradise',
  country: 'Indonesia',
  category: 'Beach',
  price: '',
  duration: '',
  departureDate: '',
  imageUrl: '',
  description: '',
}

const fieldClassName =
  'h-9 rounded-md border-neutral-200 bg-[#f7f8fa] px-3 text-xs text-neutral-900 shadow-none placeholder:text-neutral-400 focus-visible:border-[#15A1BF] focus-visible:bg-white focus-visible:ring-[#15A1BF]/20 md:text-xs dark:bg-input/30'

const labelClassName = 'text-[11px] font-semibold text-neutral-800'

const AddDestinationForm = () => {
  const [form, setForm] = useState<PackageForm>(INITIAL_FORM)
  const [saved, setSaved] = useState(false)

  const updateField =
    (field: keyof PackageForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }))
      setSaved(false)
    }

  const handleCategoryChange = (value: string | null) => {
    setForm((current) => ({ ...current, category: value ?? '' }))
    setSaved(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSaved(true)
  }

  const handleCancel = () => {
    setForm(INITIAL_FORM)
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
                value={form.destinationName}
                onChange={updateField('destinationName')}
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
                  value={form.country}
                  onChange={updateField('country')}
                  className={fieldClassName}
                  placeholder='e.g. Indonesia'
                  required
                />
              </div>

              <div className='flex flex-col gap-1.5'>
                <Label className={labelClassName} htmlFor='category'>
                  Category
                </Label>
                <Select
                  name='category'
                  value={form.category}
                  onValueChange={handleCategoryChange}
                  required
                >
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
                  value={form.price}
                  onChange={updateField('price')}
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
                  value={form.duration}
                  onChange={updateField('duration')}
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
                value={form.departureDate}
                onChange={updateField('departureDate')}
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
                value={form.imageUrl}
                onChange={updateField('imageUrl')}
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
                value={form.description}
                onChange={updateField('description')}
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
