import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.js";
import * as React from "react";
import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Globe, Leaf, MapPin, Menu, Phone, X } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as SheetPrimitive from "@radix-ui/react-dialog";
//#region src/styles.css?url
var styles_default = "/assets/styles-Cze7D63S.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/button.tsx
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region src/components/ui/sheet.tsx
var Sheet = SheetPrimitive.Root;
var SheetTrigger = SheetPrimitive.Trigger;
var SheetPortal = SheetPrimitive.Portal;
var SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Overlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [/* @__PURE__ */ jsx(SheetOverlay, {}), /* @__PURE__ */ jsxs(SheetPrimitive.Content, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ jsxs(SheetPrimitive.Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Title, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
//#endregion
//#region src/components/Header.tsx
var navItems = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "Our Projects",
		to: "/our-projects"
	},
	{
		label: "Photos",
		to: "/photos"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function Header() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsx("header", {
		className: "sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-2 transition-opacity hover:opacity-80",
					children: [/* @__PURE__ */ jsx(Leaf, {
						className: "h-6 w-6 text-sage-dark",
						"aria-hidden": "true"
					}), /* @__PURE__ */ jsx("span", {
						className: "font-serif text-lg font-semibold text-foreground sm:text-xl",
						children: "Carlton Pollinator Project"
					})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: [navItems.map((item) => /* @__PURE__ */ jsx(Link, {
						to: item.to,
						className: "text-sm font-medium text-foreground transition-colors hover:text-sage-dark [&[data-status=active]]:font-semibold [&[data-status=active]]:text-sage-dark",
						children: item.label
					}, item.to)), /* @__PURE__ */ jsx(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							children: "Join our dig"
						})
					})]
				}),
				/* @__PURE__ */ jsxs(Sheet, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ jsx(SheetTrigger, {
						asChild: true,
						className: "md:hidden",
						children: /* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "Open menu",
							children: /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
						})
					}), /* @__PURE__ */ jsxs(SheetContent, {
						side: "right",
						className: "w-3/4 max-w-sm",
						children: [/* @__PURE__ */ jsx(SheetTitle, {
							className: "sr-only",
							children: "Navigation menu"
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-6 pt-8",
							children: [
								/* @__PURE__ */ jsxs(Link, {
									to: "/",
									className: "flex items-center gap-2",
									onClick: () => setOpen(false),
									children: [/* @__PURE__ */ jsx(Leaf, {
										className: "h-5 w-5 text-sage-dark",
										"aria-hidden": "true"
									}), /* @__PURE__ */ jsx("span", {
										className: "font-serif text-lg font-semibold",
										children: "Carlton Pollinator Project"
									})]
								}),
								/* @__PURE__ */ jsx("nav", {
									className: "flex flex-col gap-4",
									children: navItems.map((item) => /* @__PURE__ */ jsx(Link, {
										to: item.to,
										onClick: () => setOpen(false),
										className: "text-lg font-medium text-foreground transition-colors hover:text-sage-dark [&[data-status=active]]:font-semibold [&[data-status=active]]:text-sage-dark",
										children: item.label
									}, item.to))
								}),
								/* @__PURE__ */ jsx(Button, {
									asChild: true,
									onClick: () => setOpen(false),
									children: /* @__PURE__ */ jsx(Link, {
										to: "/contact",
										children: "Join our dig"
									})
								})
							]
						})]
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/components/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "bg-earth text-earth-foreground",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-10 md:grid-cols-2 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ jsxs(Link, {
								to: "/",
								className: "flex items-center gap-2 transition-opacity hover:opacity-80",
								children: [/* @__PURE__ */ jsx(Leaf, {
									className: "h-6 w-6 text-sage",
									"aria-hidden": "true"
								}), /* @__PURE__ */ jsx("span", {
									className: "font-serif text-xl font-semibold",
									children: "Carlton Pollinator Project"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "max-w-xs leading-relaxed text-cream/90",
								children: "Restoring Native Ecology one plant at a time in Carlton, Oregon."
							}),
							/* @__PURE__ */ jsxs("ul", {
								className: "space-y-3 text-sm text-cream/90",
								children: [
									/* @__PURE__ */ jsxs("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ jsx(MapPin, {
											className: "mt-0.5 h-4 w-4 shrink-0 text-goldenrod",
											"aria-hidden": "true"
										}), /* @__PURE__ */ jsx("span", { children: "Carlton, Oregon" })]
									}),
									/* @__PURE__ */ jsxs("li", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx(Phone, {
											className: "h-4 w-4 shrink-0 text-goldenrod",
											"aria-hidden": "true"
										}), /* @__PURE__ */ jsx("a", {
											href: "tel:+15038301805",
											className: "hover:underline",
											children: "(503) 830-1805"
										})]
									}),
									/* @__PURE__ */ jsxs("li", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx(Globe, {
											className: "h-4 w-4 shrink-0 text-goldenrod",
											"aria-hidden": "true"
										}), /* @__PURE__ */ jsx("a", {
											href: "https://carltonpollinatorproject.org",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "hover:underline",
											children: "carltonpollinatorproject.org"
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-5",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "font-serif text-lg font-semibold text-goldenrod-light",
							children: "Explore"
						}), /* @__PURE__ */ jsxs("nav", {
							className: "flex flex-col gap-3 text-sm text-cream/90",
							children: [
								/* @__PURE__ */ jsx(Link, {
									to: "/",
									className: "w-fit hover:text-goldenrod-light hover:underline",
									children: "Home"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/our-projects",
									className: "w-fit hover:text-goldenrod-light hover:underline",
									children: "Our Projects"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/our-projects",
									className: "w-fit hover:text-goldenrod-light hover:underline",
									children: "Classes"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/photos",
									className: "w-fit hover:text-goldenrod-light hover:underline",
									children: "Photos"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/contact",
									className: "w-fit hover:text-goldenrod-light hover:underline",
									children: "Contact Us"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/contact",
									className: "w-fit hover:text-goldenrod-light hover:underline",
									children: "Donate"
								})
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-5 lg:col-span-1",
						children: [
							/* @__PURE__ */ jsx("h3", {
								className: "font-serif text-lg font-semibold text-goldenrod-light",
								children: "Get Involved"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "max-w-sm text-sm leading-relaxed text-cream/90",
								children: "Join our dig, sign up for a class, or donate to help us grow wildlife habitat one plant at a time."
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "inline-flex items-center justify-center rounded-md bg-sage px-5 py-2.5 text-sm font-medium text-sage-foreground transition-colors hover:bg-sage-dark",
								children: "Join our dig"
							})
						]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-sm text-cream/80 md:flex-row",
				children: [/* @__PURE__ */ jsx("p", { children: "© 2026 Carlton Pollinator Project ~ Community creating vibrancy and beauty" }), /* @__PURE__ */ jsx("p", { children: "Restoring Native Ecology in Carlton, Oregon" })]
			})]
		})
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Carlton Pollinator Project" },
			{
				name: "description",
				content: "Restoring Native Ecology in Carlton, Oregon through local planting projects and ecology-based educational classes."
			},
			{
				name: "author",
				content: "Carlton Pollinator Project"
			},
			{
				property: "og:title",
				content: "Carlton Pollinator Project"
			},
			{
				property: "og:description",
				content: "Restoring Native Ecology in Carlton, Oregon through local planting projects and ecology-based educational classes."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", {
			className: "flex min-h-screen flex-col",
			children: [children, /* @__PURE__ */ jsx(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ jsxs(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx(Outlet, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$3 = () => import("./routes-Chrba6iV.js");
var Route$3 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Carlton Pollinator Project — Restoring Native Ecology" },
		{
			name: "description",
			content: "The Carlton Pollinator Project partners with Carlton neighbors and community resources to support pollinators and wildlife through local restoration projects and ecology-based classes."
		},
		{
			property: "og:title",
			content: "Carlton Pollinator Project — Restoring Native Ecology"
		},
		{
			property: "og:description",
			content: "Growing wildlife habitat one plant at a time in Carlton, Oregon. Volunteer, take a class, or donate."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$2 = () => import("./contact-ytIueu5f.js");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Us — Carlton Pollinator Project" },
		{
			name: "description",
			content: "Get in touch with the Carlton Pollinator Project. Volunteer, take a class, donate, or learn more about our work in Carlton, Oregon."
		},
		{
			property: "og:title",
			content: "Contact Us — Carlton Pollinator Project"
		},
		{
			property: "og:description",
			content: "Reach out to volunteer, sign up for a class, or donate to support pollinators in Carlton, Oregon."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/our-projects.tsx
var $$splitComponentImporter$1 = () => import("./our-projects-BJN2sQ0D.js");
var Route$1 = createFileRoute("/our-projects")({
	head: () => ({ meta: [
		{ title: "Our Projects — Carlton Pollinator Project" },
		{
			name: "description",
			content: "Discover the Carlton Pollinator Project's local restoration projects and ecology-based educational classes in Carlton, Oregon."
		},
		{
			property: "og:title",
			content: "Our Projects — Carlton Pollinator Project"
		},
		{
			property: "og:description",
			content: "Beetopia, Hawn Creek Pocket Park, and native plant classes that support pollinators and wildlife."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/photos.tsx
var $$splitComponentImporter = () => import("./photos-DdRRRbct.js");
var Route = createFileRoute("/photos")({
	head: () => ({ meta: [
		{ title: "Photos — Carlton Pollinator Project" },
		{
			name: "description",
			content: "Photos of Carlton Pollinator Project volunteers and planting days, our Carlton Fun Days festival booth, and the bees, butterflies, and gardens we grow habitat for."
		},
		{
			property: "og:title",
			content: "Photos — Carlton Pollinator Project"
		},
		{
			property: "og:description",
			content: "Faces, places, and pollinators from around Carlton, Oregon — volunteers at work, Fun Days festival moments, and gardens in bloom."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	ContactRoute: Route$2.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$4
	}),
	OurProjectsRoute: Route$1.update({
		id: "/our-projects",
		path: "/our-projects",
		getParentRoute: () => Route$4
	}),
	PhotosRoute: Route.update({
		id: "/photos",
		path: "/photos",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter, Button as n, cn as r, router_exports as t };
