"use client"

import Link from "next/link"
import Gravity, { MatterBody } from "@/components/fancy/physics/gravity"
import { Card } from "@/components/ui/card"
import { ArrowUpRight, Shield } from "lucide-react"
import { StripeLogo } from "@/components/logos/StripeLogo"
import { DiscordLogo } from "@/components/logos/DiscordLogo"
import { RobloxLogo } from "@/components/logos/RobloxLogo"

export default function Features() {
    const integrationPillClass =
        "shadow-foreground/10 flex h-10 w-fit items-center gap-2 rounded-xl px-4 sm:h-12 sm:px-5"

    const integrationPillIconClass = "size-5 sm:size-6"

    const integrationPillTextClass = "text-nowrap font-medium text-sm sm:text-base"

    return (
        <section className="@container py-8 sm:py-12 md:py-16 lg:py-24 ">
            <div className="container-narrow px-4 sm:px-6">
                <div className="text-left mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono-bold mb-3 sm:mb-4">
                        Powerful Features for Modern Studios
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Everything you need to connect, secure, and sell your creations in Roblox effortlessly.
                    </p>
                </div>
                <div className="@xl:grid-cols-2 grid gap-3 *:p-6">
                    <Card
                        className="row-span-2 grid grid-rows-subgrid">
                        <div className="space-y-2">
                            <h3 className="text-foreground font-medium">Seamless Integrations</h3>
                            <p className="text-muted-foreground text-sm">Live directly in your Discord server and verify trades with just a few clicks.</p>
                        </div>
                        <div
                            aria-hidden
                            className="**:fill-foreground relative h-44 pt-8 overflow-hidden"
                        >
                            <Gravity gravity={{ x: 0, y: 1 }} className="inset-0">
                                <MatterBody
                                    isDraggable={true}
                                    matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                                    x="15%"
                                    y="20%"
                                >
                                    <Card className={integrationPillClass}>
                                            <DiscordLogo className={integrationPillIconClass} />
                                            <span className={integrationPillTextClass}>Discord</span>
                                    </Card>
                                </MatterBody>

                                <MatterBody
                                    isDraggable={true}
                                    matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                                    x="55%"
                                    y="18%"
                                >
                                    <Card className={integrationPillClass}>
                                            <StripeLogo className={integrationPillIconClass} />
                                            <span className={integrationPillTextClass}>Stripe</span>
                                    </Card>
                                </MatterBody>

                                <MatterBody
                                    isDraggable={true}
                                    matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                                    x="35%"
                                    y="62%"
                                >
                                    <Card className={integrationPillClass}>
                                            <RobloxLogo className={integrationPillIconClass} />
                                            <span className={integrationPillTextClass}>Roblox</span>
                                    </Card>
                                </MatterBody>

                                <MatterBody
                                    isDraggable={true}
                                    matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                                    x="75%"
                                    y="60%"
                                    angle={-8}
                                >
                                    <Card className={integrationPillClass}>
                                            <DiscordLogo className={integrationPillIconClass} />
                                            <span className={integrationPillTextClass}>Bloxtr8</span>
                                    </Card>
                                </MatterBody>
                            </Gravity>
                        </div>
                    </Card>
                    <Card
                        className="row-span-2 grid grid-rows-subgrid overflow-hidden">
                        <div className="space-y-2">
                            <h3 className="text-foreground font-medium">Real-time Sync</h3>
                            <p className="text-muted-foreground text-sm">Keep your data synchronized across all platforms automatically.</p>
                        </div>
                        <div
                            aria-hidden
                            className="relative h-52 translate-y-4">
                            <div className="bg-foreground/15 absolute inset-0 mx-auto w-px"></div>
                            <div className="absolute -inset-x-24 top-4 aspect-square rounded-full border"></div>
                            <div className="border-primary mask-l-from-50% mask-l-to-90% mask-r-from-50% mask-r-to-50% absolute -inset-x-24 top-4 aspect-square rounded-full border"></div>
                            <div className="absolute -inset-x-14 top-28 aspect-square rounded-full border"></div>
                            <div className="mask-r-from-50% mask-r-to-90% mask-l-from-50% mask-l-to-50% absolute -inset-x-14 top-28 aspect-square rounded-full border border-lime-500"></div>
                        </div>
                    </Card>
                    <Card
                        className="row-span-2 grid grid-rows-subgrid overflow-hidden">
                        <div className="space-y-2">
                        <h3 className="font-medium">
                            <Link href="/features" className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline focus:outline-none focus:underline">
                                The complete toolkit
                                <ArrowUpRight className="size-4 shrink-0" aria-hidden />
                            </Link>
                        </h3>
                        <p className="text-muted-foreground text-sm">Escrow protection, Discord workflows, analytics, and more.</p>
                        </div>
                        <div
                            aria-hidden
                            className="*:bg-foreground/15 flex h-44 justify-between pb-6 pt-12 *:h-full *:w-px">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="bg-primary!"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="bg-primary!"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="bg-primary!"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="bg-primary!"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="bg-primary!"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="bg-primary!"></div>
                        </div>
                    </Card>
                    <Card
                        className="row-span-2 grid grid-rows-subgrid overflow-hidden">
                        <div className="space-y-2">
                            
                            <h3 className="text-foreground font-medium">Security First</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Sell confidently with enterprise-grade security and reliability.</p>
                        </div>

                        <div className="pointer-events-none flex h-44 w-full items-center overflow-hidden">
                            <div className="flex flex-nowrap *:shrink-0">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <div
                                        // eslint-disable-next-line react/no-array-index-key
                                        key={i}
                                        className="pointer-events-none relative -ml-7 flex size-40 items-center justify-center pt-5"
                                    >
                                        <Shield className="absolute inset-0 top-2.5 size-full stroke-[0.1px] opacity-15" />
                                        <Shield className="size-32 stroke-[0.1px]" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}