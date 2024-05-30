"use client";

import { useTheme } from "next-themes";
import { Switch, SwitchProps } from "@nextui-org/react";
import { MoonIcon } from "@/assets/icons/MoonIcon";
import { SunIcon } from "@/assets/icons/SunIcon";

export function ThemeSwitcher(props: SwitchProps) {
  const { setTheme } = useTheme();

  return (
    <Switch
      size="lg"
      color="success"
      onChange={(e) => {
        setTheme(e.target.checked ? "dark" : "light");
      }}
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      {...props}
    />
  );
}
