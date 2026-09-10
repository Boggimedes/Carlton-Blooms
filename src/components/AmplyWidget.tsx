"use client";

import { useEffect, useRef } from "react";

const AMPLY_HOST = "https://giveamply.com";
const LOADER_SRC = `${AMPLY_HOST}/assets/js/standalone.js`;

export type AmplyWidgetOptions = {
  organization_id: string | number;
  submit_type?: "donation" | "button" | "watch" | "message" | "policy";
  donation_tiers?: number[];
  retry?: boolean;
  instant_match?: boolean;
  simple_match_display?: boolean;
  opt_in?: boolean;
  opt_in_text?: string;
  donate_button?: boolean;
  btn_class?: string;
  field_id?: Record<string, string>;
};

declare global {
  interface Window {
    loadAmplyWidget?: (options: AmplyWidgetOptions) => void;
    initAmplyWidget?: (options: AmplyWidgetOptions) => void;
  }
}

/**
 * Mounts Amply's donation + employer-matching widget into #amplyEmbed.
 * The loader pulls React 18, the widget bundle and the widget stylesheet
 * from giveamply.com, then calls window.initAmplyWidget.
 */
export function AmplyWidget({ options }: { options: AmplyWidgetOptions }) {
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const start = () => {
      if (typeof window.initAmplyWidget === "function") {
        window.initAmplyWidget(options);
      } else if (typeof window.loadAmplyWidget === "function") {
        window.loadAmplyWidget(options);
      }
    };

    if (window.loadAmplyWidget || window.initAmplyWidget) {
      start();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${LOADER_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.type = "module";
      script.src = LOADER_SRC;
      document.head.appendChild(script);
    }
    script.addEventListener("load", start);
    return () => script?.removeEventListener("load", start);
  }, [options]);

  return <div id="amplyEmbed" />;
}
