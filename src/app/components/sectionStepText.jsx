'use client';
import { Header } from 'semantic-ui-react';

export function SectionStepText(props) {
  return (
    <div
      className={`sm:w-full lg:w-1/2 md:w-1/2 py-20  ${props.TextFirst && 'self-start'}`}
    >
      {props.title && <Header size="huge">{props.title}</Header>}
      <p className="py-4 text-lg">{props.p1}</p>
      <p className="py-4 text-lg">{props?.p2}</p>
    </div>
  );
}
