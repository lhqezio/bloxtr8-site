import { Card } from '@/components/ui/card'
import { Shield } from 'lucide-react'
import { StripeLogo} from '@/components/logos/StripeLogo'
import {DiscordLogo} from '@/components/logos/DiscordLogo'
import {RobloxLogo} from '@/components/logos/RobloxLogo'

export default function Features() {
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
                            className="**:fill-foreground flex h-44 flex-col justify-between pt-8">
                            
                                <div className="**:fill-foreground grid w-full max-w-full grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-4">
                                    <div className="ml-auto blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <DiscordLogo className="size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Discord</span>
                                        </Card>
                                    </div>
                                    <div className="ml-auto">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <StripeLogo className="size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Stripe</span>
                                        </Card>
                                    </div>
                                    <div className="ml-auto blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <DiscordLogo className="size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Figma</span>
                                        </Card>
                                    </div>
                                    <div className="mr-auto">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <DiscordLogo className="size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Discord</span>
                                        </Card>
                                    </div>
                                    <div className="blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <DiscordLogo className="size-3 sm:size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Firebase</span>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card className="shadow-foreground/10 mx-auto flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <DiscordLogo className="size-3 sm:size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Bloxtr8</span>
                                        </Card>
                                    </div>
                                    <div className="ml-auto blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <DiscordLogo className="size-3 sm:size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Twilio</span>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card className="shadow-foreground/10 mx-auto flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <RobloxLogo className="size-3 sm:size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Roblox</span>
                                        </Card>
                                    </div>
                                    <div className="blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <DiscordLogo className="size-3 sm:size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Clerk </span>
                                        </Card>
                                    </div>
                                </div>
                            
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
                        <h3 className="font-medium">Enterprise Ready</h3>
                        <p className="text-muted-foreground text-sm">Sell confidently with enterprise-grade security and reliability.</p>
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
                        className="row-span-2 grid grid-rows-subgrid">
                        <div className="space-y-2">
                            
                            <h3 className="text-foreground font-medium">Security First</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Built with security in mind.</p>
                        </div>

                        <div className="pointer-events-none relative -ml-7 flex size-44 items-center justify-center pt-5">
                            <Shield className="absolute inset-0 top-2.5 size-full stroke-[0.1px] opacity-15" />
                            <Shield className="size-32 stroke-[0.1px]" />
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}