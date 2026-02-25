import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
export function ArrowButton({
    direction,
    onClick,
    label,
  }: {
    direction: "prev" | "next"
    onClick: () => void
    label: string
  }) {
    const Icon = direction === "prev" ? ArrowLeft : ArrowRight
  
    return (
      <Button
        type="button"
        size="icon"
        aria-label={label}
        onClick={onClick}
        className="h-10 w-10 bg-foreground text-background hover:bg-foreground/90 cursor-pointer"
      >
        <Icon className="h-4 w-4" />
      </Button>
    )
  }