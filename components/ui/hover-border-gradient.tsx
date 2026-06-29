"use client";
import React from "react";

type HoverBorderGradientProps = {
  as?: React.ElementType;
  containerClassName?: string;
  className?: string;
  variant?: "dark" | "light";
  children?: React.ReactNode;
  [key: string]: unknown;
};

export function HoverBorderGradient({
  children,
  containerClassName = "",
  className = "",
  variant = "dark",
  as: Tag = "button",
  ...props
}: HoverBorderGradientProps) {
  return React.createElement(
    Tag,
    {
      className: `hbg-${variant} inline-flex items-center gap-2.5 px-6 py-3 ${className} ${containerClassName}`,
      ...props,
    },
    children,
  );
}
