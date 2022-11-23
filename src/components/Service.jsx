import { useEffect } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Parallax } from 'react-scroll-parallax'
import useMediaQuery from '../../hooks/useMediaQuery'
import AnimatedTitle from './AnimatedTitle'

const ServiceItem = motion.div
const ServiceItemInner = motion.div
const Line = motion.div
const ImageWrapper = motion.div

// const World = motion.span

export function Service({ className, ...props }) {
  // Media query for parallax
  const isSmall = useMediaQuery('(max-width: 1024px)')
  // Content parallax
  const contentYOffset = isSmall ? 0 : 5

  const ctrls = useAnimation()

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      ctrls.start('visible')
    }
    if (!inView) {
      ctrls.start('hidden')
    }
  }, [ctrls, inView])

  const serviceCardAnimation = {
    hidden: {},
    visible: {
      transition: { delay: 1 },
    },
  }

  const serviceCardInnerAnimation = {
    hidden: {
      opacity: 0,
      // y: `100px`,
    },
    visible: {
      opacity: 1,
      // y: `0`,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  const lineAnimation = isSmall
    ? {
        hidden: {
          opacity: 0,
          height: `0px`,
        },
        visible: {
          opacity: 1,
          height: `60px`,
          transition: {
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9],
          },
        },
      }
    : {
        hidden: {
          opacity: 0,
          height: `0px`,
        },
        visible: {
          opacity: 1,
          height: `100px`,
          transition: {
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9],
          },
        },
      }

  const imageAnimation = {
    hidden: {
      opacity: 0,
      scale: 1.2,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <ServiceItem
      className={clsx(
        'service-item relative z-10 mx-auto px-6 first:-mt-20 last:-mb-20 xl:px-0',
        className
      )}
      ref={ref}
      aria-hidden="true"
      initial="hidden"
      animate={ctrls}
      variants={serviceCardAnimation}
    >
      <ServiceItemInner
        variants={serviceCardInnerAnimation}
        className="grid w-full max-w-7xl grid-cols-1 items-center overflow-hidden rounded-lg bg-white px-10 py-10 shadow-xl lg:grid-cols-2 lg:py-0 lg:px-24"
      >
        <div className="service-item-title relative flex h-full items-center">
          <Line
            className="line-item absolute top-0 left-0 hidden w-[2px] bg-primary lg:block"
            variants={lineAnimation}
          ></Line>
          <Parallax speed={contentYOffset} className="">
            <AnimatedTitle
              className="service-title text-3xl font-extrabold leading-[1.15] text-black lg:text-5xl"
              text={props.text}
            />
          </Parallax>
        </div>
        <ImageWrapper variants={imageAnimation} className="service-item-image">
          <Image priority src={props.image} alt={props.text} />
        </ImageWrapper>
      </ServiceItemInner>
    </ServiceItem>
  )
}
