import { ReactElement } from "react";

export interface ComponentType {
  link: string;
  icon: ReactElement;
  label: string;
}

export interface Skill {
  techName: string;
  symbol: ReactElement
}