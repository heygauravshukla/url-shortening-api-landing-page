import { cn } from "@/lib/utils";

interface TypographyH2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
}

export default function TypographyH2({
  className,
  children,
  ...props
}: TypographyH2Props) {
  return (
    <h2
      className={cn("text-4xl font-bold -tracking-2 lg:text-5xl", className)}
      {...props}
    >
      {children}
    </h2>
  );
}
