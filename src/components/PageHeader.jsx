import clsx from 'clsx'
import Image from 'next/image'
import pageHeaderBg from '@/images/page-header-bg.png'

export function PageHeader({ className, ...props }) {
  return (
    <section className={clsx('page-header w-full', className)} {...props}>
      <div className="relative grid  items-center py-20 md:py-40">
        <h1 className="relative z-10 mx-auto -translate-y-6 px-10 text-center text-4xl font-extrabold leading-tight text-white md:text-[80px] lg:max-w-7xl xl:text-[100px] ">
          <span className="bg-gradient-to-r from-[#1CF6D4] to-primary bg-clip-text text-transparent">
            We staff your business
          </span>{' '}
          on 5 continents of the
          <br /> world
        </h1>
        <Image
          priority
          fill
          src={pageHeaderBg}
          alt="Picture of the author"
          className="h-full w-full object-cover object-bottom"
        />
      </div>
    </section>
  )
}
