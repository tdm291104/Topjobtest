
import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 pt-32'>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>The Job Search Journey: Taking the First Step on the Career Path</h1>
          <p className='text-justify leading-7'>
          Surely, many of us have experienced the stressful and anxious phase of entering the job market, haven't we? Job recruitment 
          and employment aren't just about earning money but also about self-esteem, personal development, and building a stable future. 
          However, not everyone finds it easy to enter the job market and land a suitable job.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
        Facing the Challenge
        <br />
        In the journey of job hunting, having a supportive community and companionship can be immensely helpful. You can seek help from family, friends, career advisors, or online groups dedicated to recruitment and career development. Sharing experiences, learning from those with experience, and overcoming difficulties together are crucial keys on this path.
        <br />
        Building Skills and Experience
        <br />
        During the job search process, it's not just about finding the right company or position but also an opportunity to build and develop your skills. Seize every opportunity to learn, participate in courses, events, and create new experiences to enrich your resume and equip yourself for future opportunities.
        <br />
        Building Relationships
        <br />
        Relationships during the job search process can sometimes be as important as skills and experience. Sometimes, being introduced by a friend or acquaintance can open unexpected doors for you. Don't hesitate to expand your network and leverage the power of social connections.

Conclusion
Job recruitment and employment are not only about connecting job seekers and employers but also about a journey of self-discovery and career development. Seize every opportunity to learn, build relationships, and experience challenges so that you can go further on your career path. Good luck and success on this journey!
        </p>
      </div>
    </div>
  );
};

export default About;
