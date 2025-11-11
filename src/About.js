import QuestionBox from './questionBox';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>Hi, I'm Gabriel Gomes, a software engineer passionate about building impactful solutions.</p>
      <p>Feel free to explore my portfolio to learn more about my projects and skills.</p>
      <QuestionBox question="So where did I study?"></QuestionBox>
      <QuestionBox question="So what do I like to do?"></QuestionBox>
      <QuestionBox question="What is my favorite food?"></QuestionBox>
    </div>
  );
}