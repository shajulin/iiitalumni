import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import MousProjects from '../components/MousProjects';
import Collaborators from '../components/Collaborators';
import OurTeam from '../components/OurTeam';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <WhoWeAre />
                <MousProjects />
                <Collaborators />
                <OurTeam />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
