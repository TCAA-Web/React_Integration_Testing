import image1 from '../assets/images/lukas-unsplash.jpg'
import image2 from '../assets/images/marco-oriolesi-unsplash.jpg'
import image3 from '../assets/images/webaliser-unsplash.jpg'

export type imageArrayType = {
  imgSrc: string
  name: string
  id: number
}

export const imageArray: Array<imageArrayType> = [
  { imgSrc: image1, name: 'Lonely Robot', id: 1 },
  { imgSrc: image2, name: 'Big Decisions', id: 2 },
  { imgSrc: image3, name: 'Rich Problems', id: 3 },
]
