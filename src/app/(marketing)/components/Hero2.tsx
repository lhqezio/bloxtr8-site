'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Safari } from '@/components/ui/safari'
import {
    ChevronRight,
    Shield,
    Zap,
    Star,
    Heart,
    Globe,
    Rocket,
    Sparkles,
    Crown,
    CirclePlay,
} from 'lucide-react'

// Smooth Floating Graphics Component (ported from `Hero.tsx`)
const SmoothGraphics = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
            <motion.div
                className="absolute top-20 left-20 text-pink-500"
                animate={{ y: [0, -15, 0], x: [0, 8, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}>
                <Star size={20} />
            </motion.div>

            <motion.div
                className="absolute top-32 right-32 text-red-500"
                animate={{ y: [0, 12, 0], x: [0, -10, 0], rotate: [0, -4, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}>
                <Heart size={24} />
            </motion.div>

            <motion.div
                className="absolute bottom-40 left-40 text-cyan-500"
                animate={{ y: [0, -18, 0], x: [0, 15, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}>
                <Globe size={22} />
            </motion.div>

            <motion.div
                className="absolute top-60 right-20 text-orange-500"
                animate={{ y: [0, 16, 0], x: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                <Rocket size={26} />
            </motion.div>

            <motion.div
                className="absolute bottom-60 right-40 text-indigo-500"
                animate={{ y: [0, -12, 0], x: [0, 18, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 3 }}>
                <Sparkles size={18} />
            </motion.div>

            <motion.div
                className="absolute top-40 left-60 text-emerald-500"
                animate={{ y: [0, 20, 0], x: [0, -12, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 5 }}>
                <Crown size={28} />
            </motion.div>

            <motion.div
                className="absolute top-80 left-20 text-purple-500"
                animate={{ y: [0, -14, 0], x: [0, 10, 0], rotate: [0, 4, 0] }}
                transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}>
                <Shield size={20} />
            </motion.div>

            <motion.div
                className="absolute bottom-20 right-60 text-blue-500"
                animate={{ y: [0, 18, 0], x: [0, -14, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}>
                <Zap size={24} />
            </motion.div>

            <motion.div
                className="absolute top-24 right-60 w-16 h-16 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-xl"
                animate={{ y: [0, -20, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
                className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-xl"
                animate={{ y: [0, 15, 0], x: [0, -10, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            />

            <motion.div
                className="absolute top-80 left-80 w-18 h-18 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-xl"
                animate={{ y: [0, -12, 0], x: [0, 20, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 21, repeat: Infinity, ease: 'easeInOut', delay: 4.5 }}
            />

            <motion.div
                className="absolute bottom-1/3 right-1/2 w-18 h-18 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full blur-xl"
                animate={{ y: [0, 22, 0], x: [0, -18, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
        </div>
    )
}
const youtubeDemoUrl = "https://www.youtube.com/watch?v=z5QTJ_-0cp0&feature=youtu.be"
const pilotUrl = "https://pilot.bloxtr8.com"

export default function HeroSection() {
    return (
        <>
            <main className="overflow-hidden">
                <section className="bg-background min-h-[100svh]">
                    <div className="relative w-full min-h-[100svh] flex items-center py-20 sm:py-24 lg:py-28">
                        <div className="grid-bg absolute inset-0 -z-20" />

                        

                        <SmoothGraphics />

                        <div className="relative z-10 mx-auto w-full max-w-[min(96vw,2800px)] px-4 sm:px-6 lg:px-8">
                            <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-3">
                                <div className="w-full max-w-xl max-sm:px-4 lg:col-span-1 lg:max-w-none">
                                     <h1 className="text-balance text-5xl font-medium leading-[1.05] sm:text-6xl sm:leading-[1.05] xl:text-7xl xl:leading-[1.03] 2xl:text-8xl">Sell faster. Trade safer.</h1>
                                     <p className="text-muted-foreground mt-4 text-balance text-base sm:text-lg xl:text-xl 2xl:text-2xl">Bloxtr8 is your all-in-one platform for studios and independent developers to sell their games and assets on Roblox.</p>

                                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                                        <Button asChild size="lg" className="px-6">
                                            <a href={pilotUrl} target="_blank" rel="noopener noreferrer">
                                                <span className="text-nowrap">Start Trading</span>
                                                <ChevronRight className="opacity-50" />
                                            </a>
                                        </Button>

                                        <Button asChild size="lg" className="px-6" variant="outline">
                                            <a href={youtubeDemoUrl} target="_blank" rel="noopener noreferrer">
                                                <span className="text-nowrap">Watch Demo</span>
                                                <CirclePlay className="h-5 w-5 opacity-70" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="w-full lg:col-span-2 lg:max-w-none">
                                    <Safari videoSrc={youtubeDemoUrl} mediaType="youtube" mode="simple" url={pilotUrl} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}