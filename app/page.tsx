import Navbar from "./components/Navbar/Navbar";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";

export default function Home() {
	return (
		<>
			<div className="flex max-w-[80%] w-[80%] mx-auto">
				<div className="flex w-full flex-col lg:flex-row lg:justify-between mx-auto">
					<LeftPanel />
					<RightPanel />
				</div>
			</div>
		</>
	);
}
