import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeIndustrialVariants = cva(
  "inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-medium tracking-wide uppercase transition-colors",
  {
    variants: {
      variant: {
        default: "bg-muted text-muted-foreground",
        primary: "bg-primary/15 text-primary border border-primary/30",
        destructive: "bg-destructive/15 text-destructive border border-destructive/30",
        success: "bg-compliance-green/15 text-[hsl(142_60%_50%)] border border-compliance-green/30",
        warning: "bg-primary/10 text-primary border border-primary/20",
        outline: "border border-border text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeIndustrialProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeIndustrialVariants> {}

const BadgeIndustrial = React.forwardRef<HTMLDivElement, BadgeIndustrialProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(badgeIndustrialVariants({ variant, className }))}
      {...props}
    />
  )
);
BadgeIndustrial.displayName = "BadgeIndustrial";

export { BadgeIndustrial, badgeIndustrialVariants };
