import { i as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Send, d as Leaf, l as MapPin, o as Phone, u as Mail } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as Button, r as cn } from "./router-DT5WE7d0.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-ClP2v-7-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function ContactForm() {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const handleSubmit = (e) => {
		e.preventDefault();
		const subject = encodeURIComponent(`Message from ${name}`);
		const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
		window.location.href = `mailto:contact@carltonpollinatorproject.org?subject=${subject}&body=${body}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "name",
					children: "Name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "name",
					value: name,
					onChange: (e) => setName(e.target.value),
					placeholder: "Your name",
					required: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "email",
					children: "Email"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "email",
					type: "email",
					value: email,
					onChange: (e) => setEmail(e.target.value),
					placeholder: "you@example.com",
					required: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "message",
					children: "Message"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "message",
					value: message,
					onChange: (e) => setMessage(e.target.value),
					placeholder: "How would you like to help?",
					rows: 5,
					required: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "submit",
				className: "w-full sm:w-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "mr-2 h-4 w-4" }), "Send Message"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [
					"This will open your email app. You can also call us at",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:+15038301805",
						className: "underline hover:text-sage-dark",
						children: "(503) 830-1805"
					}),
					"."
				]
			})
		]
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
							className: "h-3.5 w-3.5 text-sage-dark",
							"aria-hidden": "true"
						}), "Get in touch"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 font-serif text-4xl font-semibold text-foreground sm:text-5xl",
						children: "Contact Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground",
						children: "We would love to hear from you. Reach out to volunteer, join a class, donate, or learn more about how we are restoring native ecology in Carlton."
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-8 lg:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl font-semibold text-foreground",
							children: "How to reach us"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Prefer a quick call? Want to sign up for a planting day? Use the information below or send us a message."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-dark",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											className: "h-5 w-5",
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium text-foreground",
										children: "Location"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: "Carlton, Oregon"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-dark",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											className: "h-5 w-5",
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium text-foreground",
										children: "Phone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "tel:+15038301805",
										className: "text-muted-foreground hover:text-sage-dark hover:underline",
										children: "(503) 830-1805"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-dark",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
											className: "h-5 w-5",
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium text-foreground",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:contact@carltonpollinatorproject.org",
										className: "text-muted-foreground hover:text-sage-dark hover:underline",
										children: "contact@carltonpollinatorproject.org"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-dark",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
											className: "h-5 w-5",
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium text-foreground",
										children: "Website"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://carltonpollinatorproject.org",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "text-muted-foreground hover:text-sage-dark hover:underline",
										children: "carltonpollinatorproject.org"
									})] })]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border bg-muted/50 p-6 shadow-sm sm:p-10 lg:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-2xl font-semibold text-foreground",
								children: "Send a message"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted-foreground",
								children: "Tell us how you would like to get involved and we will get back to you."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
							})
						]
					})]
				})
			})
		})]
	});
}
//#endregion
export { ContactPage as component };
