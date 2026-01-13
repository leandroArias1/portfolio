import Contact from "../components/Contact/Contact";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";


function Home () {
    return (
        <div>
            <Header />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home