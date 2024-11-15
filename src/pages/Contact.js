import { FaPhoneAlt, FaLinkedinIn, FaInstagram, FaDiscord, FaTwitter } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandLeetcode } from "react-icons/tb";
import Resume from '../HJ-Resume.pdf';


function Contact({ links }) {
    return (
        <div id="contactme">
            <div className="links">
                <ul>
                    <li><a href='tel:+919902888858'><FaPhoneAlt /></a></li>
                    <li><a href='mailto:hetarth.jain@gmail.com'><SiGmail /></a></li>
                    <li><a href={links.linkedin}><FaLinkedinIn /></a></li>
                    <li><a href={links.github}><IoLogoGithub /></a></li>
                    <li><a href={links.leetcode}><TbBrandLeetcode /></a></li>
                    <li><a href={links.insta}><FaInstagram /></a></li>
                    <li><a href={links.discord}><FaDiscord /></a></li>
                    <li><a href={links.twitter}><FaTwitter /></a></li>
                </ul>

            </div>
            <ResumeButton />
        </div>
    );
}
function ResumeButton() {
    return (
        <div className='download-box'>
            <a href={Resume} download="Hetarth Jain" className='link'>
                <button className='download-button'>Resume</button>
            </a>
        </div>
    )

}

export default Contact;
