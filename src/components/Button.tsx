import { HtmlHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "default" | "filled" | "outline" | "link";

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  type?: ButtonVariant;
  chidren?: ReactNode;
  iconOnly?: boolean;
}

export default function Button({
  type = "default",
  children,
  iconOnly = false,
}: ButtonProps) {
  const classNames: {
    [Variant in ButtonVariant]: string;
  } = {
    default:
      "text-accent bg-button-default border-button-default hover:bg-button-default-hover active:bg-button-default-active hover:border-button-default-hover active:border-button-default-active focus:ring-default-focus",
    filled:
      "text-invert bg-button-filled border-button-filled hover:bg-button-filled-hover active:bg-button-filled-active hover:border-button-filled-hover active:border-button-filled-active focus:ring-filled-focus",
    outline: "",
    link: "",
  };

  return (
    <button
      className={`inline-flex items-center gap-2 rounded-md border ${iconOnly ? "px-[calc(0.5rem-1px)]" : "px-[calc(1.5rem-1px)]"} py-[calc(0.5rem-1px)] text-sm font-medium outline-none ring ring-transparent ${classNames[type]}`}
    >
      {children}
    </button>
  );
}
