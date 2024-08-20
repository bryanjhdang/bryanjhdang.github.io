import * as React from 'react';

type Props = {
  children?: React.ReactNode
};

export function SectionWrapper({children}: Props) {
  return (
    // <div className="px-10 sm:px-20 lg:px-40 xl:px-60">
    <div>
      {children}
    </div>
  )
}

export function SectionTitle({ title }: { title: string }) {
  return (
    <p className="font-extrabold text-2xl mb-10">{title}</p>
    // <p>{title}</p>
  )
}