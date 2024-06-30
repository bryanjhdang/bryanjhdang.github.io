import * as React from 'react';

type Props = {
  children?: React.ReactNode
};

export function SectionWrapper({children}: Props) {
  return (
    <div className="px-10 md:px-40 lg:px-60">
      {children}
    </div>
  )
}

export function SectionTitle({ title }: { title: string }) {
  return (
    <p className="font-extrabold text-xl sm:text-2xl mb-5">{title}</p>
  )
}