import ProjectBar from "./projectBar";
import "./projects.css";

export default function Projects() {
  return (
    <><div className="mainProjectsDiv">
          <h1>Projects Page</h1>
          <div>
              <ProjectBar title="Crocodile Predictions" type="Machine Learning" paragraph="hehehhehehehee" image="/pictures/Crocodilia_montage.jpg"> </ProjectBar>
              <ProjectBar title="Youtube Analytics Dashboard" type="Data Analytics" paragraph="This is a project that I started in which one can input a youtuber of their interest and see the statistics about them. 
              Utilizes the Youtuber API in order to gather the insights needed. Latest video statistics, subscriber count, and a description of the youtuber 
              are just some of the features that are provided." image="/pictures/dog_trial.jpg"> </ProjectBar>
              <ProjectBar title="News Article Notetaker" type="Software Engineering" paragraph="This is an articles news taker. Allows you to store news articles
              and type notes for them as well in a specific tab. It also has a built-in summarize feature, as well as ways to group your articles
              into separate groups such as politics, sports, etc, for which you can search by. The articles, and the notes for them, are stored on a local PostGreSQL database" image="/pictures/dog_trial.jpg"> </ProjectBar>
          </div>
    </div></>
  );
}


