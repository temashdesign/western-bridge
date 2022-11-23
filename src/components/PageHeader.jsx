import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import pageHeaderBg from '@/images/page-header-bg.png'
import AnimatedTitle from './AnimatedTitle'
import useMediaQuery from '../../hooks/useMediaQuery'

export function PageHeader({ className, ...props }) {
  // Media query for parallax
  const isSmall = useMediaQuery('(max-width: 1200px)')
  // Content parallax
  const contentYOffset = isSmall ? 5 : 10

  return (
    <section className={clsx('page-header w-full', className)} {...props}>
      <div className="relative grid  items-center py-20 md:py-40">
        <Parallax speed={contentYOffset} className="z-10">
          <AnimatedTitle
            className="page-header-title mx-auto px-10 text-center text-4xl font-extrabold leading-[1.15] text-white md:text-[80px] lg:max-w-7xl lg:-translate-y-6 xl:text-[100px]"
            text={['We staff your business', 'on 5 continents of the', 'world']}
          />
        </Parallax>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            priority
            fill
            src={pageHeaderBg}
            alt="Picture of the author"
            className="h-full w-full object-cover object-bottom"
          />
        </motion.div>
      </div>
    </section>
  )
}
