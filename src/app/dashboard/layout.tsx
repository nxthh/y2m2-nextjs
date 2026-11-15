import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { ReactNode } from "react";

export default function DashboardLayout({
  children,
  products,
}: {
  children: ReactNode;
  products: ReactNode;
}) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="grid min-w-0 grid-cols-1 gap-6 py-4 md:py-6 xl:grid-cols-[minmax(0,2fr)_minmax(20rem,1fr)]">
              <main className="min-w-0">{children}</main>
              <aside className="min-w-0 border-t px-4 pt-6 xl:border-l xl:border-t-0 xl:pt-0">
                <h2 className="mb-4 text-xl font-semibold">Products</h2>
                {products}
              </aside>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
