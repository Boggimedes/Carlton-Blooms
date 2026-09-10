import type { AmplyWidgetOptions } from "@/components/AmplyWidget";

/**
 * Organization ID from the Amply dashboard. The Stripe account (and its
 * publishable key) is attached to that organization inside Amply — the widget
 * fetches it at load time, so no key lives in this repo.
 */
export const AMPLY_ORGANIZATION_ID = 10446;

export const donationWidgetOptions: AmplyWidgetOptions = {
  organization_id: AMPLY_ORGANIZATION_ID,
  submit_type: "donation",
  donation_tiers: [25, 50, 100, 250, 500],
  retry: true,
  instant_match: true,
  simple_match_display: true,
};
