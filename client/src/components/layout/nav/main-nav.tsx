"use client"

import Link from "next/link"
import { siteConfig } from "@/config/site-config"
import { Icons } from "@/components/features/icons"

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Icons.Logo className="size-5" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name} .
        </span>
      </Link>
    </div>
  )
}
