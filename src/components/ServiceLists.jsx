import clsx from 'clsx'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import useMediaQuery from '../../hooks/useMediaQuery'
import ServicesBg from '@/images/services-bg.jpg'

export function ServiceLists({ className, ...props }) {
  // Media query for parallax
  const isSmall = useMediaQuery('(max-width: 1200px)')
  // Content parallax
  const contentYOffset = isSmall ? -5 : -25
  return (
    <div
      className={clsx(
        'relative mx-auto my-40 grid h-[2000px] w-full justify-center overflow-hidden bg-[#F1F3F4]',
        className
      )}
      {...props}
    >
      <Parallax
        speed={contentYOffset}
        className="absolute inset-0 z-10 h-full w-full"
      >
        <Image
          priority
          fill
          src={ServicesBg}
          alt="Picture of the author"
          className="h-full w-full object-cover object-top"
        />
      </Parallax>
    </div>
  )
}
