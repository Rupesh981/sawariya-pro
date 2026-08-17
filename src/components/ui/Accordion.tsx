import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextType {
  type: "single" | "multiple";
  value: string | string[];
  onValueChange: (value: string | string[]) => void;
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

const useAccordionContext = () => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within Accordion");
  }
  return context;
};

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, type = "single", value, onValueChange, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState<string | string[]>(type === "single" ? "" : []);
    const controlled = value !== undefined;
    const currentValue = controlled ? value : internalValue;

    const handleValueChange = (newValue: string | string[]) => {
      if (!controlled) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    const contextValue = React.useMemo<AccordionContextType>(
      () => ({
        type,
        value: currentValue,
        onValueChange: handleValueChange,
      }),
      [type, currentValue, controlled]
    );

    return (
      <AccordionContext.Provider value={contextValue}>
        <div ref={ref} className={cn("w-full", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const { type, value: currentValue, onValueChange } = useAccordionContext();
    
    const isOpen = type === "single" 
      ? (typeof currentValue === "string" && currentValue === value)
      : (Array.isArray(currentValue) && currentValue.includes(value));

    const handleToggle = () => {
      if (type === "single") {
        onValueChange(isOpen ? "" : value);
      } else {
        const arrValue = Array.isArray(currentValue) ? currentValue : [];
        const newValue = arrValue.filter((v) => v !== value);
        if (!isOpen) {
          newValue.push(value);
        }
        onValueChange(newValue);
      }
    };

    return (
      <div
        ref={ref}
        className={cn("border-border border overflow-hidden rounded-xl", className)}
        {...props}
      >
        <AccordionHeader>
          <AccordionTrigger onClick={handleToggle} data-state={isOpen ? "open" : "closed"}>
            {children}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent data-state={isOpen ? "open" : "closed"}>
          {isOpen && <div>{children}</div>}
        </AccordionContent>
      </div>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

const AccordionHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("bg-background", className)} {...props}>
      {children}
    </div>
  )
);
AccordionHeader.displayName = "AccordionHeader";

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { value: itemValue } = useAccordionContext();
    const { type, value: currentValue } = useAccordionContext();
    
    // Explicit type guard for itemValue
    const itemValueStr: string = itemValue as string;
    
    const isOpen = type === "single" 
      ? (typeof currentValue === "string" && currentValue === itemValueStr)
      : (Array.isArray(currentValue) && currentValue.includes(itemValueStr));

    return (
      <button
        ref={ref}
        className={cn(
          "w-full flex items-center justify-between px-4 py-4 text-left font-medium transition-colors",
          "hover:bg-accent-teal/5 focus:outline-none focus:ring-2 focus:ring-accent-teal focus:ring-offset-2",
          className
        )}
        aria-expanded={isOpen}
        aria-controls={`${itemValueStr}-content`}
        id={`${itemValueStr}-trigger`}
        type="button"
        {...props}
      >
        <span>{children}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const { value: itemValue } = useAccordionContext();
    const { type, value: currentValue } = useAccordionContext();
    
    // Explicit type guard for itemValue
    const itemValueStr: string = itemValue as string;
    
    const isOpen = type === "single" 
      ? (typeof currentValue === "string" && currentValue === itemValueStr)
      : (Array.isArray(currentValue) && currentValue.includes(itemValueStr));

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          className
        )}
        id={`${itemValueStr}-content`}
        role="region"
        aria-labelledby={`${itemValueStr}-trigger`}
        {...props}
      >
        <div className="px-4 pb-4">{children}</div>
      </div>
    );
  }
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };