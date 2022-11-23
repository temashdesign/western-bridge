import clsx from 'clsx'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import useMediaQuery from '../../hooks/useMediaQuery'
import ServicesBg from '@/images/services-bg.jpg'
import ServicesImage01 from '@/images/service-img-01.jpg'
import ServicesImage02 from '@/images/service-img-02.jpg'
import ServicesImage03 from '@/images/service-img-03.jpg'
import ServicesImage04 from '@/images/service-img-04.jpg'
import ServicesImage05 from '@/images/service-img-05.jpg'
import { Service } from './Service'

export function ServiceLists({ className, ...props }) {
  // Media query for parallax
  const isSmall = useMediaQuery('(max-width: 768px)')
  // Content parallax
  const contentYOffset = isSmall ? -15 : -25
  return (
    <div
      className={clsx(
        'relative mx-auto my-40 w-full justify-center  bg-[#F1F3F4]',
        className
      )}
      {...props}
    >
      <div className="service-items grid grid-cols-1 gap-y-9 ">
        <Service text={['Equipment']} image={ServicesImage01} />
        <Service
          text={['Realization of rare', 'metals and alloys']}
          image={ServicesImage02}
        />
        <Service
          text={['Realization of', 'non-ferrous metals']}
          image={ServicesImage03}
        />
        <Service
          text={['Realization of', 'various metal for', 'any manufacture']}
          image={ServicesImage04}
        />
        <Service
          text={['Supply of metals', 'and equipment']}
          image={ServicesImage05}
        />
      </div>
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Parallax
          speed={contentYOffset}
          className="absolute inset-0 h-full w-full"
        >
          <Image
            priority
            src={ServicesBg}
            alt="Picture of the author"
            className="h-1/2 w-full object-cover object-top lg:h-full"
          />
        </Parallax>
      </div>
    </div>
  )
}
