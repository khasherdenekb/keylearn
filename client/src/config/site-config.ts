interface NavItem {
  title: string
  href: string
}

interface NavConfig {
  mainNav: NavItem[]
}

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Login",
      href: "/login",
    },
    {
      title: "Sign Up",
      href: "/sign-up",
    },
  ],
}

export const siteConfig = {
  name: "Keylearn",
  url: "https://ui.shadcn.com",
  ogImage: "https://ui.shadcn.com/og.jpg",
  description: "A blog app built with Next.js, Shadcn UI, and Tailwind CSS.",
  links: {
    twitter: "https://github.com/khasherdenekb",
    github: "https://github.com/khasherdenekb",
  },
}

export type SiteConfig = typeof siteConfig
