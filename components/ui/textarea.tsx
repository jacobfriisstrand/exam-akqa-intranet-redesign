import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, value = "", ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-base bg-transparent px-3 py-2 text-base ring-1 ring-white placeholder:text-lightGray disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        value={value}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
