import { PersonIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <div className="flex">
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9">
        <PersonIcon />
      </button>
    </div>
  )
}
