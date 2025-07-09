import React from 'react';
import './WorkExperienceSection.css';

const WorkExperienceSection = () => {
  return (
    <section className="work-experience-section">
      <h2>Experiencia Laboral</h2>
      <div className="work-experience-list" style={{maxWidth: 700, margin: '0 auto', textAlign: 'left'}}>
        <div className="work-experience-item" style={{marginBottom: '2em', padding: '1.2em', borderRadius: 10, background: 'rgba(94,192,192,0.07)', boxShadow: '0 1px 6px 0 rgba(19,126,126,0.07)'}}>
          <b>Projects:</b> GymSwype<br/>
          <b>Description:</b> Gym Access and Plan Purchase App<br/>
          <b>Role:</b> Lead frontend developer, Self-managed engineer stepping into product deploy, monitoring and quality assurance roles<br/>
          <b>Duration:</b> From June 2024 – Present.<br/>
          <b>Stack:</b> expo, TypeScript, React Native, redux, rtk query, styled-system, Firebase analytics, Firebase crashlytics, Firebase perf<br/>
          <b>Tasks performed:</b> Created, tested and deployed and a new app from scratch using expo, using the already existing backend api and new UI/UX designs
        </div>
        <div className="work-experience-item" style={{marginBottom: '2em', padding: '1.2em', borderRadius: 10, background: 'rgba(19,126,126,0.04)', boxShadow: '0 1px 6px 0 rgba(19,126,126,0.07)'}}>
          <b>Projects:</b> Tenpo<br/>
          <b>Description:</b> Bank application<br/>
          <b>Role:</b> Lead sub-product Frontend Mobile Developer.<br/>
          <b>Duration:</b> From August 2022 – April 2024.<br/>
          <b>Stack:</b> TypeScript, React Native, redux/thunk, firebase push notifications, styled-components<br/>
          <b>Tasks performed:</b> Worked alongside a team to develop a subproduct of Tenpo app “User Financial Assestment”. New features development and maintenance. Participation on daily meetings for several endgoals, including analysis and solution discussion, pair programming, reports, team management. Working alongside devops/design/QA teams to solve recurrent UX/UI tasks. Overseeing trainees and new entries on the project
        </div>
        <div className="work-experience-item" style={{marginBottom: '2em', padding: '1.2em', borderRadius: 10, background: 'rgba(94,192,192,0.07)', boxShadow: '0 1px 6px 0 rgba(19,126,126,0.07)'}}>
          <b>Projects:</b> MODO<br/>
          <b>Description:</b> Bank application<br/>
          <b>Role:</b> Frontend Mobile Developer.<br/>
          <b>Duration:</b> From February 2022 – August 2022. (short fixed contract)<br/>
          <b>Stack:</b> TypeScript, React Native, redux/thunk, Testing Library for unit testing, Detox for end to end testing, SonarCloud: test coverage, code quality control, Firebase Debugging : used it for events debugging, Bitrise : build and deployment<br/>
          <b>Tasks performed:</b> Mostly the same as Tenpo, but for a more important subproduct with a bigger team.
        </div>
        <div className="work-experience-item" style={{marginBottom: '2em', padding: '1.2em', borderRadius: 10, background: 'rgba(19,126,126,0.04)', boxShadow: '0 1px 6px 0 rgba(19,126,126,0.07)'}}>
          <b>Projects:</b> Uforia<br/>
          <b>Description:</b> Music/Radio/Podcast App for content owned by then client (Univision)<br/>
          <b>Role:</b> FullStack Developer.<br/>
          <b>Duration:</b> From January 2019 – September 2021.<br/>
          <b>Stack:</b> Frontend: TypeScript, React Native, redux/thunk, Animation API, Firebase Analytics API, Airship API. Backend: Java/Android (solved various building bugs, dependency issues and took part in audio ads integration) Java EE/Spring Boot (worked on some integrations(podcast/ads) . solved various api related bugs) JUnit 5, Mockito, Quartz. Database: MySQL 5.6. Other Tools: AWS/Codebuild, AWS/CloudWatch, AWS/ECS AWS/EC2, SonarCloud, Firebase Debugging.<br/>
          <b>Tasks performed:</b> New features development and maintenance ,Participation on daily meetings, submitting daily reports, Working alongside devops/design/QA teams to solve recurrent UX/UI tasks, Overseeing trainees and new entries on the company
        </div>
        <div className="work-experience-item" style={{marginBottom: '2em', padding: '1.2em', borderRadius: 10, background: 'rgba(94,192,192,0.07)', boxShadow: '0 1px 6px 0 rgba(19,126,126,0.07)'}}>
          <b>Projects:</b> Gym App<br/>
          <b>Description:</b> Gym customer payments management web app<br/>
          <b>Role:</b> Project creator<br/>
          <b>Duration:</b> From January 2018 –December 2018.<br/>
          <b>Stack:</b> Frontend: .jsp using JQuery. Backend: Java/Spring MVC. Database: Hibernate / MySQL 5.6<br/>
          <b>Tasks performed:</b> Selling the project. Designing, Developing, Deploying and Maintaining the app
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
