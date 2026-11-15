"use client";

import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import { cn } from "cn";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarComponentProps {
  className?: string;
  logo: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu: MenuItem[];
  auth: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const defaultProps: NavbarComponentProps = {
  logo: {
    url: "/",
    src: "https://cdn.shadcnblocks.com/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  menu: [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },

    {
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      title: "About",
      url: "/about",
    },
  ],
  auth: {
    login: { title: "Login", url: "#" },
    signup: { title: "Sign up", url: "#" },
  },
};

const NavbarComponent = ({
  className,
  ...props
}: Partial<NavbarComponentProps>) => {
  const { logo, menu, auth } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-4", className)}>
      <div className="container">
        <nav className="hidden grid-cols-[1fr_auto_1fr] items-center lg:grid">
          <a
            href={logo.url}
            className="flex items-center gap-2 justify-self-start"
          >
            <Image
              width={200}
              height={200}
              src={logo.src}
              className="max-h-8 dark:invert"
              alt={logo.alt}
            />
            <span className="text-lg font-semibold tracking-tighter">
              {logo.title}
            </span>
          </a>
          <NavigationMenu className="justify-self-center">
            <NavigationMenuList>
              {menu.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex gap-2 justify-self-end">
            <Button
              variant="outline"
              size="sm"
              render={<a href={auth.login.url} />}
              nativeButton={false}
            >
              {auth.login.title}
            </Button>
            <Button
              size="sm"
              render={<a href={auth.signup.url} />}
              nativeButton={false}
            >
              {auth.signup.title}
            </Button>
          </div>
        </nav>

        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <Image
                width={200}
                height={200}
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink
              key={subItem.title}
              className="w-80"
              render={<SubMenuLink item={subItem} />}
            ></NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { NavbarComponent };
