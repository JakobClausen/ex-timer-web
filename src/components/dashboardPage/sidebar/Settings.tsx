import React from "react";
import { SectionButton } from "./SectionButton";

interface SettingsProps {}

export const Settings: React.FC<SettingsProps> = () => {
  return <SectionButton endpoint="settings" name="Settings" />;
};
