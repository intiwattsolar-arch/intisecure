import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
  padded?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, padded = true, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        "relative",
        padded && "py-16 md:py-24 lg:py-32",
        className
      )}
      {...props}
    >
      {container ? (
        <div className="section-container">{children}</div>
      ) : (
        children
      )}
    </section>
  )
);
Section.displayName = "Section";

const SectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mb-12 md:mb-16", className)}
    {...props}
  />
));
SectionHeader.displayName = "SectionHeader";

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("h2 text-foreground mb-4", className)}
    {...props}
  />
));
SectionTitle.displayName = "SectionTitle";

const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-lg text-muted-foreground max-w-3xl", className)}
    {...props}
  />
));
SectionDescription.displayName = "SectionDescription";

export { Section, SectionHeader, SectionTitle, SectionDescription };
