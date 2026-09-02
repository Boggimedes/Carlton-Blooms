import { n as Button } from "./router-DT5WE7d0.js";
import { n as hawn_creek_park_default, r as beetopia_garden_default, t as hawn_creek_volunteers_default } from "./hawn-creek-volunteers-C4ufubd6.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Calendar, Leaf, Shovel } from "lucide-react";
//#region src/routes/our-projects.tsx?tsr-split=component
var projects = [
	{
		image: beetopia_garden_default,
		title: "1st Street Pollinator Garden (Beetopia)",
		description: "Our flagship street-side garden in the heart of Carlton. Neighbors, volunteers, and local students transformed this space into a living classroom and a reliable food source for pollinators from spring through fall.",
		details: [
			"Before-and-after transformation",
			"Volunteer planting days",
			"Featured at Carlton Fun Days Festival"
		]
	},
	{
		image: hawn_creek_park_default,
		title: "Hawn Creek Pocket Park",
		description: "Our current focus: turning a small town park into a native plant refuge. A winding path, bench, and young native trees make it a place where people can gather and pollinators can thrive.",
		details: [
			"Native meadow and shrub plantings",
			"Community work parties",
			"Long-term monitoring"
		]
	},
	{
		image: hawn_creek_volunteers_default,
		title: "Community Volunteer Days",
		description: "From school gardens to park restorations, our volunteers are the roots of everything we do. All ages and experience levels are welcome at our planting days and maintenance events.",
		details: [
			"All tools and guidance provided",
			"Family-friendly work parties",
			"Seasonal planting and care"
		]
	}
];
function OurProjectsPage() {
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
							}), "What we do"]
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-6 font-serif text-4xl font-semibold text-foreground sm:text-5xl",
							children: "Our Projects"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground",
							children: "Local restoration projects and ecology-based classes that bring native habitat back to Carlton, Oregon — one plant at a time."
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-background py-16 sm:py-24",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsx("div", {
						className: "space-y-16",
						children: projects.map((project, index) => /* @__PURE__ */ jsxs("article", {
							className: "grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
							children: [/* @__PURE__ */ jsx("div", {
								className: index % 2 === 1 ? "lg:order-2" : "",
								children: /* @__PURE__ */ jsx("img", {
									src: project.image,
									alt: project.title,
									width: 800,
									height: 600,
									className: "rounded-2xl border border-border/50 shadow-lg",
									loading: "lazy",
									decoding: "async"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: index % 2 === 1 ? "lg:order-1" : "",
								children: [
									/* @__PURE__ */ jsx("h2", {
										className: "font-serif text-2xl font-semibold text-foreground sm:text-3xl",
										children: project.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-4 text-lg leading-relaxed text-muted-foreground",
										children: project.description
									}),
									/* @__PURE__ */ jsx("ul", {
										className: "mt-5 space-y-2",
										children: project.details.map((detail) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-center gap-2 text-foreground",
											children: [/* @__PURE__ */ jsx("span", {
												className: "inline-block h-2 w-2 rounded-full bg-goldenrod",
												"aria-hidden": "true"
											}), detail]
										}, detail))
									}),
									/* @__PURE__ */ jsx(Button, {
										asChild: true,
										className: "mt-6",
										children: /* @__PURE__ */ jsxs(Link, {
											to: "/contact",
											children: [/* @__PURE__ */ jsx(Shovel, { className: "mr-2 h-4 w-4" }), "Get involved"]
										})
									})
								]
							})]
						}, project.title))
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-muted/50 py-16 sm:py-24",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid gap-10 rounded-3xl border border-border bg-background p-8 shadow-sm sm:p-12 lg:grid-cols-2",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground",
								children: [/* @__PURE__ */ jsx(Calendar, {
									className: "h-3.5 w-3.5 text-goldenrod",
									"aria-hidden": "true"
								}), "Upcoming classes"]
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-5 font-serif text-3xl font-semibold text-foreground sm:text-4xl",
								children: "Ecology-based educational classes"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-muted-foreground",
								children: "Join us for hands-on workshops about native plants, pollinator identification, and wildlife-friendly gardening. All experience levels are welcome."
							}),
							/* @__PURE__ */ jsx(Button, {
								asChild: true,
								className: "mt-6",
								children: /* @__PURE__ */ jsxs(Link, {
									to: "/contact",
									children: ["Sign up for a class", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })]
								})
							})
						] }), /* @__PURE__ */ jsxs("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ jsx(ClassCard, {
									title: "Native Plants 101",
									description: "Learn why natives matter and how to choose the right plants for your space."
								}),
								/* @__PURE__ */ jsx(ClassCard, {
									title: "Pollinator Garden Design",
									description: "Design a blooming calendar that feeds pollinators from spring through fall."
								}),
								/* @__PURE__ */ jsx(ClassCard, {
									title: "Seed Starting & Propagation",
									description: "Grow your own native plants from seed and cuttings to share with neighbors."
								}),
								/* @__PURE__ */ jsx(ClassCard, {
									title: "Winter 2027 Restoring Habitat",
									description: "Presented by CPP and SWCD — date TBA. Pollinators and native plants for every yard."
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-earth py-16 text-earth-foreground sm:py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "font-serif text-3xl font-semibold sm:text-4xl",
							children: "Help us grow habitat"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-4 max-w-2xl text-lg opacity-90",
							children: "Volunteer at a planting day, attend a class, or make a donation to keep our projects thriving."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap justify-center gap-4",
							children: [/* @__PURE__ */ jsx(Button, {
								asChild: true,
								size: "lg",
								variant: "secondary",
								children: /* @__PURE__ */ jsx(Link, {
									to: "/contact",
									children: "Volunteer"
								})
							}), /* @__PURE__ */ jsx(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "border-earth-foreground/30 text-earth-foreground hover:bg-earth-foreground/10 hover:text-earth-foreground",
								children: /* @__PURE__ */ jsx(Link, {
									to: "/contact",
									children: "Donate"
								})
							})]
						})
					]
				})
			})
		]
	});
}
function ClassCard({ title, description }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-muted/50 p-5 transition-colors hover:bg-muted",
		children: [/* @__PURE__ */ jsx("h3", {
			className: "font-serif text-lg font-semibold text-foreground",
			children: title
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: description
		})]
	});
}
//#endregion
export { OurProjectsPage as component };
