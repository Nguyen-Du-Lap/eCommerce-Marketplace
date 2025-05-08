import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary-500 hover:text-white",
        primary:
          "bg-primary-500 text-primary-foreground shadow-xs hover:bg-primary hover:text-white",
        tertiary:
          "bg-white border border-primary-500 text-primary-500 shadow-xs hover:bg-gray-50 hover:text-primary hover:border-primary",
      },
      size: {
        default: "h-9 px-4 py-2",
      },
      icon: {
        none: "none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      icon: "none",
    },
  }
);

function RectangleButton({
  className,
  variant,
  size,
  icon,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="rectangleButton"
      className={cn(buttonVariants({ variant, size, icon, className }))}
      {...props}
    />
  );
}

export { RectangleButton, buttonVariants };
