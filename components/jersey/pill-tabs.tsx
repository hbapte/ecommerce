import { Button } from "@/components/ui/button"

export default function PillTabs({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'football', label: 'Football' },
    { id: 'basketball', label: 'Basketball' },
    { id: 'formula1', label: 'Formula 1' },
  ]

  return (
    <div className="flex p-1 space-x-4 py-2 rounded-full">
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          variant={activeTab === tab.id ? "default" : "outline"}
          className={`flex-1 rounded-full ${activeTab === tab.id ? '' : 'hover:bg-secondary-foreground/10'}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  )
}

