"use client"

import React, { Suspense } from 'react'
import Dashboard from '@/containers/Dashboard'

export default function home() {
  return (
    <Suspense>
      <Dashboard />
    </Suspense>
  )
}
