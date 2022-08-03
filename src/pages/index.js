import React from "react";
import {
    AboutSection,
    ArticlesSection,
    ContactSection,
    HeroSection,
    InterestsSection,
    Page,
    ProjectsSection,
    Seo,
} from "gatsby-theme-portfolio-minimal";
import { CustomHero } from "../components/CustomHero";

export default function IndexPage() {
    return (
        <>
            <Seo title="Meredith Phinney" />
            <Page useSplashScreenAnimation>
                <CustomHero sectionId="hero" />

                <AboutSection
                    sectionId="about"
                    heading="About Meredith Phinney"
                />

                <ArticlesSection
                    sectionId="articles"
                    heading="Latest Articles"
                    sources={["Blog"]}
                />

                <InterestsSection sectionId="interests" heading="Details" />

                {/*
                <ProjectsSection
                    sectionId="features"
                    heading="Built-in Features"
                />
                    */}
                <ContactSection sectionId="contact" heading="Contact me" />
            </Page>
        </>
    );
}
