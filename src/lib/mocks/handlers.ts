import { http, HttpResponse } from 'msw'

import { createHealthyHealthResponse } from '../health'

const healthcheckHandler = http.get('/api/health', () => {
  return HttpResponse.json(createHealthyHealthResponse(), { status: 200 })
})

export const handlers = [healthcheckHandler]
