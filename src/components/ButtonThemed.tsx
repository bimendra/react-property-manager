import { HtmlHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "default" | "filled" | "outline" | "link" | "ghost";

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  type?: ButtonVariant;
  chidren?: ReactNode;
  iconOnly?: boolean;
  disabled?: boolean;
}

export default function ButtonThemed({
  type = "default",
  children,
  iconOnly = false,
}: ButtonProps) {
  const classNames: {
    [V in ButtonVariant]: string;
  } = {
    default:
      "text-accent bg-button-default border-button-default hover:bg-button-default-hover active:bg-button-default-active hover:border-button-default-hover <active:bord></active:bord>er-button-default-active focus:ring-default-focus focus:active:ring-transparent",
    filled:
      "text-invert bg-button-filled border-button-filled hover:bg-button-filled-hover active:bg-button-filled-active hover:border-button-filled-hover active:border-button-filled-active focus:ring-filled-focus focus:active:ring-transparent",
    outline: "",
    link: "text-red-700 bg:transparent border:transparent",
    ghost:
      "text-button-neutral bg-button-ghost border-button-ghost hover:bg-button-ghost-hover active:bg-button-ghost-active hover:border-button-ghost-hover active:border-button-ghost-active focus:ring-ghost-focus border-transparent focus:active:ring-transparent",
  };

  return (
    <button
      className={`inline-flex items-center gap-2 rounded-md border ${iconOnly ? "px-[calc(0.5rem-1px)]" : "px-[calc(1.5rem-1px)]"} py-[calc(0.5rem-1px)] text-sm font-medium outline-none ring ring-transparent ${classNames[type]}`}
    >
      {children}
    </button>
  );
}
