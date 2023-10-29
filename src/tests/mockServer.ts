import { setupServer } from 'msw/node'

// HANDLERS
import { listHandlers } from '@components/List/List.test'

const handlers = [...listHandlers]

export const mockServer = setupServer(...handlers)
