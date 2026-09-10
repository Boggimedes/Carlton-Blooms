import { t as beetopia_beds_bloom_default } from "./beetopia-beds-bloom-BfhKYumX.js";
import { useEffect, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Building2, HeartHandshake, Leaf, Search, Sprout, TreeDeciduous } from "lucide-react";
//#region src/components/AmplyWidget.tsx
var LOADER_SRC = `https://giveamply.com/assets/js/standalone.js`;
/**
* Mounts Amply's donation + employer-matching widget into #amplyEmbed.
* The loader pulls React 18, the widget bundle and the widget stylesheet
* from giveamply.com, then calls window.initAmplyWidget.
*/
function AmplyWidget({ options }) {
	const started = useRef(false);
	useEffect(() => {
		if (started.current) return;
		started.current = true;
		const start = () => {
			if (typeof window.initAmplyWidget === "function") window.initAmplyWidget(options);
			else if (typeof window.loadAmplyWidget === "function") window.loadAmplyWidget(options);
		};
		if (window.loadAmplyWidget || window.initAmplyWidget) {
			start();
			return;
		}
		let script = document.querySelector(`script[src="${LOADER_SRC}"]`);
		if (!script) {
			script = document.createElement("script");
			script.type = "module";
			script.src = LOADER_SRC;
			document.head.appendChild(script);
		}
		script.addEventListener("load", start);
		return () => script?.removeEventListener("load", start);
	}, [options]);
	return /* @__PURE__ */ jsx("div", { id: "amplyEmbed" });
}
var donationWidgetOptions = {
	organization_id: 10446,
	submit_type: "donation",
	donation_tiers: [
		25,
		50,
		100,
		250,
		500
	],
	retry: true,
	instant_match: true,
	simple_match_display: true
};
//#endregion
//#region src/routes/donate.tsx?tsr-split=component
var impact = [
	{
		icon: Sprout,
		title: "$25 plants a pollinator patch",
		body: "Native starts — checkermallow, coreopsis, goldenrod — that feed bees from spring through fall."
	},
	{
		icon: TreeDeciduous,
		title: "$100 restores a bed",
		body: "Soil prep, mulch and plants to turn a strip of gravel into living habitat."
	},
	{
		icon: HeartHandshake,
		title: "$500 funds a class",
		body: "Hands-on ecology education for Carlton kids and neighbors, tools and materials included."
	}
];
var matchSteps = [
	{
		icon: Building2,
		title: "Type your employer",
		body: "Start typing where you work in the donation form. We look it up as you go."
	},
	{
		icon: Search,
		title: "See the match instantly",
		body: "If your employer matches gifts, you'll see their program and limits right away."
	},
	{
		icon: HeartHandshake,
		title: "We handle the paperwork",
		body: "You get the steps to submit your match, and we confirm the receipt on our end."
	}
];
function DonatePage() {
	return /* @__PURE__ */ jsxs("main", {
		className: "flex-1",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "bg-muted py-16 sm:py-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground",
							children: [/* @__PURE__ */ jsx(Leaf, {
								className: "h-3.5 w-3.5 text-sage-dark",
								"aria-hidden": "true"
							}), "Give and get matched"]
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-6 font-serif text-4xl font-semibold text-foreground sm:text-5xl",
							children: "Donate"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground",
							children: "Every dollar goes into the ground here in Carlton — native plants, soil, tools and classes. And if your employer matches charitable gifts, yours can go twice as far."
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-background py-16 sm:py-24",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid gap-12 lg:grid-cols-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "space-y-8 lg:col-span-1",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
									className: "font-serif text-2xl font-semibold text-foreground",
									children: "What your gift does"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-3 text-muted-foreground",
									children: "We are volunteer-run, so donations buy plants and materials rather than overhead."
								})] }),
								/* @__PURE__ */ jsx("ul", {
									className: "space-y-5",
									children: impact.map((item) => /* @__PURE__ */ jsxs("li", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-dark",
											children: /* @__PURE__ */ jsx(item.icon, {
												className: "h-5 w-5",
												"aria-hidden": "true"
											})
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "font-medium text-foreground",
											children: item.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-muted-foreground",
											children: item.body
										})] })]
									}, item.title))
								}),
								/* @__PURE__ */ jsx("img", {
									src: beetopia_beds_bloom_default,
									alt: "Pollinator beds in full bloom at Beetopia",
									className: "aspect-4/3 w-full rounded-3xl object-cover shadow-sm",
									loading: "lazy"
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "rounded-3xl border border-border bg-muted/50 p-6 shadow-sm sm:p-10 lg:col-span-2",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "font-serif text-2xl font-semibold text-foreground",
									children: "Make a donation"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-muted-foreground",
									children: "Give securely by card. Add your employer and we will check for a matching gift program at the same time."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-6",
									children: /* @__PURE__ */ jsx(AmplyWidget, { options: donationWidgetOptions })
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-6 text-sm text-muted-foreground",
									children: "Donations are processed securely through Stripe. The Carlton Pollinator Project is a community nonprofit in Carlton, Oregon."
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-muted py-16 sm:py-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "font-serif text-3xl font-semibold text-foreground sm:text-4xl",
							children: "Double your gift with employer matching"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-4 text-lg text-muted-foreground",
							children: "Thousands of employers match employee donations dollar for dollar — most of it goes unclaimed simply because people don't know to ask."
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-12 grid gap-8 md:grid-cols-3",
						children: matchSteps.map((step) => /* @__PURE__ */ jsxs("div", {
							className: "rounded-3xl border border-border bg-background p-6 shadow-sm",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex h-11 w-11 items-center justify-center rounded-full bg-goldenrod/20 text-earth-light",
									children: /* @__PURE__ */ jsx(step.icon, {
										className: "h-5 w-5",
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-5 font-serif text-xl font-semibold text-foreground",
									children: step.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 leading-relaxed text-muted-foreground",
									children: step.body
								})
							]
						}, step.title))
					})]
				})
			})
		]
	});
}
//#endregion
export { DonatePage as component };
