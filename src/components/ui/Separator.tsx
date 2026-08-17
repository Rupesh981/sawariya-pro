import * as React from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "bg-border shrink-0",
        orientation === "horizontal" ? "w-full h-px" : "h-full w-px",
        className
      )}
      role={decorative ? "none" : "separator"}
      aria-orientation={orientation}
      {...props}
    />
  )
);
Separator.displayName = "Separator";

export { Separator };