"use client"; // This is a client component 👈🏽

import { HeaderView, ResetWorkflowButton, RoundedButton, WorkflowGraphic } from '@/components'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-start">
      <HeaderView />

      <WorkflowGraphic />

      <RoundedButton />

      <ResetWorkflowButton />
    </main>
  )
}
