import { ViewGridIcon } from "@heroicons/react/solid";
import TravelOptions from "./TravelOptions";

function AppRight() {
	return (
		<div className="px-5">
			<header className="flex justify-between p-5">
				<ViewGridIcon className="h-6 w-8" />
				<div className="flex items-center">
					<p className="link">Gallery</p>
					<p className="link">Stories</p>
					<img
						className="h-10 w-10 rounded-2xl"
						src="https://i.pinimg.com/736x/8e/de/53/8ede538fcf75a0a1bd812810edb50cb7.jpg"
						alt="Profile"
					/>
				</div>
			</header>
			<h1 className="text-blue font-semibold text-3xl">Discover</h1>
			<div className="flex w-80 justify-evenly mt-5">
				<p className="text-orange border-b-[2px]">Popular</p>
				<p className="text-gray text-lg hover:border-b-[2px] border-orange cursor-pointer">
					Adventure
				</p>
				<p className="text-gray text-lg hover:border-b-[2px] border-orange cursor-pointer">
					Tour
				</p>
			</div>
			<div className="flex overflow-scroll hidescrollbar mt-5">
				<img
					className="w-60 h-80 mx-2 rounded-xl"
					src="https://images.unsplash.com/photo-1560205318-8747e073c3d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
					alt="Surfing"
				/>
				<img
					className="w-60 h-80 mx-2 rounded-xl"
					src="https://images.unsplash.com/photo-1457459686225-c7db79d4e59f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80"
					alt="mountains"
				/>
				<img
					className="w-60 h-80 mx-2 rounded-xl"
					src="https://images.unsplash.com/photo-1541542684-be0c46417a12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=358&q=80"
					alt="mountains"
				/>
			</div>
			<h1 className="text-blue font-bold text-4xl mt-5">Types of Travel</h1>
			<div className="flex justify-evenly mt-5">
				<TravelOptions emoji="⭐" title="Luxury" active />
				<TravelOptions emoji="🧨" title="Safari" />
				<TravelOptions emoji="🎎" title="Train" />
				<TravelOptions emoji="👜" title="Travel" />
				<TravelOptions emoji="🚩" title="Hills" />
			</div>
		</div>
	);
}

export default AppRight;
