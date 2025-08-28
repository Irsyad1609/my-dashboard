"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/60 to-purple-50/80 dark:from-gray-900/90 dark:via-gray-800/80 dark:to-blue-900/90 backdrop-blur-sm" />

      {/* Enhanced glow effects for continuous background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AS205018
            </motion.span>
            <br />
            <motion.span
              className="text-gray-900 dark:text-white"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Irsyad Khoirul Anwar
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
            Personal ASN
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Peering Policy and Network Information
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button
              asChild
              size="default"
              className="bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 text-gray-900 dark:text-white px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 focus-ring"
            >
              <a
                href="https://www.peeringdb.com/asn/205018"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Image src="/images/peeringdb-logo.png" alt="PeeringDB" width={18} height={18} className="h-4 w-4" />
                <span>View on PeeringDB</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
