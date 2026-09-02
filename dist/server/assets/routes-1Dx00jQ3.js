import { n as Button } from "./router-CblJ8Mdi.js";
import { n as hawn_creek_park_default, r as beetopia_garden_default, t as hawn_creek_volunteers_default } from "./hawn-creek-volunteers-C4ufubd6.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, BookOpen, Calendar, HeartHandshake, Leaf, Shovel, Sprout } from "lucide-react";
//#region src/assets/hero-butterfly.jpg
var hero_butterfly_default = "/assets/hero-butterfly-pEVE7-R6.jpg";
//#endregion
//#region src/assets/home-bumblebee.jpg
var home_bumblebee_default = "/assets/home-bumblebee-CdO-hNQE.jpg";
//#endregion
//#region src/assets/volunteer-camille.jpg
var volunteer_camille_default = "/assets/volunteer-camille-B0uezEMm.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function HomePage() {
	return /* @__PURE__ */ jsxs("main", {
		className: "flex-1",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "relative overflow-hidden bg-muted",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid items-center gap-12 lg:grid-cols-2",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground",
									children: [/* @__PURE__ */ jsx(Leaf, {
										className: "h-3.5 w-3.5 text-sage-dark",
										"aria-hidden": "true"
									}), "Carlton Pollinator Project"]
								}),
								/* @__PURE__ */ jsx("h1", {
									className: "mt-6 font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl",
									children: "Restoring Native Ecology"
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl",
									children: [
										"Growing wildlife habitat",
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "font-semibold text-sage-dark",
											children: "one plant at a time"
										}),
										"."
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-8 flex flex-wrap gap-4",
									children: [/* @__PURE__ */ jsx(Button, {
										asChild: true,
										size: "lg",
										children: /* @__PURE__ */ jsxs(Link, {
											to: "/contact",
											children: [/* @__PURE__ */ jsx(Shovel, { className: "mr-2 h-4 w-4" }), "Join our dig"]
										})
									}), /* @__PURE__ */ jsx(Button, {
										asChild: true,
										variant: "outline",
										size: "lg",
										children: /* @__PURE__ */ jsxs(Link, {
											to: "/photos",
											children: ["See our photos", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })]
										})
									})]
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [/* @__PURE__ */ jsx("div", {
								className: "absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sage/20 to-goldenrod/20 blur-2xl",
								"aria-hidden": "true"
							}), /* @__PURE__ */ jsx("img", {
								src: hero_butterfly_default,
								alt: "A monarch butterfly rests on bright native wildflowers",
								width: 1280,
								height: 720,
								className: "relative rounded-2xl border border-border/50 shadow-xl",
								loading: "eager",
								decoding: "async"
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-background py-16 sm:py-24",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid items-center gap-12 lg:grid-cols-2",
						children: [/* @__PURE__ */ jsx("div", {
							className: "order-2 lg:order-1",
							children: /* @__PURE__ */ jsx("img", {
								src: home_bumblebee_default,
								alt: "A Black-tailed Bumblebee collects pollen from a Catmint blossom",
								width: 800,
								height: 600,
								className: "rounded-2xl border border-border/50 shadow-lg",
								loading: "lazy",
								decoding: "async"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "order-1 lg:order-2",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "font-serif text-3xl font-semibold text-foreground sm:text-4xl",
									children: "Carlton Pollinator Project"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-6 text-lg leading-relaxed text-muted-foreground",
									children: "Carlton Pollinator Project (CPP) is a grassroots nonprofit that partners with Carlton neighbors and community resources to support pollinators and wildlife through local restoration projects and ecology-based classes."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-muted-foreground",
									children: "We believe every yard, school garden, and public area has the potential to be a sanctuary for bees, butterflies, moths, and birds — and a source of wonder and beauty for our community."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [
										/* @__PURE__ */ jsx(Button, {
											asChild: true,
											variant: "secondary",
											children: /* @__PURE__ */ jsx(Link, {
												to: "/contact",
												children: "Volunteer"
											})
										}),
										/* @__PURE__ */ jsx(Button, {
											asChild: true,
											variant: "outline",
											children: /* @__PURE__ */ jsx(Link, {
												to: "/our-projects",
												children: "Classes"
											})
										}),
										/* @__PURE__ */ jsx(Button, {
											asChild: true,
											children: /* @__PURE__ */ jsx(Link, {
												to: "/contact",
												children: "Donate"
											})
										})
									]
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-muted/50 py-16 sm:py-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mx-auto max-w-4xl text-center",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground",
							children: [/* @__PURE__ */ jsx(HeartHandshake, {
								className: "h-3.5 w-3.5 text-sage-dark",
								"aria-hidden": "true"
							}), "Why it matters"]
						}), /* @__PURE__ */ jsx("h2", {
							className: "mt-6 font-serif text-3xl font-semibold text-foreground sm:text-4xl",
							children: "Foundation of our ecosystems — The Power of Bees"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ jsx(FactCard, {
								icon: /* @__PURE__ */ jsx(Sprout, { className: "h-6 w-6" }),
								text: "Bees are a keystone species, the glue that holds our ecosystems together."
							}),
							/* @__PURE__ */ jsx(FactCard, {
								icon: /* @__PURE__ */ jsx(Leaf, { className: "h-6 w-6" }),
								text: "They are responsible for the reproduction of 80% of flowering plants worldwide."
							}),
							/* @__PURE__ */ jsx(FactCard, {
								icon: /* @__PURE__ */ jsx(HeartHandshake, { className: "h-6 w-6" }),
								text: "Native and managed bees pollinate up to 1/3 of our global food production."
							}),
							/* @__PURE__ */ jsx(FactCard, {
								icon: /* @__PURE__ */ jsx(BookOpen, { className: "h-6 w-6" }),
								text: "Bees maintain plant biodiversity and ensure ecosystem stability and health."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-background py-16 sm:py-24",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid gap-12 lg:grid-cols-2 lg:items-center",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
							className: "font-serif text-3xl font-semibold text-foreground sm:text-4xl",
							children: "Insect Decline"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-6 text-lg leading-relaxed text-muted-foreground",
							children: "Insects face sharply declining populations that threaten our ecosystems. Habitat loss through development and agricultural monocultures, pollution and pesticide use, climate change, and invasive plants overtaking native forage and nesting areas all have had a devastating effect on our bee and insect populations."
						})] }), /* @__PURE__ */ jsxs("div", {
							className: "rounded-3xl border border-border bg-muted/50 p-8 shadow-sm",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "font-serif text-xl font-semibold text-foreground",
								children: "Threats pollinators face"
							}), /* @__PURE__ */ jsx("ul", {
								className: "mt-6 space-y-4",
								children: [
									"Habitat loss from development and monocultures",
									"Pollution and pesticide use",
									"Climate change shifting bloom times",
									"Invasive plants crowding out native forage"
								].map((item) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-3 text-foreground",
									children: [/* @__PURE__ */ jsx("span", {
										className: "mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-goldenrod",
										"aria-hidden": "true"
									}), item]
								}, item))
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-sage py-16 text-sage-foreground sm:py-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mx-auto max-w-4xl text-center",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "font-serif text-3xl font-semibold sm:text-4xl",
							children: "We Can Make a Difference"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-5 text-lg opacity-90",
							children: "We see in every yard, school garden, and public area, the potential to be a sanctuary for bees, butterflies, moths, and birds — and a source of wonder and beauty for our community."
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: [
							/* @__PURE__ */ jsx(ActionCard, {
								title: "Plant natives",
								description: "Many pollinators need natives to complete their life cycle. Every plant makes a difference."
							}),
							/* @__PURE__ */ jsx(ActionCard, {
								title: "Create habitat",
								description: "Learn about pollinators’ specific needs and create an area in your garden for wildlife habitat."
							}),
							/* @__PURE__ */ jsx(ActionCard, {
								title: "Spread awareness",
								description: "Help others become aware of the need to prioritize pollinator health."
							}),
							/* @__PURE__ */ jsx(ActionCard, {
								title: "Remove invasives",
								description: "Get to know the invasive plants in our area and remove them where you can."
							}),
							/* @__PURE__ */ jsx(ActionCard, {
								title: "Avoid chemicals",
								description: "Use master gardener resources at our extension service for advice when garden issues arise."
							}),
							/* @__PURE__ */ jsx(ActionCard, {
								title: "Join us",
								description: "Whatever we do for our pollinators will support the ecosystems that all life depends upon."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-background py-16 sm:py-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground",
							children: [/* @__PURE__ */ jsx(Shovel, {
								className: "h-3.5 w-3.5 text-sage-dark",
								"aria-hidden": "true"
							}), "Our Projects"]
						}), /* @__PURE__ */ jsx("h2", {
							className: "mt-6 font-serif text-3xl font-semibold text-foreground sm:text-4xl",
							children: "Growing habitat in Carlton"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-12 grid items-center gap-12 lg:grid-cols-2",
						children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", {
							src: volunteer_camille_default,
							alt: "A community volunteer plants native wildflowers in a local garden",
							width: 800,
							height: 600,
							className: "rounded-2xl border border-border/50 shadow-lg",
							loading: "lazy",
							decoding: "async"
						}) }), /* @__PURE__ */ jsxs("blockquote", {
							className: "relative",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "absolute -left-4 -top-6 font-serif text-8xl leading-none text-goldenrod/30",
									"aria-hidden": "true",
									children: "“"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "relative font-serif text-2xl font-medium leading-relaxed text-foreground sm:text-3xl",
									children: "Never doubt that a small group of thoughtful citizens can change the world; indeed, it’s the only thing that ever has."
								}),
								/* @__PURE__ */ jsx("footer", {
									className: "relative mt-6 text-lg font-semibold text-sage-dark",
									children: "— Margaret Mead"
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-muted/50 py-16 sm:py-24",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid items-center gap-12 lg:grid-cols-2",
						children: [/* @__PURE__ */ jsx("div", {
							className: "order-2 lg:order-1",
							children: /* @__PURE__ */ jsx("img", {
								src: beetopia_garden_default,
								alt: "The 1st Street Pollinator Garden, a colorful street-side bed with a Beetopia sign",
								width: 800,
								height: 600,
								className: "rounded-2xl border border-border/50 shadow-lg",
								loading: "lazy",
								decoding: "async"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "order-1 lg:order-2",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "font-serif text-3xl font-semibold text-foreground sm:text-4xl",
									children: "1st Street Pollinator Garden"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-lg font-medium text-sage-dark",
									children: "(Beetopia)"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-5 text-lg leading-relaxed text-muted-foreground",
									children: "Our flagship street-side garden supports pollinators in the heart of Carlton. Neighbors, volunteers, and local students have transformed this space into a living classroom and a reliable food source for pollinators from spring through fall."
								}),
								/* @__PURE__ */ jsx("ul", {
									className: "mt-6 space-y-3",
									children: [
										"Before-and-after transformation",
										"Volunteer planting days",
										"Featured at Carlton Fun Days Festival"
									].map((item) => /* @__PURE__ */ jsxs("li", {
										className: "flex items-center gap-2 text-foreground",
										children: [/* @__PURE__ */ jsx("span", {
											className: "inline-block h-2 w-2 rounded-full bg-goldenrod",
											"aria-hidden": "true"
										}), item]
									}, item))
								}),
								/* @__PURE__ */ jsx(Button, {
									asChild: true,
									className: "mt-8",
									children: /* @__PURE__ */ jsxs(Link, {
										to: "/our-projects",
										children: ["See all projects", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })]
									})
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-background py-16 sm:py-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "text-center",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "font-serif text-3xl font-semibold text-foreground sm:text-4xl",
								children: "Our Current Project: Hawn Creek Pocket Park"
							}), /* @__PURE__ */ jsx("p", {
								className: "mx-auto mt-5 max-w-3xl text-lg text-muted-foreground",
								children: "In a collaborative effort with our neighbors, local environmental agencies and businesses, we are turning this small town park into a native plant refuge — a place where family and friends can gather and wildlife can thrive."
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-12 grid gap-8 sm:grid-cols-2",
							children: [/* @__PURE__ */ jsx("div", {
								className: "overflow-hidden rounded-2xl border border-border/50 shadow-lg",
								children: /* @__PURE__ */ jsx("img", {
									src: hawn_creek_park_default,
									alt: "Hawn Creek Pocket Park with a winding path, bench, and young native trees",
									width: 800,
									height: 600,
									className: "h-full w-full object-cover",
									loading: "lazy",
									decoding: "async"
								})
							}), /* @__PURE__ */ jsx("div", {
								className: "overflow-hidden rounded-2xl border border-border/50 shadow-lg",
								children: /* @__PURE__ */ jsx("img", {
									src: hawn_creek_volunteers_default,
									alt: "Community volunteers planting native shrubs at Hawn Creek Pocket Park",
									width: 800,
									height: 600,
									className: "h-full w-full object-cover",
									loading: "lazy",
									decoding: "async"
								})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-10 flex flex-wrap justify-center gap-4",
							children: [/* @__PURE__ */ jsx(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ jsxs(Link, {
									to: "/contact",
									children: [/* @__PURE__ */ jsx(Shovel, { className: "mr-2 h-4 w-4" }), "Volunteer at Hawn Creek"]
								})
							}), /* @__PURE__ */ jsx(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								children: /* @__PURE__ */ jsx(Link, {
									to: "/photos",
									children: "View project photos"
								})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-muted/50 py-16 sm:py-24",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid gap-10 rounded-3xl border border-border bg-background p-8 shadow-sm sm:p-12 lg:grid-cols-2 lg:items-center",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground",
								children: [/* @__PURE__ */ jsx(Calendar, {
									className: "h-3.5 w-3.5 text-goldenrod",
									"aria-hidden": "true"
								}), "Events and Classes"]
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-5 font-serif text-3xl font-semibold text-foreground sm:text-4xl",
								children: "Learn with us"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-muted-foreground",
								children: "Join us for hands-on workshops about native plants, pollinator needs, and wildlife-friendly gardening. All experience levels are welcome."
							}),
							/* @__PURE__ */ jsx(Button, {
								asChild: true,
								className: "mt-6",
								children: /* @__PURE__ */ jsxs(Link, {
									to: "/contact",
									children: ["Sign up for a class", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })]
								})
							})
						] }), /* @__PURE__ */ jsx("div", {
							className: "rounded-2xl border border-border bg-muted/50 p-6",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-dark",
									children: /* @__PURE__ */ jsx(Calendar, {
										className: "h-6 w-6",
										"aria-hidden": "true"
									})
								}), /* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("h3", {
										className: "font-serif text-xl font-semibold text-foreground",
										children: "Winter 2027 Restoring Habitat ~ Pollinators and Native Plants"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-muted-foreground",
										children: "Presented by CPP and SWCD"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-1 font-medium text-foreground",
										children: "Date: TBA"
									})
								] })]
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-earth py-16 text-earth-foreground sm:py-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mx-auto max-w-4xl text-center",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "font-serif text-3xl font-semibold sm:text-4xl",
							children: "Resources for more information"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-4 text-lg opacity-90",
							children: "These trusted organizations offer research, plant lists, and practical guidance for protecting pollinators."
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-10 flex flex-wrap justify-center gap-4",
						children: [
							/* @__PURE__ */ jsx(ResourceLink, {
								href: "https://xerces.org",
								label: "Xerces Society"
							}),
							/* @__PURE__ */ jsx(ResourceLink, {
								href: "https://pollinator.org",
								label: "Pollinator Partnership"
							}),
							/* @__PURE__ */ jsx(ResourceLink, {
								href: "https://oregonbeeproject.org",
								label: "Oregon Bee Project"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-sage py-16 text-sage-foreground sm:py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "font-serif text-3xl font-semibold sm:text-4xl",
							children: "Ready to dig in?"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-4 max-w-2xl text-lg opacity-90",
							children: "Whether you have an hour to volunteer or a yard to transform, we would love to hear from you."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap justify-center gap-4",
							children: [/* @__PURE__ */ jsx(Button, {
								asChild: true,
								size: "lg",
								variant: "secondary",
								children: /* @__PURE__ */ jsx(Link, {
									to: "/contact",
									children: "Join our dig"
								})
							}), /* @__PURE__ */ jsx(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "border-sage-foreground/30 text-sage-foreground hover:bg-sage-foreground/10 hover:text-sage-foreground",
								children: /* @__PURE__ */ jsx(Link, {
									to: "/contact",
									children: "Contact Us"
								})
							})]
						})
					]
				})
			})
		]
	});
}
function FactCard({ icon, text }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex h-12 w-12 items-center justify-center rounded-full bg-sage/15 text-sage-dark",
			children: icon
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-4 text-foreground",
			children: text
		})]
	});
}
function ActionCard({ title, description }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border border-sage-foreground/20 bg-sage-foreground/10 p-6 backdrop-blur-sm transition-colors hover:bg-sage-foreground/15",
		children: [/* @__PURE__ */ jsx("h3", {
			className: "font-serif text-xl font-semibold",
			children: title
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-2 opacity-90",
			children: description
		})]
	});
}
function ResourceLink({ href, label }) {
	return /* @__PURE__ */ jsxs("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "inline-flex items-center gap-2 rounded-full border border-earth-foreground/30 bg-earth-foreground/10 px-6 py-3 text-sm font-medium transition-colors hover:bg-earth-foreground/20",
		children: [label, /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
	});
}
//#endregion
export { HomePage as component };
