import { useState } from "react";
import ProjectBar from "./projectBar";
import "./projects.css";

const projects = [
    {title: "Does Somebody Make over $50k?", type: "Machine Learning", paragraph: `I utilized XGBoost in order to predict whether a person makes at least $50k annually or under given certain qualities such as demographics, type of job, education level. The dataset
      that I utilized the US Income Census from 1993 that I downloaded from Kaggle. Additionally, I performed a good amount of explatory data analysis in order to find correlations between income and certain demographic variables and additionally figure out
      if there are any confounding factors at play.`, image:"/pictures/project_pictures/1993_income_census.png"},
    {title: "Brest Cancer Predictor", type: "Machine Learning", paragraph: `In this project, I tried to predict whether somebody has breast cancer or not using a Breast Cancer dataset from the sklearn.datasets module.
      The model that I used was the SVM classifier as I was mainly trying to do a binary classification. Additionally, to further increase the accuracy of my model, I utilized Grid Search to fine tune certain hyperparameters
      in order to reduce any misclassifications. Additionally, I performed a bit of exploratory data analysis using Seaborn and Matplotlib`, image:"/pictures/project_pictures/breast_cancer.png"},
    {title: "Fashion Item Classifier", type: "Machine Learning", paragraph: `A project relating to being able to classify a fashion item. I built a convolutional neural network using Keras and trained it on the
      Fashion MNIST dataset.`, image:"/pictures/project_pictures/fashion_classifier.png"},
    {title: "AdventureWorks Business Report", type: "Data Science", paragraph: `This is my first Microsoft PowerBI project. It has four graphical pages which tell about the overall business sales,
      the distribution of which countries the orders are coming from, information about sales and profitability based on a particular product, and further analysis about individual customers. All pages are fully
      interactive and very user-friendly, utilizing common UX business practices in today's industry.`, image:"/pictures/project_pictures/AdventureWorks.png"},
    {title:"My Own Personal Website", type:"Software Engineering", paragraph: `This is a personal website that I built in order for others to learn more about me! I used React to create
      the website as it allowed me to create interactive and reusable components, which I further styled myself using advanced CSS techniques. Please look around to get to know more about me!`, image:"./pictures/project_pictures/personal_website.png"},
    {title:"Crocodile Predictions", type:"Machine Learning", paragraph:"This is a machine learning project about crocodiles", image:"/pictures/Crocodilia_montage.jpg"},
    {title:"Youtube Analytics Dashboard", type:"Data Science", paragraph:"This is a project that I started in which one can input a youtuber of their interest and see the statistics about them. Utilizes the Youtuber API in order to gather the insights needed. Latest video statistics, subscriber count, and a description of the youtuber are just some of the features that are provided.", image:"/pictures/dog_trial.jpg"},
    {title:"News Article Notetaker", type:"Software Engineering", paragraph:`This is an articles news taker. Allows you to store news articles
              and type notes for them as well in a specific tab. It also has a built-in summarize feature, as well as ways to group your articles
              into separate groups such as politics, sports, etc, for which you can search by. The articles, and the notes for them, are stored on a local PostGreSQL database`, image:"/pictures/dog_trial.jpg"}
]

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const filteredProj = projects.filter((project) => {
    const matchesName = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || project.type.toLowerCase().replace(/\s+/g, "") === selectedType.toLowerCase().replace(/\s+/g, "");
    return matchesName && matchesType 
  });

  return (
    <><div className="mainProjectsDiv">
          <h1>Projects Page</h1>
          <div>
              {/* This is for the search bar */}
                <input
                    type="text"
                    className="ProjectSearchBar"
                    placeholder="Search Projects..."
                    value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>

                {/* This is for the type filter */}
                <select className="ProjectTypeFilter" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                        <option value="all">All</option>
                        <option value="softwareEngineering">Software Engineering</option>
                        <option value="machineLearning">Machine Learning</option>
                        <option value="dataScience">Data Science / Data Analytics</option>
                </select>
              
              {filteredProj.map((project, index) => (
                    <ProjectBar key={index} title={project.title} type={project.type} paragraph={project.paragraph} image={project.image}/>
              ))}
          </div>
    </div></>
  );
}


