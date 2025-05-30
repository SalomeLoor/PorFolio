import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView,
} from "@ionic/react";
import "../Styles/AboutMe.css";
import NavOptions from "../components/NavOptions";
import "../Styles/AboutMe.css";
import Photo from "../assets/photoGimbly.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import inst from "../assets/insta.png"

import { designSkill, eduaction, Language, WebSkill } from "../other/Objets";

const AboutMe: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen  
        style={{'--background': '#eabde671',}}
        >
        <div className="container-about-me">
          <IonCard className="card-aboutme">
            <img className="photo" src={Photo} alt="photoGimbly" />
            <IonCardHeader>
              <IonCardTitle className="title sofia-regular">
                Hi, I´m Salomé 🌷
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="card-content source-code-pro ">
              <p >
                I am currently a Computer Science student at ESPAM MFL
                University located in Calceta, Manabí, Ecuador. Throughout my
                studies, I have learned programming languages such as C++, C#,
                and Java. I am currently learning Javascript, HTML, CSS, and, in
                the future, why not Python? I am also learning popular design
                frameworks such as Tailwind and Bootstrap, although I prefer
                pure CSS, since you can work magic with it. I am also learning
                Front-End development frameworks such as ReactJS and, in the
                future, Angular. I am also learning back-end development with
                NodeJS and Laravel. I love learning new things and being able to
                create something new that is productive, innovative, and
                creative.
              </p>
            </IonCardContent>
            <div className="container-btn ion-padding">
              <IonButton className="btn btn1">Download CV</IonButton>
              <IonButton className="btn">More me...</IonButton>
            </div>
            <div className="redes">
              <img src={facebook} alt="facebook" />
              <img src={inst} alt="instagram" />
              <img src={linkedin} alt="linkedin" />
              <img src={github} alt="github" />
            </div>
          </IonCard>
        </div>

        <div className="container-DevSkills ion-padding">
          <h2 className="title sofia-regular">Web Development Skills</h2>
          <IonSegment className="segment" value="first">
            <IonSegmentButton value="first" contentId="first">
              <h5 className="source-code-pro ">Technologies</h5>
            </IonSegmentButton>
            <IonSegmentButton value="second" contentId="second">
              <h5 className="source-code-pro ">Design</h5>
            </IonSegmentButton>
          </IonSegment>

          <IonSegmentView>
            <IonSegmentContent className="segment-content" id="first">
              <IonGrid >
                <IonRow>
                  {WebSkill.map((skill, index) => (
                    <IonCol key={index} size="6" sizeSm="4" sizeMd="3" sizeLg="2">
                      <IonCard className="card-devskill source-code-pro">
                        <img src={skill.imagen} alt="img" />
                        <IonCardHeader>
                          <IonCardTitle className="card-title">{skill.name}</IonCardTitle>
                          <IonCardSubtitle className="card-subtitle">{skill.level}</IonCardSubtitle>
                        </IonCardHeader>
                      </IonCard>
                    </IonCol>
                  ))}
                </IonRow>
              </IonGrid>
            </IonSegmentContent>

            <IonSegmentContent id="second">
              <IonGrid>
                <IonRow>
                  {designSkill.map((skill, index) => (
                    <IonCol key={index} size="6" sizeSm="4" sizeMd="3" sizeLg="2">
                      <IonCard className="card-devskill source-code-pro">
                        <img src={skill.imagen} alt="img" />
                        <IonCardHeader>
                          <IonCardTitle className="card-title">{skill.name}</IonCardTitle>
                          <IonCardSubtitle className="card-subtitle">{skill.level}</IonCardSubtitle>
                        </IonCardHeader>
                      </IonCard>
                    </IonCol>
                  ))}
                </IonRow>
              </IonGrid>
            </IonSegmentContent>
          </IonSegmentView>
        </div>

        <div className="container-Education ion-padding">
          <h2 className="title sofia-regular">Education</h2>
          <IonSegment className="segment" value="Academic">
            <IonSegmentButton value="Academic" contentId="Academic">
              <h5 className="source-code-pro ">Academic Degree</h5>
            </IonSegmentButton>
            <IonSegmentButton value="Language" contentId="Language">
              <h5 className="source-code-pro " >Language</h5>
            </IonSegmentButton>
          </IonSegment>

          <IonSegmentView>
            <IonSegmentContent id="Academic">
              {eduaction.map((edu, index) => (
                <IonCard className="card-edu source-code-pro" key={index} >
                  <img src={edu.imagen} ></img>
                  <IonCardHeader>
                    <IonCardTitle className="card-edutitle">{edu.name}</IonCardTitle>
                    <IonCardSubtitle className="card-eduSubtitle" >
                      <strong>Level:</strong> {edu.nevel} <br />
                      <strong>Date: </strong>
                      {edu.date} <br />
                      <strong>Degree Obtaied: </strong>
                      {edu.degreeObtaied}
                    </IonCardSubtitle>
                  </IonCardHeader>
                </IonCard>
              ))}
            </IonSegmentContent>
            <IonSegmentContent id="Language">
              {Language.map((leng, index) => (
                <IonCard  className="card-edu source-code-pro" key={index}>
                  <IonCardHeader>
                    <IonCardTitle className="card-edutitle">{leng.name}</IonCardTitle>
                    <IonCardSubtitle className="card-eduSubtitle">{leng.level}</IonCardSubtitle>
                  </IonCardHeader>
                </IonCard>
              ))}
            </IonSegmentContent>
          </IonSegmentView>
        </div>
        <div className="btns">
          <IonButton className="btn btn1"> Recognitions</IonButton>
          <IonButton className="btn"> Certification</IonButton>
        </div>
        <NavOptions />
      </IonContent>
    </IonPage>
  );
};

export default AboutMe;
