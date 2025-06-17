import { useState } from 'react'
import { Button } from './Button'
import { type imageArrayType } from '../static/imageArray'

interface ImageSliderInterface {
  imageGallery: Array<imageArrayType>
}

export const ImageSlider = ({ imageGallery }: ImageSliderInterface) => {
  const [imageIndex, setImageIndex] = useState<number>(0)

  const prevHandler = () => {
    if (imageIndex > 0) {
      setImageIndex((prev) => prev - 1)
    } else setImageIndex(imageGallery.length - 1)
  }

  const nextHandler = () => {
    if (imageIndex < imageGallery.length - 1) {
      setImageIndex((prev) => prev + 1)
    } else {
      setImageIndex(0)
    }
  }

  const currentImage = imageGallery[imageIndex]

  return (
    <section className='w-60 gap-2 flex justify-center items-center m-1'>
      <Button id='prevButton' callback={prevHandler} aria='previous-button'>
        Back
      </Button>
      <figure className='w-fit h-auto'>
        <img className='object-cover h-90 max-w-lg' src={currentImage.imgSrc} alt={currentImage.name}></img>
        <figcaption className='font-extralight text-sm'>{currentImage.name}</figcaption>
      </figure>
      <Button id='nextButton' callback={nextHandler} aria='next-button'>
        Forward
      </Button>
    </section>
  )
}
