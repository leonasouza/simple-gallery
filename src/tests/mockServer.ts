import { setupServer } from 'msw/node'

// HANDLERS
import { listHandlers } from '@tests/handlers/list'

const handlers = [...listHandlers]

export const mockServer = setupServer(...handlers)
