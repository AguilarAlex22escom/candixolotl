import { FC, ReactNode } from 'react'
import Header from '@/Layouts/Header/Header'

const MainLayout: FC<{children: ReactNode}> = ({children}) => {
    return(
        <>
            <Header />
            {children}
        </>
    )
}

export default MainLayout