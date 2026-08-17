import * as React from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = React.useState(false);
  const whatsappNumber = "917015290782";
  const defaultMessage = "Hi, I'd like to book an appointment at Sawariya Diagnostic.";

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Window */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-80 lg:w-96 bg-card border border-border rounded-2xl shadow-xl overflow-hidden animate-slide-up">
            <div className="bg-accent-teal text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Sawariya Diagnostic</p>
                  <p className="text-xs opacity-80">Typically replies within minutes</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-sm text-foreground">
                Hello! How can we help you today? You can book an appointment, ask about tests, or get information about our services.
              </p>
              <div className="space-y-2">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full btn-primary py-3 text-sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </button>
                <button
                  onClick={() => window.location.href = "tel:+917015290782"}
                  className="w-full btn-outline py-3 text-sm"
                >
                  Call Us Instead
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "fixed bottom-6 right-6 z-50 w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-accent-teal text-white shadow-lg",
            "flex items-center justify-center transition-all duration-300",
            "hover:scale-105 hover:shadow-xl",
            "focus:outline-none focus:ring-2 focus:ring-accent-teal focus:ring-offset-2",
            isOpen && "rotate-45"
          )}
          aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
          aria-expanded={isOpen}
        >
          <MessageCircle className="w-7 h-7 lg:w-8 lg:h-8" />
        </button>
      </div>
    </>
  );
}