import * as React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string | null;
  alt?: string;
  fallback?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  shape?: "circle" | "square";
}

const sizes = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
  "2xl": "h-24 w-24 text-2xl",
};

const shapes = {
  circle: "rounded-full",
  square: "rounded-xl",
};

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, fallback, size = "md", shape = "circle", ...props }, ref) => {
    const [imageError, setImageError] = React.useState(false);

    if (!src || imageError) {
      return (
        <div
          ref={ref}
          className={cn(
            "inline-flex items-center justify-center bg-accent-teal/10 font-medium text-accent-teal",
            sizes[size],
            shapes[shape],
            className
          )}
          {...props}
        >
          {fallback || (alt ? alt.slice(0, 2).toUpperCase() : "?")}
        </div>
      );
    }

    return (
      <div className={cn("relative overflow-hidden", shapes[shape], sizes[size], className)} {...props}>
        <img
          src={src}
          alt={alt || ""}
          onError={() => setImageError(true)}
          className="h-full w-full object-cover transition-opacity duration-300"
          loading="lazy"
        />
      </div>
    );
  }
);
Avatar.displayName = "Avatar";

export { Avatar };