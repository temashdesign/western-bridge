import clsx from 'clsx'
import Image from 'next/image'
import pageHeaderBg from '@/images/page-header-bg.png'

export function PageHeader({ className, ...props }) {
  return (
    <section className={clsx('pahe-header w-full', className)} {...props}>
      <div>
        <Image
          src={pageHeaderBg}
          // width={500}
          // height={500}
          alt="Picture of the author"
          className="w-full object-cover"
        />
      </div>
    </section>
  )
}
