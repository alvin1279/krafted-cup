import { SearchIcon } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";

import { Field, FieldLabel } from "~/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "~/components/ui/input-group";

interface SearchBarProps {
  onValueChange: (value: string) => void;
}

export function SearchBar({ onValueChange }: SearchBarProps) {
  const [count, UpdateCount] = useState(0);
  const [value, setValue] = useState("");
  const inputElement = useRef<HTMLInputElement | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    inputElement.current?.focus();
    const handleSpecialKeyDown = (e: {
      key: string;
      preventDefault: () => void;
    }) => {
      if (e.key === "/") {
        inputElement.current?.focus();
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleSpecialKeyDown);
    return () => window.removeEventListener("keydown", handleSpecialKeyDown);
  }, []);

  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("Searching for:", value);
      setIsTyping(true);
      setValue("");
      inputElement.current?.blur();
      UpdateCount((prev) => prev + 1);
    } else {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-row w-full items-center gap-4 sm:gap-6">
      <FieldLabel
        htmlFor="inline-start-input"
        className="shrink-0 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
      >
        Products
      </FieldLabel>

      <InputGroup
        className={`
          flex-1 w-full
          transition-shadow ring-2 focus-within:ring-offset-2
          ${isTyping ? "ring-green-400" : "ring-blue-500"}
        `}
      >
        <InputGroupInput
          ref={inputElement}
          id="inline-start-input"
          placeholder="Search..."
          value={value}
          onChange={(e) => {
            onValueChange(e.target.value);
            setValue(e.target.value);
          }}
          onKeyDown={handleEnterKeyDown}
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
