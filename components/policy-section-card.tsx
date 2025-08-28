"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface PolicySectionCardProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function PolicySectionCard({ title, children, className }: PolicySectionCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7.5, -7.5]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7.5, 7.5]), springConfig)

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return

      const rect = cardRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      mouseX.set((e.clientX - centerX) / rect.width)
      mouseY.set((e.clientY - centerY) / rect.height)
    },
    [mouseX, mouseY],
  )

  const handleMouseLeave = React.useCallback(() => {
    mouseX.set(0)
    mouseY.set(0)
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative p-8 rounded-2xl glass glass-dark border-2 hover:border-blue-500/50 transition-all duration-300",
        "bg-gradient-to-br from-white/10 to-white/5 dark:from-black/10 dark:to-black/5",
        "shadow-xl hover:shadow-2xl",
        className,
      )}
    >
      {/* Gradient overlay that follows mouse */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
          ),
        }}
      />

      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h3>
        <div className="prose prose-gray dark:prose-invert max-w-none">{children}</div>
      </div>
    </motion.div>
  )
}
