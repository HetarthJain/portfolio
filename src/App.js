import {Header,Footer} from "./pages/Header"
import Home from "./pages/Home";
import Article from "./pages/Article";
import dataJSON from "./data.json"
import "./Home.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	const data = dataJSON;
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home data={dataJSON} />}></Route>
				{/* <Route path="/article" element={<Articles articles={data.articles} />}></Route> */}
				<Route path="/article/:id" element={<Article articles={data.articles} />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
