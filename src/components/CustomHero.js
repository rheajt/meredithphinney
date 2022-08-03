import React from "react";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { Animation } from "gatsby-theme-portfolio-minimal/src/components/Animation";
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section";
import { SocialProfiles } from "gatsby-theme-portfolio-minimal/src/components/SocialProfiles";
import { useLocalDataSource } from "gatsby-theme-portfolio-minimal/src/sections/Hero/data";
// import { PageSection } from '../../types';
import * as classes from "./custom-hero.module.css";

export function CustomHero(props) {
    const response = useLocalDataSource();
    const data = response.allHeroJson.sections[0];

    return (
        <Animation type="fadeUp" delay={400}>
            <Section
                anchor={props.sectionId}
                additionalClasses={[classes.HeroContainer]}
            >
                {data.heroPhoto?.src && (
                    <div
                        className={classes.heroImageCont}
                        style={{ minWidth: 200 }}
                    >
                        <GatsbyImage
                            className={classes.heroImage}
                            image={
                                data.heroPhoto.src.childImageSharp
                                    .gatsbyImageData
                            }
                            alt={data.heroPhoto.alt || `Profile Image`}
                            loading="eager"
                        />
                    </div>
                )}

                <div className={classes.Hero}>
                    <div>
                        <StaticImage
                            src="../../content/images/meredith-logo.png"
                            alt="Meredith Phinney Logo"
                        />
                    </div>

                    <div className={classes.Intro}>
                        {data.intro && (
                            <span
                                style={{ textAlign: "center" }}
                                className={classes.ImagePrefix}
                            >
                                {data.intro}
                            </span>
                        )}

                        {data.image?.src && (
                            <Animation
                                className={classes.Image}
                                type="waving-hand"
                                duration={2500}
                                iterationCount={100}
                            >
                                <GatsbyImage
                                    image={
                                        data.image.src.childImageSharp
                                            .gatsbyImageData
                                    }
                                    alt={data.image.alt || `Intro Image`}
                                    loading="eager"
                                />
                            </Animation>
                        )}
                    </div>
                    <p>{data.description}</p>
                    <Animation type="fadeLeft" delay={600}>
                        {data.socialProfiles && (
                            <SocialProfiles
                                from={data.socialProfiles.from}
                                showIcon={data.socialProfiles.showIcons}
                            />
                        )}
                    </Animation>
                </div>
            </Section>
        </Animation>
    );
}
