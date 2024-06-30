import * as React from 'react';

type Props = {
  children?: React.ReactNode
};

export function SectionWrapper({children}: Props) {
  return (
    <div className="px-10 sm:px-20 lg:px-40 xl:px-60">
      {children}
    </div>
  )
}

export function SectionTitle({ title }: { title: string }) {
  return (
    <p className="font-extrabold text-xl sm:text-2xl mb-5 sm:mb-10">{title}</p>
  )
}