import { LuArrowRight } from "react-icons/lu";

import Button from "./Button";

export default function Header() {
  return (
    <div className="flex gap-2">
      <Button type="filled">
        <LuArrowRight />
        Log in
      </Button>
      <Button>
        Sign up
        <LuArrowRight />
      </Button>
    </div>
  );
}
