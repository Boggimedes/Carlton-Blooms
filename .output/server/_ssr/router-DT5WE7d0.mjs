import { i as __toESM, t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog, u as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { c as Menu, d as Leaf, l as MapPin, o as Phone, p as Globe, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DT5WE7d0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Cze7D63S.css";
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
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
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
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
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
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
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
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 transition-opacity hover:opacity-80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
						className: "h-6 w-6 text-sage-dark",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-lg font-semibold text-foreground sm:text-xl",
						children: "Carlton Pollinator Project"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-sm font-medium text-foreground transition-colors hover:text-sage-dark [&[data-status=active]]:font-semibold [&[data-status=active]]:text-sage-dark",
						children: item.label
					}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Join our dig"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						className: "md:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "Open menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
						side: "right",
						className: "w-3/4 max-w-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
							className: "sr-only",
							children: "Navigation menu"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-6 pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/",
									className: "flex items-center gap-2",
									onClick: () => setOpen(false),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
										className: "h-5 w-5 text-sage-dark",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif text-lg font-semibold",
										children: "Carlton Pollinator Project"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
									className: "flex flex-col gap-4",
									children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: item.to,
										onClick: () => setOpen(false),
										className: "text-lg font-medium text-foreground transition-colors hover:text-sage-dark [&[data-status=active]]:font-semibold [&[data-status=active]]:text-sage-dark",
										children: item.label
									}, item.to))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									onClick: () => setOpen(false),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
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
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-earth text-earth-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-2 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "flex items-center gap-2 transition-opacity hover:opacity-80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
									className: "h-6 w-6 text-sage",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif text-xl font-semibold",
									children: "Carlton Pollinator Project"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-xs leading-relaxed text-cream/90",
								children: "Restoring Native Ecology one plant at a time in Carlton, Oregon."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-3 text-sm text-cream/90",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											className: "mt-0.5 h-4 w-4 shrink-0 text-goldenrod",
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Carlton, Oregon" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											className: "h-4 w-4 shrink-0 text-goldenrod",
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+15038301805",
											className: "hover:underline",
											children: "(503) 830-1805"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
											className: "h-4 w-4 shrink-0 text-goldenrod",
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-lg font-semibold text-goldenrod-light",
							children: "Explore"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex flex-col gap-3 text-sm text-cream/90",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "w-fit hover:text-goldenrod-light hover:underline",
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/our-projects",
									className: "w-fit hover:text-goldenrod-light hover:underline",
									children: "Our Projects"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/our-projects",
									className: "w-fit hover:text-goldenrod-light hover:underline",
									children: "Classes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/photos",
									className: "w-fit hover:text-goldenrod-light hover:underline",
									children: "Photos"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "w-fit hover:text-goldenrod-light hover:underline",
									children: "Contact Us"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "w-fit hover:text-goldenrod-light hover:underline",
									children: "Donate"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5 lg:col-span-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-lg font-semibold text-goldenrod-light",
								children: "Get Involved"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-sm text-sm leading-relaxed text-cream/90",
								children: "Join our dig, sign up for a class, or donate to help us grow wildlife habitat one plant at a time."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "inline-flex items-center justify-center rounded-md bg-sage px-5 py-2.5 text-sm font-medium text-sage-foreground transition-colors hover:bg-sage-dark",
								children: "Join our dig"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-sm text-cream/80 md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Carlton Pollinator Project ~ Community creating vibrancy and beauty" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Restoring Native Ecology in Carlton, Oregon" })]
			})]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
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
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "flex min-h-screen flex-col",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var $$splitComponentImporter$3 = () => import("./routes-jBKgFgDi.mjs");
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
var $$splitComponentImporter$2 = () => import("./contact-ClP2v-7-.mjs");
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
var $$splitComponentImporter$1 = () => import("./our-projects-CcATCwSH.mjs");
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
var $$splitComponentImporter = () => import("./photos-D-dczToN.mjs");
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
export { Button as n, cn as r, router_exports as t };
