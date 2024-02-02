import "../style.css"
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {

    return (
        <div className="aboutMe">
            Studies
            <div className="description">
                <ul>
                    <li>Liceul tehnologic Lucian Blaga Reghin, profil Mate-Info</li>
                    <li>Facultatea de Automatica si Calculatoare Cluj-Napoca</li>
                </ul>
            </div>
            Experience
            <div className="description">
                <ul>
                    <li>
                        Software Engineer at Reea
                    </li>
                </ul>
            </div>
            Personal Projects
            <div className="description">
                <ul className="links">
                    <li>
                        <i className="bi bi-github"></i>
                        <a href="https://github.com/Daniel17-Byte" target="_blank"> Github</a>
                    </li>
                    <li>
                        <i className="bi bi-gitlab"></i>
                        <a href="https://gitlab.com/Daniel17-Byte" target="_blank"> Gitlab</a>
                    </li>
                </ul>
            </div>
            Description
            <div className="description">
                    Welcome to my personal space on the web! I'm a 23-year-old passionate individual, balancing my academic pursuits in Computer Science at the Technical University of Cluj-Napoca (UTCN) with my professional journey as a Software Engineer. With two years of hands-on experience in Java, I've honed my skills in developing robust software solutions, constantly driven by the challenge of solving complex problems and making a tangible impact through technology.

                Beyond my professional and academic life, I have a fervent passion for fitness and sports. The discipline and commitment I demonstrate in the gym and on the football field mirror the dedication I bring to my work and studies. I believe in the power of a balanced lifestyle, where physical fitness and mental agility play crucial roles in achieving personal and professional excellence.

                Coffee aficionado might be an understatement when describing my love for this energizing elixir. It's not just about the caffeine boost but the moments of tranquility and reflection that come with every cup. This simple pleasure complements my dynamic lifestyle, offering moments of peace amid the hustle.

                Whether it's tackling the next challenge at the gym, scoring a goal on the football field, brewing the perfect cup of coffee, diving into the intricacies of Computer Science, or coding away on my next Java project, I'm always on the lookout for the next adventure. Through this website, I aim to share my journey, insights, and passions. Welcome aboard!
            </div>
        </div>
    );
}

export default Home;
