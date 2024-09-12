'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function PillTabs() {
  const [activeTab, setActiveTab] = useState('home')

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'settings', label: 'Settings' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <div className="flex p-1  space-x-4 py-2 rounded-full">
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          variant={activeTab === tab.id ? "default" : "outline"}
          className={`flex-1 rounded-full ${
            activeTab === tab.id ? '' : 'hover:bg-secondary-foreground/10'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  )
}