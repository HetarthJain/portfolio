import { FaHtml5, FaCss3, FaJs, FaReact, FaPython,FaGitAlt} from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { FcLinux } from "react-icons/fc";
import { SiMysql, SiMongodb, SiTensorflow, SiFlask, SiCplusplus, SiC, SiGeopandas, SiNumpy, SiDocker, SiLangchain  } from "react-icons/si";

function Stack() {
	return (
		<div className="tech-stack-cont">
			<h1>Experience with Technologies</h1>
			<div className="stack">
				<h2>Languages</h2>
				<SiC />
				<SiCplusplus />
				<FaPython />
				<FaJs />

				<h2>Web Development</h2>
				<FaHtml5 />
				<FaCss3 />				
				<FaReact />
				<IoLogoNodejs />
				<SiFlask />

				<h2>Databases</h2>
				<SiMysql />
				<SiMongodb />

				<h2>Tools & Technologies</h2>
				<SiGeopandas />
				<SiNumpy /> 
				<SiTensorflow />
				<FcLinux />
				<SiDocker />
				<FaGitAlt />
				<SiLangchain />
			</div>
		</div>
	)
}
export default Stack;