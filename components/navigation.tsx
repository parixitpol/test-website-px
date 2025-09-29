"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-foreground">AI Simplify</h1>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-muted-foreground transition-colors">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-muted-foreground transition-colors">
                About Us
              </a>
              <a href="#team" className="text-foreground hover:text-muted-foreground transition-colors">
                Team
              </a>
              <a href="#contact" className="text-foreground hover:text-muted-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-muted-foreground">
                Home
              </a>
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-muted-foreground">
                About Us
              </a>
              <a href="#team" className="block px-3 py-2 text-foreground hover:text-muted-foreground">
                Team
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-muted-foreground">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
