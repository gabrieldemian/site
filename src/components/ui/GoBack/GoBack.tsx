import type { JSXElement } from "solid-js";
import Button from "../Button";
import { ArrowLeft } from "../icons";

interface Props {
	children?: JSXElement;
	href?: "/blog" | "/";
}

const GoBack = ({ children = "Go Back", href = "/" }: Props) => {
	return (
		<Button
			size="sm"
			as="a"
			variant="text"
			href={href}
			icon={ArrowLeft}
			class="!px-0 glow-text-secondary !inline-block"
			iconClass="group-hover:-translate-x-[25%] duration-300"
		>
			{children}
		</Button>
	);
};

export default GoBack;
