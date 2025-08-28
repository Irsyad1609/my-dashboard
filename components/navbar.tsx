"use client"

import * as React from "react"
import Link from "next/link"
import { Network, Menu } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const navItems = [
    { name: "Network Operations", href: "/#network-ops" },
    { name: "Looking Glass", href: "/looking-glass" },
    {
      name: "PeeringDB",
      href: "https://www.peeringdb.com/asn/205018",
      external: true,
      icon: () => <Image src="/images/peeringdb-logo.png" alt="PeeringDB" width={16} height={16} className="h-4 w-4" />,
    },
  ]

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="sticky top-0 z-50 w-full glass glass-dark border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 focus-ring rounded-md">
            <Image
              src="/images/logo.svg" 
              alt="Logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="text-xl font-bold">AS205018</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "flex items-center space-x-1 text-sm font-medium hover:text-blue-500 focus-ring rounded-md px-2 py-1",
                  "transition-colors duration-200",
                )}
              >
                {item.icon && <item.icon />}
                <span>{item.name}</span>
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="focus-ring">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center space-x-2 text-lg font-medium hover:text-blue-500 focus-ring rounded-md px-2 py-2",
                        "transition-colors duration-200",
                      )}
                    >
                      {item.icon && <item.icon />}
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
