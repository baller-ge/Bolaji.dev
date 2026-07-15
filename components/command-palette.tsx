"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  ArrowRight,
  Briefcase,
  Home,
  Mail,
  Monitor,
  Moon,
  ShieldCheck,
  Sun,
  UserCircle2,
} from "lucide-react";
import styles from "./command-palette.module.css";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const go = (path: string) => {
    setOpen(false);
    router.push(path);
  };

  const applyTheme = (t: "light" | "dark" | "system") => {
    setTheme(t);
    setOpen(false);
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette"
      overlayClassName={styles.overlay}
      contentClassName={styles.dialog}
    >
      <Command.Input
        placeholder="Type a command, page, or search..."
        className={styles.input}
      />
      <Command.List className={styles.list}>
        <Command.Empty className={styles.empty}>
          No matches. Try &ldquo;projects&rdquo; or &ldquo;theme&rdquo;.
        </Command.Empty>

        <Command.Group heading="Navigate" className={styles.group}>
          <Item icon={<Home size={16} />} onSelect={() => go("/")}>
            Home
          </Item>
          <Item icon={<Briefcase size={16} />} onSelect={() => go("/projects")}>
            Projects
          </Item>
          <Item
            icon={<ShieldCheck size={16} />}
            onSelect={() => go("/services")}
          >
            Services
          </Item>
          <Item icon={<UserCircle2 size={16} />} onSelect={() => go("/about")}>
            About
          </Item>
          <Item icon={<Mail size={16} />} onSelect={() => go("/contact")}>
            Contact
          </Item>
        </Command.Group>

        <Command.Group heading="Theme" className={styles.group}>
          <Item icon={<Sun size={16} />} onSelect={() => applyTheme("light")}>
            Light
          </Item>
          <Item icon={<Moon size={16} />} onSelect={() => applyTheme("dark")}>
            Dark
          </Item>
          <Item
            icon={<Monitor size={16} />}
            onSelect={() => applyTheme("system")}
          >
            System
          </Item>
        </Command.Group>

        <Command.Group heading="Reach out" className={styles.group}>
          <Item
            icon={<Mail size={16} />}
            onSelect={() => {
              window.location.href = "mailto:abdulbasithamzat@gmail.com";
              setOpen(false);
            }}
          >
            Email
          </Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}

function Item({
  icon,
  children,
  onSelect,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  onSelect: () => void;
}) {
  return (
    <Command.Item className={styles.item} onSelect={onSelect}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{children}</span>
      <ArrowRight size={14} className={styles.arrow} />
    </Command.Item>
  );
}
