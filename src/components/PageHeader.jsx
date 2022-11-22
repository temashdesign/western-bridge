import clsx from 'clsx'
import Image from 'next/image'
import pageHeaderBg from '@/images/page-header-bg.png'

export function PageHeader({ className, ...props }) {
  return (
    <section className={clsx('page-header w-full', className)} {...props}>
      <div className="relative grid min-h-[800px] items-center">
        <h1 className=" relative z-10 mx-auto max-w-7xl -translate-y-6 text-center text-[100px] font-extrabold leading-tight text-white ">
          <span className="bg-gradient-to-r from-[#1CF6D4] to-blue-500 bg-clip-text text-transparent">
            We staff your business
          </span>{' '}
          on 5 continents of the
          <br /> world
        </h1>
        <Image
          src={pageHeaderBg}
          alt="Picture of the author"
          className="absolute inset-0 z-0  h-full w-full object-cover object-bottom"
        />
      </div>
    </section>
  )
}
