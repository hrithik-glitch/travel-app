import Head from "next/head";
import AppRight from "../components/AppRight";

export default function Home() {
	return (
		<div className="flex sm:flex-row flex-col-reverse">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div
				style={{
					background:
						"url(https://res.cloudinary.com/dssvrf9oz/image/upload/v1622735422/mads-schmidt-rasmussen-xfngap_DToE-unsplash_k3yczw.jpg)",
					flex: "0.6",
				}}
				className="font-poppins flex flex-col h-screen pb-40 md:pb-0 justify-center items-center !bg-cover !bg-bottom object-contain md:rounded-r-3xl md:rounded-tl-none rounded-t-3xl"
			>
				<h2 className="absolute left-10 top-10 text-white font-bold font-poppins">
					TooTravel
				</h2>
				<div className="flex flex-col w-3/5">
					<h1 className="text-white text-5xl mt-7 font-semibold font-poppins">
						The Most Beautiful Places in the World!
					</h1>
					<p className="text-white text-sm mt-10">
						Plan your vacation on the most beautiful places on the world
					</p>
					<button className="bg-orange h-10 w-60 text-white py-2 rounded-xl mt-10 px-5">
						Get Started
					</button>
				</div>
			</div>
			<div style={{ flex: "0.4" }}>
				<AppRight />
			</div>
		</div>
	);
}
