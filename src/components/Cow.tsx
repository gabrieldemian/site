import { For, type JSXElement, createSignal } from "solid-js";

interface Props {
	attack: () => void;
	life: () => number[];
	deleting: () => number | null;
	maxLife: number;
}

const CowBody = ({ attack, life, maxLife, deleting }: Props): JSXElement => {
	const isHarmed = () => life().length !== maxLife;

	const renderCow = (): string => {
		let v = "";
		switch (life().length) {
			case 0:
				v = `\\   ^__^
              \\  (xx)\\________
                 (__)\\        )/\\/\\
                  U   ||----w |
                      ||     ||`;
				break;
			default:
				v = `\\   ^__^
              \\  (oo)\\________
                 (__)\\        )/\\/\\
                      ||----w |
                      ||     ||`;
				break;
		}
		return v;
	};

	const renderSoul = () => {
		return (
			<pre
				style={{ "animation-delay": "2s", opacity: 0 }}
				class="text-sapphire inline cursor-pointer absolute animate-soul-escaping-body flex justify-center"
			>
				{`                 ^__^
                 (xx)\_________
                 (__)\         )/\\/\\
                  U   ||----w |
                      ||     ||`}
			</pre>
		);
	};

	return (
		<pre class="inline cursor-sword" onKeyUp={attack} onClick={attack}>
			{renderCow()}
			{life().length === 0 && renderSoul()}
			<div class="absolute flex gap-2 bottom-5 left-0">
				<For each={life()}>
					{(_, i) => (
						<img
							style={{
								...(!isHarmed()
									? {
											opacity: 0,
											"transition-delay": `${i() * 2}00ms`,
											transform: `translateY(-${i() * 3}0%)`,
										}
									: {}),
								...(deleting() === i()
									? {
											opacity: 0,
											"transition-delay": "0s",
										}
									: {}),
							}}
							class="cursor-pointer w-[38px] h-[32px] duration-300 transition-all ease-in"
							src="/heart.png"
							alt="heart"
						/>
					)}
				</For>
			</div>
		</pre>
	);
};

export default function Cow() {
	const maxLife = 4;
	const [life, setLife] = createSignal<number[]>([...Array(maxLife)].fill(0));
	const [deleting, setDeleting] = createSignal<null | number>(null);
	const isDead = () => life().length === 0;
	const attack = () => {
		if (isDead()) return;
		if (life().length !== maxLife) setDeleting(life().length - 1);

		const next_idx = Math.min(life().length, 3);
		new Audio("/sword-swing.mp3").play();
		new Audio(`/cow-hurt${next_idx}.mp3`).play();

		setTimeout(
			() => {
				setLife((v) => v.splice(0, v.length - 1));
			},
			life().length === maxLife ? 0 : 300,
		);
	};

	return (
		<pre class="font-bold relative">
			<pre class="sm:hidden inline justify-center pb-0">
				{`__________________________ 
/ I love working with code \\
| and rewarding things.    |
|                          |
| I'm deeply interested in |
| (but not limited to):    |
|                          |
| Decentralized systems,   |
| Neovim, Linux, Bitcoin   |
| multi-threaded, programs,|
\\ networking systems,etc. /
 -------------------------- 
          `}
			</pre>
			<pre class="hidden sm:inline justify-center pb-0">
				{`_____________________________________ 
/ I love working with code and rewar-  \\
| ding things.                          |
|                                       |
| I'm deeply interested in (but not     |
| limited to):                          |
|                                       |
| Decentralized systems, Neovim, Linux, |
| Bitcoin, multi-threaded programs,     |
\\ networking systems, UI design, etc.  /
--------------------------------------- 
          `}
			</pre>
			<CowBody
				deleting={deleting}
				maxLife={maxLife}
				attack={attack}
				life={life}
			/>
		</pre>
	);
}
