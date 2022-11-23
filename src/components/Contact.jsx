import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import useMediaQuery from '../../hooks/useMediaQuery'
import contactBg from '@/images/contact-bg.png'
import contactPen from '@/images/contact-pen.png'

export function Contact() {
  // Form data
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  })

  // Form status
  const [status, setStatus] = useState('unsubmitted')

  // Input changes
  const handleChange = (e) => {
    const field = e.target.name.toLowerCase()
    setData({
      ...data,
      [field]: e.target.value,
    })
  }

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    setStatus('submitting')

    const formData = new FormData()

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })

    fetch('https://getform.io/f/0d4798a8-9372-4ba9-aaeb-dc4da245707b', {
      method: 'POST',
      body: formData,
    })

    setTimeout(() => {
      setStatus('submitted')
    }, 2000)
  }

  const FormContainer = motion.div
  const FormPen = motion.div

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

  const formAnimation = {
    hidden: {},
    visible: {},
  }

  const penAnimation = {
    hidden: {
      rotate: 25,
      x: 70,
      originX: 0,
    },
    visible: {
      rotate: 0,
      x: 0,
      originX: 0,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <FormContainer
      className="relative mx-auto max-w-5xl"
      aria-hidden="true"
      initial="hidden"
      ref={ref}
      animate={ctrls}
      variants={formAnimation}
    >
      <FormPen
        className="absolute -right-0 top-10 z-10 hidden sm:block 2xl:top-20 2xl:-right-44"
        variants={penAnimation}
      >
        <Image src={contactPen} alt="Contact Us" className="" />
      </FormPen>
      <div className="relative  w-full  overflow-hidden bg-[#F1F3F4] py-20 px-6 sm:px-28 lg:rounded-lg">
        <div className="absolute left-1/2 top-0 h-[50px] w-[2px] bg-primary"></div>
        <div className="relative z-10 mx-auto max-w-lg lg:max-w-none">
          <div className="mb-8">
            <h3 className="text-center text-2xl font-extrabold">Contact us:</h3>
          </div>
          <form
            action="#"
            method="POST"
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="block w-full rounded-md border-2 border-[#E1E5E9] py-5 px-7 placeholder-neutral-500 shadow-sm focus:border-primary focus:ring-primary  disabled:text-neutral-500/60 disabled:shadow-none"
                placeholder="Full name"
                value={data.name}
                onChange={handleChange}
                disabled={status === 'submitted'}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-2 border-[#E1E5E9] py-5 px-7 placeholder-neutral-500 shadow-sm focus:border-primary focus:ring-primary  disabled:text-neutral-500/60 disabled:shadow-none"
                placeholder="Email"
                value={data.email}
                onChange={handleChange}
                disabled={status === 'submitted'}
                pattern="[A-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-2 border-[#E1E5E9] py-5 px-7 placeholder-neutral-500 shadow-sm focus:border-primary focus:ring-primary  disabled:text-neutral-500/60 disabled:shadow-none"
                placeholder="Message"
                // defaultValue={''}
                required
                disabled={status === 'submitted'}
                value={data.message}
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full justify-center sm:col-span-2">
              <input
                type="submit"
                disabled={status === 'submitted'}
                value={
                  status === 'unsubmitted'
                    ? 'Send Message'
                    : status === 'submitting'
                    ? 'Message Sending ...'
                    : 'Message Already Sent'
                }
                className="inline-flex cursor-pointer justify-center rounded-full border border-transparent bg-primary py-4 px-12 text-lg  text-white shadow-sm transition duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:text-white/60"
              />
            </div>
          </form>
        </div>
        <div className="absolute inset-0 h-full w-full">
          <Image
            priority
            fill
            src={contactBg}
            alt="Contact Us"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="relative mx-auto mt-16 mb-20 w-full max-w-5xl">
        <div className="flex flex-col items-center justify-center gap-5 px-6 text-center md:flex-row">
          <svg
            width="43"
            height="48"
            viewBox="0 0 43 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.8 48.0001C18.1 47.9001 17.4 47.9001 16.7 47.8001C13.4 47.5001 10.1 47.0001 6.9 45.9001C5 45.3001 3.3 44.5001 1.8 43.2001C1.1 42.5001 0.499995 41.8001 0.199995 40.8001C-0.300005 39.0001 0.299995 37.5001 1.5 36.3001C2.8 35.0001 4.3 34.3001 6 33.6001C8.2 32.8001 10.4 32.2001 12.7 31.8001C12.8 31.8001 12.9 31.7001 13 31.7001C12.9 31.5001 12.9 31.4001 12.8 31.3001C11.2 28.8001 9.5 26.3001 8 23.7001C6 20.4001 5.2 16.8001 5.9 13.0001C6.9 7.50012 10 3.50012 15.1 1.30012C20.3 -0.899885 25.4 -0.299885 30.1 3.00012C33.3 5.30012 35.4 8.50011 36.2 12.4001C37 16.4001 36.4 20.2001 34.2 23.7001C32.6 26.2001 31 28.7001 29.4 31.3001C29.3 31.4001 29.3 31.5001 29.2 31.7001C30.1 31.9001 31 32.1001 31.9 32.3001C34.4 32.9001 36.9 33.6001 39.2 35.1001C40.4 35.9001 41.5 36.8001 42 38.3001C42.5 39.7001 42.2 41.0001 41.4 42.2001C40.5 43.4001 39.3 44.2001 38 44.9001C35.3 46.3001 32.5 47.0001 29.5 47.4001C27.6 47.7001 25.7 47.8001 23.8 48.0001C23.6 48.0001 23.5 48.1001 23.3 48.1001C21.8 48.0001 20.3 48.0001 18.8 48.0001ZM21.1 39.1001C21.2 38.9001 21.3 38.8001 21.4 38.6001C24.8 33.3001 28.1 28.0001 31.5 22.8001C34.2 18.6001 34.5 14.3001 32.3 9.90012C30.3 5.80012 26.9 3.50012 22.4 3.00012C17.6 2.50012 13.8 4.30012 10.9 8.20012C7.89999 12.2001 7.7 18.1001 10.4 22.3001C12.8 26.0001 15.2 29.8001 17.6 33.5001C18.7 35.3001 19.8 37.1001 21.1 39.1001ZM21.1 45.3001C22.9 45.2001 24.6 45.1001 26.4 45.0001C29.5 44.7001 32.4 44.1001 35.3 43.0001C36.6 42.5001 37.9 41.9001 38.8 40.8001C39.5 40.0001 39.5 39.3001 38.8 38.5001C38.1 37.7001 37.3 37.2001 36.4 36.8001C33.6 35.5001 30.7 34.9001 27.7 34.5001C27.6 34.5001 27.4 34.6001 27.3 34.7001C26.9 35.2001 26.6 35.7001 26.3 36.3001C25 38.3001 23.7 40.3001 22.4 42.4001C22 43.0001 21.5 43.3001 20.8 43.2001C20.3 43.1001 20 42.8001 19.7 42.4001C18.1 39.9001 16.5 37.4001 14.9 34.9001C14.7 34.6001 14.6 34.5001 14.2 34.6001C13.5 34.7001 12.9 34.8001 12.2 34.9001C9.7 35.4001 7.3 36.0001 5.1 37.2001C4.4 37.6001 3.8 38.1001 3.2 38.7001C2.5 39.4001 2.6 40.1001 3.2 40.9001C3.5 41.2001 3.79999 41.5001 4.2 41.8001C5.7 42.8001 7.3 43.4001 9.1 43.9001C13 44.8001 17 45.2001 21.1 45.3001ZM28.1 15.6001C28.1 19.5001 24.9 22.6001 21.1 22.6001C17.2 22.6001 14.1 19.4001 14.1 15.6001C14.1 11.8001 17.3 8.60012 21.1 8.60012C24.9 8.60012 28.1 11.7001 28.1 15.6001ZM25.3 15.6001C25.3 13.3001 23.4 11.4001 21.1 11.4001C18.8 11.4001 16.9 13.3001 16.9 15.6001C16.9 17.9001 18.8 19.8001 21.1 19.8001C23.4 19.8001 25.3 17.9001 25.3 15.6001Z"
              fill="black"
            />
          </svg>
          <div className="text-2xl ">
            Zahuska, 27, 89101. Trebinje Bosnia I Hercegovina
          </div>
        </div>
        <div className="p-3 text-center text-sm">© 2022 Western Bridge DOO</div>
      </div>
    </FormContainer>
  )
}
