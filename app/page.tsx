import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";

export default function Home() {
	return (
		<>
			<div className="flex w-full mx-auto ">
				<div className="flex w-full flex-col lg:flex-row lg:justify-between mx-auto bg-zinc-950 overflow-auto">
					<LeftPanel />
					<RightPanel />
				</div>
			</div>
		</>
	);
}
