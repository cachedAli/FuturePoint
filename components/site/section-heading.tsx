import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  heading,
  body,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "inline-block text-xs font-semibold uppercase tracking-[0.2em]",
            light ? "text-lime" : "text-lime"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "section-title",
          light ? "text-white" : "text-charcoal"
        )}
      >
        {heading}
      </h2>
      {body && (
        <p
          className={cn(
            "text-lg leading-relaxed",
            light ? "text-silver" : "text-muted-foreground"
          )}
        >
          {body}
        </p>
      )}
    </div>
  );
}
