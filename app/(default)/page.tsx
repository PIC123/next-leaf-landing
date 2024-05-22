export const metadata = {
  title: 'Home - Next Leaf Tech',
  description: 'Crafting Experiences that Inspire and Transform',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import VineEffect from '@/components/VineEffects';

export default function Home() {
  return (
    <>
      <VineEffect />
      <Hero />
      <Zigzag />
      <Features />
      <Testimonials />
      <Newsletter />
    </>
  )
}
