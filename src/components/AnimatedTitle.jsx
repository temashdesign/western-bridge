import { useEffect } from 'react'
import styled from 'styled-components'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import clsx from 'clsx'

// const Title = styled.h2``

const Line = motion.span

const World = motion.span

export default function AnimatedTitle({ className, ...props }) {
  const text = props.text
  // const text = ['We staff your business', 'on 5 continents of the', 'world']
  const textFull = text.join(' ')

  console.log(textFull)

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

  const lineAnimation = {
    hidden: {},
    visible: {},
  }

  const wordAnimation = {
    hidden: {
      opacity: 0,
      y: `100%`,
    },
    visible: {
      opacity: 1,
      y: `0`,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <h2
      aria-label={text.join(' ')}
      role="heading"
      className={clsx('relative z-10', className)}
    >
      {text.map((word, index) => {
        return (
          <Line
            className=" inline-block overflow-hidden"
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={lineAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
          >
            <World
              aria-hidden="true"
              key={index}
              variants={wordAnimation}
              className="inline-block"
            >
              {word + ' '}
            </World>
          </Line>
        )
      })}
    </h2>
  )
}
