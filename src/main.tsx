import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

const rootEl = document.getElementById("root");

if (rootEl instanceof HTMLElement) {
	const root = createRoot(rootEl);
	root.render(
		<StrictMode>
			<p className="font-bold text-red-800">Hello, World.</p>
		</StrictMode>,
	);
}
