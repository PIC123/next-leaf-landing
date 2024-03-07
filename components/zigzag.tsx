import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'

import WaveFormsPoster from '@/public/images/WaveForms-Event-Poster.jpg'
import JunkyardRAVEImage from '@/public/images/Junkyard-RAVE-jacob.jpg'
import PorticoMappingImage from '@/public/images/portico-mapping.jpg'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Tell Your Story</div>
            <h1 className="h2 mb-4">Blending Technology with Storytelling</h1>
            <p className="text-xl text-gray-400">Our work ranges from large-scale installations to intimate, personal experiences, all designed to engage and captivate. Whether it's through augmented reality, virtual reality, or other emerging technologies, we strive to create environments that transport our audience to new worlds and offer fresh perspectives.</p>
          </div>

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h3 className="h3 mb-4">Projects</h3>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={WaveFormsPoster} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-green-600 mb-2">Projection Mapping / AI Video</div>
                  <h3 className="h3 mb-3">Tipping Points</h3>
                  <p className="text-xl text-gray-400 mb-4">Tipping Point, our immersive installation at the Museum of Science, was built to convey the multitude of variables that support a healthy environment, and depict the consequences of removing too many factors. With AI-generated visuals projection-mapped onto the museum wall and a reimagined game of Jenga, Tipping Point is a multisensory experience that guides the audience through the potential collapse that awaits us if we don’t take action soon.</p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={JunkyardRAVEImage} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-green-600 mb-2">Audio AI / Interactive Art</div>
                  <h3 className="h3 mb-3">Junkyard RAVE</h3>
                  <p className="text-xl text-gray-400 mb-4">Junkyard RAVE is an interactive art piece that invites participants to co-create music with AI, exploring the latent space of neural network models through tactile controls. Fabricated from recycled metal, this sculpture allows users to physically navigate sonic landscapes, blurring the line between human and machine creativity.</p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={PorticoMappingImage} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-green-600 mb-2">Projection Mapping / Visual Performance</div>
                  <h3 className="h3 mb-3">Portico Mural Mapping</h3>
                  <p className="text-xl text-gray-400 mb-4">Portico Brewery's mural came alive through projection mapping, transforming the static art into a dynamic visual installation for a music event. The addition of animations like blinking eyes and moving figures created an immersive experience, blending the mural art and musical performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
