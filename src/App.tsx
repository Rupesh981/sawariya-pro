import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Layout } from "./components/layout/Layout";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { PackagesSection } from "./components/sections/PackagesSection";
import { HomeCollectionSection } from "./components/sections/HomeCollectionSection";
import { TeamSection } from "./components/sections/TeamSection";
import { ContactSection } from "./components/sections/ContactSection";
import "./index.css";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/tests" element={<TestsPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/home-collection" element={<HomeCollectionPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
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
    </QueryClientProvider>
  );
}

// Page components that compose sections
function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <HomeCollectionSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}

function TestsPage() {
  return <PackagesSection />;
}

function PackagesPage() {
  return <PackagesSection />;
}

function AboutPage() {
  return <AboutSection />;
}

function TeamPage() {
  return <TeamSection />;
}

function HomeCollectionPage() {
  return <HomeCollectionSection />;
}

function ContactPage() {
  return <ContactSection />;
}

export default App;