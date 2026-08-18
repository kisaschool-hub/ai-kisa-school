import { Link } from "@tanstack/react-router";
import { Menu, GraduationCap } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:h-20">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={`${SITE.name} home`}>
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
            <GraduationCap className="size-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-semibold leading-tight">
              AI KISA School
            </span>
            <span className="block truncate text-xs text-muted-foreground">
              Free education. Real futures.
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary bg-secondary" }}
              inactiveProps={{ className: "text-foreground/75" }}
              className="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="ml-2">
            <Link to="/admission">Apply free</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/admission">Apply free</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu" className="min-h-11 min-w-11">
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm">
              <SheetTitle className="px-4 pt-4 font-display text-lg">Menu</SheetTitle>
              <nav aria-label="Mobile" className="mt-4 flex flex-col gap-1 px-4 pb-6">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "bg-secondary text-primary" }}
                    className="rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-3">
                  <Link to="/admission" onClick={() => setOpen(false)}>
                    Apply free
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
