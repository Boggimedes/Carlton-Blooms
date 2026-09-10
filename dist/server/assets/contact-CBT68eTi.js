import { jsx, jsxs } from "react/jsx-runtime";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";
//#region src/routes/contact.tsx?tsr-split=component
function ContactPage() {
	return /* @__PURE__ */ jsxs("main", {
		className: "flex-1",
		children: [/* @__PURE__ */ jsx("section", {
			className: "bg-muted py-16 sm:py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground",
						children: [/* @__PURE__ */ jsx(Leaf, {
							className: "h-3.5 w-3.5 text-sage-dark",
							"aria-hidden": "true"
						}), "Get in touch"]
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-6 font-serif text-4xl font-semibold text-foreground sm:text-5xl",
						children: "Contact Us"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground",
						children: "We would love to hear from you. Reach out to volunteer, join a class, donate, or learn more about how we are restoring native ecology in Carlton."
					})
				]
			})
		}), /* @__PURE__ */ jsx("section", {
			className: "bg-background py-16 sm:py-24",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-2xl",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-8",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
							className: "font-serif text-2xl font-semibold text-foreground",
							children: "How to reach us"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-3 text-muted-foreground",
							children: "Prefer a quick call? Want to sign up for a planting day? Reach us any of these ways and we will get back to you."
						})] }), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-5",
							children: [
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-dark",
										children: /* @__PURE__ */ jsx(MapPin, {
											className: "h-5 w-5",
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "font-medium text-foreground",
										children: "Location"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-muted-foreground",
										children: "Carlton, Oregon"
									})] })]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-dark",
										children: /* @__PURE__ */ jsx(Phone, {
											className: "h-5 w-5",
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "font-medium text-foreground",
										children: "Phone"
									}), /* @__PURE__ */ jsx("a", {
										href: "tel:+15038301805",
										className: "text-muted-foreground hover:text-sage-dark hover:underline",
										children: "(503) 830-1805"
									})] })]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-dark",
										children: /* @__PURE__ */ jsx(Mail, {
											className: "h-5 w-5",
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "font-medium text-foreground",
										children: "Email"
									}), /* @__PURE__ */ jsx("a", {
										href: "mailto:robin.geck@icloud.com",
										className: "text-muted-foreground hover:text-sage-dark hover:underline",
										children: "robin.geck@icloud.com"
									})] })]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-dark",
										children: /* @__PURE__ */ jsx(Leaf, {
											className: "h-5 w-5",
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "font-medium text-foreground",
										children: "Website"
									}), /* @__PURE__ */ jsx("a", {
										href: "https://carltonblooms.org",
										className: "text-muted-foreground hover:text-sage-dark hover:underline",
										children: "carltonblooms.org"
									})] })]
								})
							]
						})]
					})
				})
			})
		})]
	});
}
//#endregion
export { ContactPage as component };
