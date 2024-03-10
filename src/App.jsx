import SideBar from "./SideBar.jsx"
import Projects from "./Projects.jsx"
import quiz from "./assets/quiz.png"
import todo from "./assets/ToDolist.png"
import ImageSwiper from './assets/imageSwiper.png'

function App() {

  return (
    <>
    <SideBar/>
    <div className="ProjectMainDiv">
    <Projects Name="Succses quiz" subText="a quiz that ranks you on how i think you will be in life" imgsrc={quiz} url="https://github.com/Jadeeeeeeeeeeee/succsesQuiz"/>
    <Projects Name="To do list" subText="a simple to do list practice for react" imgsrc={todo} url="https://github.com/Jadeeeeeeeeeeee/ToDoListS"/> 
    <Projects  Name="image swiper" subText="a simple useState practice for image scrolling with arrows" imgsrc={ImageSwiper} url="https://github.com/Jadeeeeeeeeeeee/image-slider"/> 
     </div>
    </>
  )
}

export default App
