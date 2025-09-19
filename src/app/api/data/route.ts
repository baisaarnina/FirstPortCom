import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { FeaturesType } from '@/app/types/features'
import { ExpertChiefType } from '@/app/types/expertchief'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FooterLinkType } from '@/app/types/footerlink'
import { FullMenuType } from '@/app/types/fullmenu'

const HeaderData: HeaderItem[] = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  // { label: 'Reserve Table', href: '/#reserve' },
  { label: 'Contact', href: '/#footer' },
]

const FeaturesData: FeaturesType[] = [
  {
    imgSrc: '/images/Features/1.jpg',
    heading: 'RIXOS MARINA ABU DHABI',
    date: 'March 2024 - Present ',
    loc: 'Marina Mall, Rind Rd - Al Kasir - Al Marina - Abu Dhabi, UAE',
    links: 'www.rixos.com'
  },
  {
    imgSrc: '/images/Features/3.png',
    heading: 'MAKI GAZIPASA BRANCH',
    date:'July 2022 - February 2024',
    loc: 'Cemalpaşa, Vali Yolu Caddesi,Ethem Ekin Sk. No:2/A, 01120 Seyhan/Adana, Turkey',
    links:'www.makirestoran.com'
  },
  {
    imgSrc: '/images/Features/2.jpg',
    heading: 'SUSHI G RESTAURANT PUB',
    date:'February 2020 - March 2022',
    loc: 'Barbaros Mh. Mor Leylak Sok. Ağaoğlu MY World Andromeda C8 No.2 Ataşehir, İstanbul, Turkey',
    links:'www.sushig.com.tr'
  },
  {
    imgSrc: '/images/Features/4.jpg',
    heading: 'SUSHE & SUSHE RESTAURANT',
    date:'October 2018 - January 2020',
    loc: 'Marina Mall, Rind Rd - Al Kasir - Al Marina - Abu Dhabi, UAEYenişehir Mh. M. Akyol Sk. MVK Square No. 13/239 Pendik Istanbul Turkey',
    links:'www.sushesushe.com'
  },
  {
    imgSrc: '/images/Features/5.jfif',
    heading: 'CHINA LOTUS SUSHI & RESTAURANT',
    date:'June 2010 - April 2018',
    loc: 'Ataşehir Istanbul Turkey',
    links: 'www.chinalotus.com.tr'
  },
  
]

const ExpertChiefData: ExpertChiefType[] = [
  {
    profession: 'Senior Chef',
    name: 'Marco Benton',
    imgSrc: '/images/Expert/boyone.png',
  },
  {
    profession: 'Junior Chef',
    name: 'Elena Rivera',
    imgSrc: '/images/Expert/girl.png',
  },
  {
    profession: 'Junior Chef',
    name: 'John Doe',
    imgSrc: '/images/Expert/boytwo.png',
  },
]

const GalleryImagesData: GalleryImagesType[] = [
  {
    src: '/images/Gallery/1.jpg',
  },
  {
    src: '/images/Gallery/2.jpg',
  },
  {
    src: '/images/Gallery/3.jpg',

  },
  {
    src: '/images/Gallery/4.jpg',
  },
   {
    src: '/images/Gallery/5.jpg',
  },
  {
    src: '/images/Gallery/6.jpg',
  },
  {
    src: '/images/Gallery/7.jpg',

  },
  {
    src: '/images/Gallery/8.jpg',
  },
   {
    src: '/images/Gallery/9.jpg',
  },
  {
    src: '/images/Gallery/10.jpg',
  },
  {
    src: '/images/Gallery/11.jpg',

  },
  {
    src: '/images/Gallery/12.jpg',
  },
   {
    src: '/images/Gallery/13.jpg',
  },
  {
    src: '/images/Gallery/14.jpg',
  },
  {
    src: '/images/Gallery/15.jpg',

  },
  {
    src: '/images/Gallery/16.jpg',
  },
   {
    src: '/images/Gallery/17.jpg',
  },
  {
    src: '/images/Gallery/18.jpg',
  },
  {
    src: '/images/Gallery/19.jpg',

  },
   {
    src: '/images/Gallery/26.jpg',
  },
  {
    src: '/images/Gallery/20.jpg',
  },
   {
    src: '/images/Gallery/21.jpg',
  },
  {
    src: '/images/Gallery/22.jpg',
  },
  {
    src: '/images/Gallery/23.jpg',

  },
  {
    src: '/images/Gallery/24.jpg',
  },
    {
    src: '/images/Gallery/25.jpg',
  },
 
  {
    src: '/images/Gallery/27.jpg',
  },
   {
    src: '/images/Gallery/28.jpg',
  },
  {
    src: '/images/Gallery/30.jpg',
  },
  {
    src: '/images/Gallery/31.jpg',

  },
   {
    src: '/images/Gallery/33.jpg',
  },
  {
    src: '/images/Gallery/34.jpg',
  },
  {
    src: '/images/Gallery/35.jpg',

  },
  {
    src: '/images/Gallery/36.jpg',
  },
  
]

const FullMenuData: FullMenuType[] = [
  {
    name: 'Grilled Salmon',
    price: '$18.99',
    description: 'Served with lemon butter sauce and grilled vegetables.',
  },
  {
    name: 'Caesar Salad',
    price: '$9.99',
    description: 'Crisp romaine with parmesan, croutons, and Caesar dressing.',
  },
  {
    name: 'Margherita Pizza',
    price: '$13.49',
    description: 'Classic pizza with tomato, mozzarella, and fresh basil.',
  },
  {
    name: 'Tomato Basil Soup',
    price: '$6.99',
    description: 'Creamy tomato soup with a hint of garlic and fresh basil.',
  },
  {
    name: 'Chocolate Lava Cake',
    price: '$7.99',
    description:
      'Warm chocolate cake with a molten center served with vanilla ice cream.',
  },
  {
    name: 'Spaghetti Carbonara',
    price: '$15.25',
    description:
      'Spaghetti tossed with eggs, pancetta, parmesan, and black pepper.',
  },
  {
    name: 'Tiramisu',
    price: '$8.50',
    description:
      'Layered espresso-soaked ladyfingers with mascarpone and cocoa.',
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Contact Me',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/#about' },
      { label: 'Contact', href: '/#footer' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeaturesData,
    ExpertChiefData,
    GalleryImagesData,
    FullMenuData,
    FooterLinkData,
  })
}
