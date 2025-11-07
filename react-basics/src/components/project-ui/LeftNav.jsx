import React from 'react'
import { LayoutDashboard, Settings, Users, MessageSquare, LogOut } from 'lucide-react'

const LeftNav = () => {
  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { icon: <Users size={20} />, label: 'Users' },
    { icon: <MessageSquare size={20} />, label: 'Messages' },
    { icon: <Settings size={20} />, label: 'Settings' },
    { icon: <LogOut size={20} />, label: 'Logout' },
  ]

  return (
    <div className="w-full flex flex-col space-y-3 mt-4">
      {navItems.map((item, index) => (
        <button
          key={index}
          className="flex items-center gap-3 px-6 py-3 text-white/90 hover:bg-amber-400 rounded-lg transition duration-200"
        >
          {item.icon}
          <span className="font-medium">{item.label}</span>
        </button>
      ))}
    </div>
  )
}

export default LeftNav
