import React from 'react'
import Home from "@/components/home/page"
import Dashboard from '@/components/dashboard'

export default function page() {
  return (
    <div>
      <Dashboard breadcrumb="Home">
      <Home />
      </Dashboard>
    </div>
  )
}
