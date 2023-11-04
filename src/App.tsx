// ROUTES
import { Routes, Route } from 'react-router-dom'

// STYLES
import * as S from './App.styles.ts'

// STATE MANAGEMENT
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// COMPONENTS
import { Header, List } from '@components'

const queryClient = new QueryClient()

function App() {
  return (
    <S.Container>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path='/' element={<List />} />
        </Routes>
      </QueryClientProvider>
    </S.Container>
  )
}

export default App
