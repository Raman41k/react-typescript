import React from "react";

import {CourseGoal} from "../CourseGoal/CourseGoal.tsx";
import {CourseGoalType} from "../../types/Goal.ts";

interface CourseGoalListProps {
    goals: CourseGoalType[];
}

const CourseGoalList: React.FC<CourseGoalListProps> = ({goals}) => {
    return (
        <ul>
            {goals.map(goal =>
                <li>
                    <CourseGoal key={goal.id} title={goal.title}>
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            )}
        </ul>
    );
}

export {CourseGoalList};