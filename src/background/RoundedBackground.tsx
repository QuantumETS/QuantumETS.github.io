import type { ReactNode } from 'react';

type IRoundedBackgroundProps = {
  children: ReactNode;
  color: string;
};

const RoundedBackground = (props: IRoundedBackgroundProps) => (
  <div className={`rounded-lg ${props.color}`}>{props.children}</div>
);

export { RoundedBackground };
