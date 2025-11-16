import QuestionBox from './questionBox';
import SocialMediaBar from './SocialMediaBar';
import HobbyBar from './HobbyBar';
import EducationBar from './EducationBar';
import "./About.css";

const social_medias = [
  {platform: "Gomesgd@uci.edu", value: "mailto:gomesgd@uci.edu", image:"./pictures/social_media_pictures/email_logo.png"},
  {platform: "LinkedIN", value: "https://www.linkedin.com/in/gabrielgomes03/", image:"./pictures/social_media_pictures/LinkedIn_Logo.png"},
  {platform: "Instagram", value: "https://www.instagram.com/gabgom784/?hl=am-et", image:"./pictures/social_media_pictures/Instagram_Logo.png"},
  {platform: "GitHub", value: "https://github.com/gabgom784", image:"./pictures/social_media_pictures/github_logo.png"}
]

const hobbies = [
  {hobby: "Star Wars", image:"./pictures/hobby_pictures/Star_Wars.jpg"},
  {hobby: "Working Out", image: "./pictures/hobby_pictures/gym.jpg"},
  {hobby: "Gardening", image: "./pictures/hobby_pictures/gardening.jpg"},
  {hobby: "Try out new Restaurants", image: "./pictures/hobby_pictures/restaurant.jpg"},
  {hobby: "Reading", image: "./pictures/hobby_pictures/sunrise_book.jpg"},
  {hobby: "Gaming", image: "./pictures/hobby_pictures/minecraft.jpg"},
  {hobby: "Cooking", image: "./pictures/hobby_pictures/cooking.jpg"},
  {hobby: "Travelling", image: "./pictures/hobby_pictures/travelling.JPG"},
  {hobby: "Pillbug Terrariums", image: "./pictures/hobby_pictures/rolly_polly_terrarium.JPG"}
]

const educations = [
  {school: "University of California, Irvine", dates: "September 2025 - Present", major: "Masters in Computer Science", image:"./pictures/education_pictures/UC_Irvine_Logo.png", fit:"contain"},
  {school: "University of California, Berkeley", dates: "August 2021 - May 2025", major: "Electrical Engineering and Computer Science", minor: "Data Science", image: "./pictures/education_pictures/berkeley_Logo.png", fit:"contain"},
  {school: "John F. Kennedy High School", dates: "August 2017 - May 2021", image: "./pictures/education_pictures/jfk_highschool.jpeg", fit:"cover"}
]

export default function About() {
  return (
    <div class="MainAboutDiv">
      <h1>About Me</h1>
      <p>Hi, I'm Gabriel Gomes, a software engineer passionate about building impactful solutions.</p>
      <p>Feel free to explore my portfolio to learn more about my projects and skills.</p>
      <div className="AllEducationsDiv">
        <QuestionBox question="So where did I study?"></QuestionBox>
        <div className="Educations">
          {educations.map((education, index) => (
            <EducationBar key={index} school={education.school} dates={education.dates} major={education.major} minor={education.minor} image={education.image} fit={education.fit}/>
          ))}
        </div>
      </div>

      <div className="AllHobbiesDiv">
        <QuestionBox question="Do you have any hobbies?"></QuestionBox>
        <div className="Hobbies">
          {hobbies.map((hobby, index) => (
            <HobbyBar key={index} hobby={hobby.hobby} image={hobby.image}/>
          ))}
        </div>
      </div>

      <div className="ContactInfoDiv">
        <QuestionBox question="How can I contact you?"></QuestionBox>
        <p>You can reach me through a variety of ways! Check them out below!</p>
        <div className="SocialMedias">
          {social_medias.map((social_media, index) => (
                      <SocialMediaBar key={index} platform={social_media.platform} value={social_media.value} image={social_media.image}/>
          ))}
        </div>
      </div>
    </div>
  );
}