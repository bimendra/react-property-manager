import { LuBell } from "react-icons/lu";

import Button from "./Button";

export default function Header() {
  return (
    <div className="flex gap-2">
      <Button iconOnly>
        <LuBell />
      </Button>
    </div>
  );
}
