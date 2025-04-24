import {useState} from "react";

// import './App.css'
import {Header, AddGoal, CourseGoalList} from "./components";
import logo from './assets/react.svg';
import {CourseGoalType} from './types/Goal.ts';

function App() {
    const [goals, setGoals] = useState<CourseGoalType[]>([]);

    return (
    <main>
        <Header image={{src: logo, alt: 'Logo'}}>
            <h1>Hello world</h1>
        </Header>
        <AddGoal goals={goals} setGoals={setGoals} />
       <CourseGoalList goals={goals} />
    </main>
  )
}

export default App
