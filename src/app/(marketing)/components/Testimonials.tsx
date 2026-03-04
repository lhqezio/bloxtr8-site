"use client"

import * as React from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowButton } from "@/components/ui/arrow-button"
import { Quote } from "lucide-react"
import { testimonials as testimonialsCopy } from "@/content/copy"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Testimonial = {
  quote: string
  name: string
  title: string
  avatarFallback: string
  avatarSrc?: string
}



export default function Testimonials() {
  const items = (testimonialsCopy.items ?? []) as Testimonial[]
  const [activeIndex, setActiveIndex] = React.useState(0)
  const rotateTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const lastInputAtRef = React.useRef(0)
  const prefersReducedMotion = useReducedMotion()

  const total = items.length
  const INPUT_DEBOUNCE_MS = 250

  React.useEffect(() => {
    setActiveIndex((i) => (total === 0 ? 0 : Math.min(i, total - 1)))
  }, [total])

  // Auto-advance to next testimonial every 5 seconds
  React.useEffect(() => {
    if (total <= 1) return
    rotateTimeoutRef.current = setTimeout(() => {
      setActiveIndex((i) => (i + 1) % total)
    }, 5000)
    return () => {
      if (rotateTimeoutRef.current) clearTimeout(rotateTimeoutRef.current)
    }
  }, [total, activeIndex])

  const t = items[activeIndex]

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6">
      <div className="container-narrow">
        <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm text-foreground">
              {testimonialsCopy.label}
            </div>

            <h2 className="mt-6 text-balance text-2xl sm:text-3xl md:text-4xl font-mono-bold leading-[1.05]">
              {testimonialsCopy.title}
            </h2>

            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              {testimonialsCopy.description}
            </p>

            <div className="mt-10 flex items-center gap-3">
              <ArrowButton
                direction="prev"
                onClick={() => {
                  if (total <= 1) return
                  const now = Date.now()
                  if (now - lastInputAtRef.current < INPUT_DEBOUNCE_MS) return
                  lastInputAtRef.current = now
                  if (rotateTimeoutRef.current) clearTimeout(rotateTimeoutRef.current)
                  setActiveIndex((i) => (i - 1 + total) % total)
                }}
                label="Previous testimonial"
              />
              <ArrowButton
                direction="next"
                onClick={() => {
                  if (total <= 1) return
                  const now = Date.now()
                  if (now - lastInputAtRef.current < INPUT_DEBOUNCE_MS) return
                  lastInputAtRef.current = now
                  if (rotateTimeoutRef.current) clearTimeout(rotateTimeoutRef.current)
                  setActiveIndex((i) => (i + 1) % total)
                }}
                label="Next testimonial"
              />
            </div>
          </div>

          <div className="relative w-full max-w-2xl overflow-hidden lg:justify-self-start min-h-[220px] sm:min-h-[260px] md:min-h-[280px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={t ? String(activeIndex) : "empty"}
                className="absolute inset-x-0 top-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.2,
                  ease: "easeOut",
                }}
              >
                <Quote className="h-12 w-12 text-foreground fill-foreground" />

                <p className="mt-6 text-pretty text-xl font-medium leading-relaxed text-muted-foreground sm:text-2xl md:text-3xl">
                  {t?.quote}
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <Avatar className="h-11 w-11">
                    {t?.avatarSrc ? (
                      <AvatarImage
                        src={t.avatarSrc}
                        alt={t.name}
                        className="object-cover"
                      />
                    ) : null}
                    <AvatarFallback className="font-medium">
                      {t?.avatarFallback}
                    </AvatarFallback>
                  </Avatar>

                  <div className="leading-tight">
                    <div className="font-semibold text-foreground">{t?.name}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{t?.title}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
