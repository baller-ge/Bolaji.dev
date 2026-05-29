import * as runtime from "react/jsx-runtime";
import { Lead } from "./lead";
import { Callout } from "./callout";
import { Stat, StatGrid } from "./stat";
import { Demo } from "./demo";
import { Tag } from "./tag";
import { VariantSwitcher } from "@/components/demos/variant-switcher";
import { CursorTrail } from "@/components/demos/cursor-trail";
import { MagneticLinks } from "@/components/demos/magnetic-links";

const components = {
  Lead,
  Callout,
  Stat,
  StatGrid,
  Demo,
  Tag,
  VariantSwitcher,
  CursorTrail,
  MagneticLinks,
};

function useMDXComponent(code: string) {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
}

export function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
