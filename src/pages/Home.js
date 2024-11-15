import Hero from './Hero'
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";
import Stack from "./Stack";
import Articles from "./Articles";

function Home({ data }) {
	return (
		<div>
			<Hero />
			<Contact links={data.links} />
			<Experience experience={data.experiences} />
			<Articles articles={data.articles} />
			<Projects projects={data.projects} />
			<Stack />
		</div>
	)
}
export default Home;