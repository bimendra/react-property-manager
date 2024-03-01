import { HtmlHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "default" | "filled" | "outline" | "link" | "ghost";

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  type?: ButtonVariant;
  chidren?: ReactNode;
  iconOnly?: boolean;
  disabled?: boolean;
}

export default function Button({
  type = "default",
  children,
  iconOnly = false,
}: ButtonProps) {
  const classNames: {
    [V in ButtonVariant]: string;
  } = {
    default:
      "text-blue-700 bg-blue-50 border-blue-50 hover:bg-blue-100 hover:border-blue-100 active:bg-blue-50  active:border-blue-50 focus:ring-blue-200 focus:active:ring-transparent",
    filled:
      "text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600 active:bg-blue-500 active:border-blue-500 focus:ring-blue-300 focus:active:ring-transparent",
    outline:
      "text-slate-700 bg:transparent border-slate-400 hover:bg-slate-300 hover:border-slate-400 active:bg-slate-200 active:border-slate-400 focus:ring-slate-200 active:focus:ring-transparent",
    link: "text-slate-700 bg-transparent border-transparent hover:text-blue-700 hover:underline focus:ring-slate-200 active:focus:ring-transparent p-0",
    ghost:
      "text-button-neutral bg-button-ghost border-button-ghost hover:bg-button-ghost-hover active:bg-button-ghost-active hover:border-button-ghost-hover active:border-button-ghost-active focus:ring-ghost-focus border-transparent focus:active:ring-transparent",
  };

  let paddingClasses: string;
  if (type === "link") {
    paddingClasses = "px-2";
  } else if (iconOnly) {
    paddingClasses = "p-[calc(0.5rem-1px)]";
  } else {
    paddingClasses = "px-[calc(1.25rem-1px)] py-[calc(0.5rem-1px)]";
  }

  return (
    <button
      className={`inline-flex items-center gap-2 rounded-md border-2 ${paddingClasses}  text-sm font-medium outline-none ring ring-transparent ${classNames[type]}`}
    >
      {children}
    </button>
  );
}
