import clsx from "clsx";

interface Props {
	children: string;
	class?: string;
	type?: "info" | "danger";
}

const CallOut = ({ children, type = "info", class: className = "" }: Props) => {
	const isInfo = type === "info";

	const classes = clsx(
		"border-2 border-dashed rounded-lg flex gap-5 [&>p]:!m-0",
		isInfo ? "border-sapphire" : "border-red",
		"p-5 my-10",
		"text-text",
		className,
	);

	const iconClass = clsx(isInfo ? "text-sapphire" : "text-red", "text-md");

	return (
		<div class={classes}>
			<span class={iconClass}>{isInfo ? "ⓘ " : "⚠ "}</span>
			{children}
		</div>
	);
};

export default CallOut;
