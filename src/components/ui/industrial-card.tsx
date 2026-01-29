import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const industrialCardVariants = cva(
  "relative rounded-sm border transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-card border-border",
        elevated: "bg-gradient-to-b from-card to-background border-border shadow-card",
        glow: "bg-card border-primary/30 shadow-glow",
        outlined: "bg-transparent border-border hover:border-primary/50",
        critical: "bg-card border-destructive/50",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  }
);

export interface IndustrialCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof industrialCardVariants> {}

const IndustrialCard = React.forwardRef<HTMLDivElement, IndustrialCardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(industrialCardVariants({ variant, padding, className }))}
      {...props}
    />
  )
);
IndustrialCard.displayName = "IndustrialCard";

const IndustrialCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5", className)}
    {...props}
  />
));
IndustrialCardHeader.displayName = "IndustrialCardHeader";

const IndustrialCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-semibold leading-tight tracking-tight", className)}
    {...props}
  />
));
IndustrialCardTitle.displayName = "IndustrialCardTitle";

const IndustrialCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground leading-relaxed", className)}
    {...props}
  />
));
IndustrialCardDescription.displayName = "IndustrialCardDescription";

const IndustrialCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
IndustrialCardContent.displayName = "IndustrialCardContent";

export {
  IndustrialCard,
  IndustrialCardHeader,
  IndustrialCardTitle,
  IndustrialCardDescription,
  IndustrialCardContent,
  industrialCardVariants,
};
