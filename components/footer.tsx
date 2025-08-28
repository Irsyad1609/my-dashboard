"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="glass glass-dark border-t bg-black/20 dark:bg-black/40"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025{' '}
            <a
              href="https://www.irsyad.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              <strong>irsyad.eu</strong>
            </a>{' '}
            (AS205018) — All Rights Reserved
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
