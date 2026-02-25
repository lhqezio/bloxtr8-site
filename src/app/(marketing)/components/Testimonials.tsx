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
  const [direction, setDirection] = React.useState<1 | -1>(1)
  const prefersReducedMotion = useReducedMotion()

  const total = items.length

  React.useEffect(() => {
    setActiveIndex((i) => (total === 0 ? 0 : Math.min(i, total - 1)))
  }, [total])

  // Auto-advance to next testimonial every 5 seconds
  React.useEffect(() => {
    if (total <= 1) return
    const id = setInterval(() => {
      setDirection(1)
      setActiveIndex((i) => (i + 1) % total)
    }, 5000)
    return () => clearInterval(id)
  }, [total])

  const t = items[activeIndex]

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-8 sm:px-12 lg:px-16 xl:px-24">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm text-foreground">
              {testimonialsCopy.label}
            </div>

            <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl">
              {testimonialsCopy.title}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {testimonialsCopy.description}
            </p>

            <div className="mt-10 flex items-center gap-3">
              <ArrowButton
                direction="prev"
                onClick={() => {
                  if (total <= 1) return
                  setDirection(-1)
                  setActiveIndex((i) => (i - 1 + total) % total)
                }}
                label="Previous testimonial"
              />
              <ArrowButton
                direction="next"
                onClick={() => {
                  if (total <= 1) return
                  setDirection(1)
                  setActiveIndex((i) => (i + 1) % total)
                }}
                label="Next testimonial"
              />
            </div>
          </div>

          <div className="w-full max-w-2xl lg:justify-self-start">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={t ? String(activeIndex) : "empty"}
                custom={direction}
                variants={{
                  enter: (dir: 1 | -1) => ({
                    x: prefersReducedMotion ? 0 : dir === 1 ? 48 : -48,
                    opacity: prefersReducedMotion ? 1 : 0,
                  }),
                  center: { x: 0, opacity: 1 },
                  exit: (dir: 1 | -1) => ({
                    x: prefersReducedMotion ? 0 : dir === 1 ? -48 : 48,
                    opacity: prefersReducedMotion ? 1 : 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.28,
                  ease: "easeOut",
                }}
              >
                <Quote className="h-12 w-12 text-foreground fill-foreground" />

                <p className="mt-6 text-pretty text-2xl font-medium leading-relaxed text-muted-foreground sm:text-3xl">
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
