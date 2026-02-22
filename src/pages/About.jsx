import { useState, useEffect, useRef } from "react";
import Carousel from "../components/Carousel";

export default function About() {
    const [activeSection, setActiveSection] = useState('');
    const sectionsRef = useRef({});

    const sections = [
        { id: 'intro', title: 'intro' },
        { id: 'gallery', title: 'gallery' },
        // { id: 'design', title: 'design system' },
        { id: 'process', title: 'process' }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const visibleSections = entries
                .filter(entry => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visibleSections.length > 0) {
                setActiveSection(visibleSections[0].target.id);
            }
        }, {
            threshold: [0, 0.25, 0.5, 0.75, 1],
            rootMargin: '-20% 0px -20% 0px'
        });

        Object.values(sectionsRef.current).forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, [])

    const scrollToSection = (id) => {
        sectionsRef.current[id]?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <div className="about-page page">
            <div className="side-menu">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={activeSection === section.id ? 'active' : ''}>
                        {section.title}
                    </button>

                ))}
            </div>
            <div className="contents">
                <section id="intro" ref={el => sectionsRef.current.intro = el}>
                    <h1>WHAT IS ZESTY?</h1>
                    <p>
                        in high school (2023), i began to develop a fascination with mass production
                        and commercial goods. franchises with striking branding and a defined identity
                        became the core of my creative practice, so for my final high school exhibition,
                        i created ZESTY as an ode to the intersection of two things i loved: commercial
                        goods and oranges.
                    </p>
                    <p> 
                        for many months i designed products and posters, developing brand identity
                        through colours and styles. more importantly, ZESTY was most 
                        recognizable through its iconic figurehead, Zester.
                    </p>
                    <p> take a look! </p>
                </section>
                <section id="gallery" ref={el => sectionsRef.current.gallery = el}>
                    <h1>ZESTY GALLERY</h1>
                    <Carousel type="gallery" />
                </section>
                {/*
                <section id="design" ref={el => sectionsRef.current.design = el}>
                    <h1> ZESTY DESIGN SYSTEM</h1>
                </section>
                */}
                <section id="process" ref={el => sectionsRef.current.process = el}>
                    <h1> HOW DID WE GET HERE?</h1>
                    <p>
                        as i look back, each project under the ZESTY franchise has meticulous planning
                        underlying its development. i had made a working vending machine that dispensed
                        orange keychains with foam board and paper mache:
                    </p>
                    <Carousel type="machine" />
                    <p> 
                        most recently, Zester has undergone a redesign before i modelled him for this
                        very site. his proportions were never consistent as i ade his products, so i 
                        started with that.
                    </p>
                    <Carousel type="process" />
                    <p>
                        something about wanting to make a website something about wanting to make
                        a website dafdssomething about wanting to make a website sometdfasdfhing
                        about wanting to make a website somasdfething about wanting to make a
                    </p>
                </section>
            </div>
        </div>
    )
}