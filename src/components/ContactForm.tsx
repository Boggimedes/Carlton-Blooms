"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(
          body?.message ?? "That did not go through. Please try again, or call us.",
        );
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-border bg-muted/50 p-8 text-center">
        <h3 className="font-serif text-xl font-semibold text-foreground">Thank you</h3>
        <p className="mt-2 text-muted-foreground">
          Your message is on its way. We will get back to you soon.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How would you like to help?"
          rows={5}
          required
        />
      </div>
      <Button type="submit" className="w-full sm:w-auto" disabled={status === "sending"}>
        <Send className="mr-2 h-4 w-4" />
        {status === "sending" ? "Sending…" : "Send Message"}
      </Button>
      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-destructive">
          {error}
        </p>
      )}
      <p className="text-xs text-muted-foreground">
        You can also call us at{" "}
        <a href="tel:+15038301805" className="underline hover:text-sage-dark">
          (503) 830-1805
        </a>
        .
      </p>
    </form>
  );
}
