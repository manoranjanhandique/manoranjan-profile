import node from "../../public/images/node.png"
import express from "../../public/images/express.png"
import ts from "../../public/images/ts.png"
import mongo from "../../public/images/mongo.png"
import rest from "../../public/images/rest.png"
import mySQL from "../../public/images/mySql.png"
import mocha from "../../public/images/mocha.png"

import react from "../../public/images/react.png"
import js from "../../public/images/js.png"
import html from "../../public/images/html.png"
import tailwind from "../../public/images/tailwind.png"
import css from "../../public/images/css.png"

import azure from "../../public/images/azure.webp"
import cicd from "../../public/images/ci_cd.png"
import aws from "../../public/images/aws.png"
import docker from "../../public/images/docker.png"
import git from "../../public/images/git.png"
import github from "../../public/images/github.png"

import agile from "../../public/images/agile.jpg"
import confluence from "../../public/images/confluence.jpg"
import vscode from "../../public/images/vscode.png"
import postman from "../../public/images/postman.png"

const SkillsHeader = () => {
    return (
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">My Skills</h1>
        <p className="text-lg text-gray-600 italic">
          A versatile developer with expertise in modern technologies, ready to tackle any challenge.
        </p>
      </div>
    );
  };

  const SkillCard = ({ title, skills }) => {
    return (
        <div className="border border-gray-100 shadow-lg rounded-lg bg-gray-100 p-4 mx-2 transition-transform transform hover:scale-105">
            <h1 className="text-2xl font-semibold text-center mb-4 text-gray-800">{title}</h1>
            <ul className="space-y-2">
                {skills.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-start bg-white rounded-md p-2 shadow-sm transition-transform transform hover:-translate-y-1">
                        <img src={skill.image} alt={skill.name} className="w-12 h-10 mr-2" />
                        <span className="text-gray-700">{skill.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Skills = () => {
    return (
        <div className="bg-gray-200">
            <div>
                <SkillsHeader/>
            </div>
            <div className="flex flex-wrap justify-center p-4">
                <SkillCard
                    title="Backend"
                    skills={[
                    { name: 'Node.js', image: node },
                    { name: 'Express.js', image: express },
                    { name: 'TypeScript', image: ts },
                    { name: 'MongoDB', image: mongo },
                    { name: 'MySQL', image: mySQL },
                    { name: 'Rest API', image: rest },
                    { name: 'Mocha-Chai', image: mocha },
                    ]}
                />
                <SkillCard
                    title="Frontend"
                    skills={[
                    { name: 'React.js', image: react },
                    { name: 'JavaScript', image: js },
                    { name: 'HTML', image: html },
                    { name: 'Tailwind CSS', image: tailwind },
                    { name: 'CSS', image: css },
                    ]}
                />
                <SkillCard
                    title="DevOps & Cloud"
                    skills={[
                    { name: 'Azure DevOps', image: azure },
                    { name: 'CI/CD', image: cicd },
                    { name: 'Docker', image: docker },
                    { name: 'AWS', image: aws },
                    ]}
                />
                <SkillCard
                    title="Version Control:"
                    skills={[
                    { name: 'Git', image: git },
                    { name: 'GitHub', image: github },
                    ]}
                />
                <SkillCard
                    title="PM & Tools"
                    skills={[
                    { name: 'Agile', image: agile },
                    { name: 'Confluence', image: confluence },
                    { name: 'Postman', image: postman },
                    { name: 'VS Code', image: vscode },
                    ]}
                />
            </div>
        </div>
    );
  };

export default Skills;