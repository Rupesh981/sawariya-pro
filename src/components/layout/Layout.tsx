import * as React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { Toaster } from "sonner";

export function Layout() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pt-16 lg:pt-20" role="main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster
        position="bottom-right"
        toastOptions={{
          classNames: {
            toast: "bg-card border-border",
            description: "text-muted-foreground",
            actionButton: "bg-accent-teal hover:bg-accent-teal/90",
            cancelButton: "bg-secondary hover:bg-secondary/80",
          },
        }}
      />
    </>
  );
}