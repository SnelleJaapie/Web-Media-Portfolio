import React from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import home from "../../assets/home.png"
import birthday from "../../assets/birthday.png"
import details from "../../assets/details.png"
import pexel from "../../assets/pexels1.jpg"
import phone from "../../assets/phone.png"
import Cards from '../../components/cards/Cards'
import Work from "../../components/work/Work"
import Projects from "../../components/projects/Projects"
import Education from '../../components/education/Education'

export default function Cv() {
    const pageTransitions = {
        in: {
            opacity: 1,
            scaleX: 1
        },
        out: {
            opacity: 0,
            scaleX: 0
        }
    };
    return (
        <>
            <Helmet>
                <title>
                    My portfolio | CV
                </title>
            </Helmet>
            <div className="cv-parentContainer">
                <div className="cv-pageContainer">
                    <div className="cv-topDivContainer">
                        <div className="cv-topDivName">
                            Jasper<br /> de Korte
                            <div id="frontEndDeveloper">
                                Front-end developer<br />
                            </div>
                            <a className="cv-topDivGithub" target="_blank" rel="noreferrer" href="https://github.com/JasperDeKorte">
                                Github/JasperDeKorte
                            </a>
                        </div>
                        <img id="cv-pexel" src={pexel} alt="" />
                        <div className="cv-topDivAdres">
                            <p>
                                <img className="profileIcons" src={home} alt="" />
                                Van leeuwenerf 2, 3263EJ, <br /> Oud-Beijerland
                            </p>
                            <p>
                                <img className="profileIcons" src={birthday} alt="" />
                                05-10-1996
                            </p>
                            <p>
                                <img className="profileIcons" src={details} alt="" />
                                jasperdekorte@gmail.com
                            </p>
                            <p>
                                <img className="profileIcons" src={phone} alt="" />
                                06-37313012
                            </p>
                        </div>
                    </div>

                    <div className="cv-body">
                        <motion.div
                            initial="out"
                            animate="in"
                            exit="out"
                            variants={pageTransitions}
                            transition={{ duration: 1 }}
                        ></motion.div>
                        <div className="cv-profileContainer">
                            <div className="cv-profileInfo">
                                <div>
                                    <h1>Professionele Vaardigheden</h1>
                                    <div>
                                        HTML/CSS<br />
                                        JAVASCRIPT<br />
                                        REACT<br />
                                        NPM<br />
                                        NodeJS<br />
                                        GITHUB<br />
                                        ADOBE<br />
                                        <li>Premiere</li>
                                        <li>After Effects</li>
                                        <li>Photoshop</li>
                                        <li>Lightroom</li>
                                        <li>Illustrator</li>
                                    </div>

                                    <div>
                                        <h1>Educatie</h1>
                                        <Education
                                            educationTitle="Novi Hogeschool B.V."
                                            educationDescription="HBO Front End Development "
                                            educationLength="maart 2021 - augustus 2021"
                                            educationAward="Certificaat behaald"
                                        />
                                        <br />
                                        <Education
                                            educationTitle="Grafisch Lyceum Rotterdam"
                                            educationDescription="MBO 4 Audiovisuele Productie"
                                            educationLength="augustus 2013 - april 2017"
                                            educationAward="Diploma behaald"
                                        />
                                        <br />
                                        <Education
                                            educationTitle="CSG Willem van Oranje"
                                            educationDescription="Mavo TL "
                                            educationLength="september 2009 - april 2013"
                                            educationAward="Diploma behaald"
                                        />
                                        <br />
                                    </div>
                                    <div>
                                        <h2>Cursussen & Trainingen</h2>
                                        <Education
                                            educationTitle="Arbocentrum"
                                            educationDescription="VCA Vol"
                                            educationLength="Veiligheid voor operationeel Leidinggevende"
                                            educationAward="Certificaat behaald"
                                        />
                                    </div>
                                    <div>
                                        <h1>Persoonlijke Skills</h1>
                                        <div>
                                            <div className="cv-educationTitleStyle" style={{fontSize: 20}}>Talen</div>
                                            <div className="">Nederlands - moedertaal<br />Engels - vloeiend<br />Duits - basis</div>
                                        </div>
                                    </div>
                                    <div>
                                        <h1>Hobbies & interesses</h1>
                                        <ul>
                                            <li><div className="cv-educationTitleStyle">Programmeren</div></li>
                                            <li><div className="cv-educationTitleStyle">Video & Fotografie</div></li>
                                            <li><div className="cv-educationTitleStyle">Computers & Gadgets</div></li>
                                            <li><div className="cv-educationTitleStyle">Motors & Motorrijden</div></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cv-mainContainer">
                            <Cards
                                cardsTitle="OVER MIJ"
                                cardsDescription="Hardwerkend persoon met een professionele klantgerichte attitude die doorzet tot de klus geklaard is. Creatief zijn is een van mijn sterke kanten en ben dus ook hiermee in de gelegenheid om nieuw inzicht te geven bij uitdagingen.
                                    Werken bij een mooi, gezellig bedrijf die de mogelijkheid biedt jezelf door te ontwikkelen en zo waardevoller te worden voor het bedrijf, is mijn doel.
                                    Des te meer uitdaging, des te meer te leren!"
                            />


                            <div className="cv-mainSections">
                                <h1 className="textOrangeUnderline">PROJECTEN</h1>
                                <div>
                                    <Projects
                                        projectLink="https://snellejaapie.github.io/Web-Media-Portfolio/"
                                        projectTitle="Mijn Web & Media Portfolio"
                                        projectDescription="Bovenstaande website, voor mijn portfolio, web applicaties en media creaties."
                                    />
                                    <Projects
                                        projectLink="https://github.com/JasperDeKorte/Lord-of-The-Rings-Trivia"
                                        projectTitle="Lord of The Rings - Trivia"
                                        projectDescription="Een kort, leuk spelletje om je kennis van LOTR te testen, gemaakt als eindopdracht voor mijn studie."
                                    />
                                </div>
                            </div>


                            <div className="cv-mainSections">
                                <h1 className="textOrangeUnderline">WERKERVARING</h1>
                                <div>
                                    <Work
                                        employer="AENC Audiovisual"
                                        jobTitle="Audiovisueel Technician"
                                        jobDuration="mei 2020 - mei 2021"
                                        jobDescription="Het aanbrengen van audiovisuele oplossingen bij scholen en
                                        bedrijven waaronder digiborden en narrowcasting."
                                    />
                                    <Work
                                        employer="ANWB"
                                        jobTitle="Voertuighulpverlener buitenland (tijdelijk)"
                                        jobDuration="juli 2019 - september 2019"
                                        jobDescription="Het behandelen van het eerste contact, het verlenen van bijstand en het sturen
                                                van hulp bij pechgevallen in het buitenland, alsmede het verlenen van
                                                vervolgbijstand (met name in Duitsland)."
                                    />
                                    <Work
                                        employer="Gebo Gelato"
                                        jobTitle="Logistiek Medewerker (seizoenswerk)"
                                        jobDuration="april 2016 - oktober 2019"
                                        jobDescription="Uitvoeren van logistieke operaties op de vloer en aansturen van het vloerpersoneel."
                                    />
                                    {/* <Work
                                        employer="De Bogerd"
                                        jobTitle="Junior Toezichthouder"
                                        jobDuration="februari 2016 - september 2016"
                                        jobDescription="Het toezichthouden op zwembadgasten en assisteren bij noodgevallen en vragen."
                                    /> */}
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
