import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/content/profile";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Yulia Vorotintseva, home">
          YV<span>.</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#about">About</Link>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="button button-small" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
