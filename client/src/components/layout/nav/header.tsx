import Link from "next/link"
import { Button } from "../../ui/button"
import { CommandMenu } from "./command-menu"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"
import { siteConfig } from "@/config/site-config"
import { Icons } from "@/components/features/icons"
import { ModeSwitcher } from "./mode-switcher"

export async function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div>
        <div className="flex h-14 items-center">
          <MainNav />
          <MobileNav />
          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <CommandMenu />
            </div>
            <nav className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.GitHub className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <ModeSwitcher />
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
