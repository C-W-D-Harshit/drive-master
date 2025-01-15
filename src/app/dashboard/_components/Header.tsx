"use client";

import {
  BellIcon,
  SearchIcon,
  SettingsIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import useOperatingSystem from "@/hooks/use-operating-system";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  /**
   * Get the appropriate keyboard shortcut text based on OS
   */
  const getShortcutText = (): string => {
    switch (os) {
      case "windows":
      case "linux":
        return "Ctrl + K";
      case "macos":
        return "⌘ + K";
      default:
        return "Ctrl + K";
    }
  };

  const os = useOperatingSystem();
  console.log(os);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="w-full h-20 border-b flex items-center justify-between px-8">
      <p className="text-lg font-semibold">File Manager</p>
      <div
        role="button"
        onClick={() => setOpen(!open)}
        className="absolute cursor-pointer select-none left-1/2 -translate-x-1/2 w-full max-w-lg bg-accent text-accent-foreground border border-border rounded-lg px-3 h-10 flex items-center justify-between"
      >
        <div className="flex items-center gap-2.5">
          <SearchIcon className="w-4 h-4" />
          <p className="text-sm">Search here</p>
        </div>
        <div className="flex items-center gap-2.5">
          <p className="text-sm">{getShortcutText()}</p>
          <SlidersHorizontalIcon className="w-4 h-4" />
        </div>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="rounded-full">
          <BellIcon />
        </Button>
        <Link href="/dashboard/settings">
          <Button variant="ghost" size="icon" className="rounded-full">
            <SettingsIcon />
          </Button>
        </Link>
        <Avatar className="ml-2">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
