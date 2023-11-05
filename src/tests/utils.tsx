import React, { ReactNode } from 'react'

// ROUTES
import { BrowserRouter } from 'react-router-dom'

// SERVICES
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { OverlayContextProvider } from '@contexts'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

export const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <OverlayContextProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </OverlayContextProvider>
  </QueryClientProvider>
)

export const intersectionObserverMock = () => ({
  observe: () => null,
})
