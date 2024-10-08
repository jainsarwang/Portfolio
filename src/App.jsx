import NavBar from "./Sections/NavBar";
import HeroSection from "./Sections/HeroSection";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Client from "./Sections/Client";
import Experience from "./Sections/Experience";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

function App() {
	return (
		<>
			<main className="max-w-7xl mx-auto">
				<NavBar />
				<HeroSection />
				<About />
				<Projects />
				<Client />
				<Experience />
				<Contact />
				<Footer />
			</main>
		</>
	);
}

export default App;
