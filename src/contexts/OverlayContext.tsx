import { createContext, useContext, useState } from 'react'

// TYPES
import { IPhoto } from '@types'

interface Data {
  selectedPhoto: IPhoto | null
  setSelectedPhoto: React.Dispatch<React.SetStateAction<IPhoto | null>>
}

interface Props {
  children: React.ReactNode
  testPhoto?: IPhoto
}

const OverlayContext = createContext({} as Data)

const OverlayContextProvider = ({ children, testPhoto }: Props) => {
  const [selectedPhoto, setSelectedPhoto] = useState<IPhoto | null>(
    testPhoto || null
  )

  return (
    <OverlayContext.Provider
      value={{
        selectedPhoto,
        setSelectedPhoto,
      }}
    >
      {children}
    </OverlayContext.Provider>
  )
}

const useOverlayContext = () => useContext(OverlayContext)

export { OverlayContextProvider, useOverlayContext }
