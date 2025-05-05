import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center uppercase body-tiny-600 justify-center rounded-[2px] border px-2 py-0.5 w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        soldOut: "text-white bg-gray-400 dark:bg-gray-600",
        bestSeller: "text-white bg-secondary-500 dark:bg-secondary-400",
        sales: "text-white bg-success-500 dark:bg-success-400",
        discount: "text-gray-900 bg-warning-400 border-none dark:text-gray-900 dark:bg-warning-300",
        hot: "text-white bg-danger-500 dark:bg-danger-400",
      },
    },
    defaultVariants: {
      variant: "discount",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
