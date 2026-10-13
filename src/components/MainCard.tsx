import React, { type ReactNode } from 'react'

type ContentProps = {
  radialColor1?: any;
  radialColor2? : string;
  children: ReactNode | ReactNode[];
}

const MainCard: React.FC<ContentProps> = ({radialColor1, radialColor2, children}: ContentProps) => {
  return (
    <div className={`w-full sm:w-[340px] xl:w-[400px] shadow-lg bg-radial-(var(--radialColor1)), ${radialColor2})`}>
      {children}
    </div>
  )
}

export default MainCard     
