import {CourseGoalType} from "../../types/Goal.ts";

type AddGoalProps = {
    goals: CourseGoalType[];
    setGoals: React.Dispatch<React.SetStateAction<CourseGoalType[]>>;
};

const AddGoal: React.FC<AddGoalProps> = ({goals, setGoals}) => {

    function handleAddGoal() {
        const newGoal: CourseGoalType =  {
            id: Math.random(),
            title: 'Title',
            description: 'Description'
        }

        setGoals([...goals, newGoal]);
    }

    return (
        <div>
            <button onClick={handleAddGoal}>Add goal</button>
        </div>
    );
}

export {AddGoal};