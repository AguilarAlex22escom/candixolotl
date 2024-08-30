import { FC } from 'react'
import HRTagProps from '@/Interfaces/HRTagProps'

const HRTag: FC<HRTagProps> = ({
  firstChildren,
  lastChildren,
  hrUIMode,
}: HRTagProps) => {
  return (
    <>
      {firstChildren}
      <hr className={hrUIMode}/>
      {lastChildren}
    </>
  );
};

export default HRTag;
