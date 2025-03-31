import React from 'react';

interface CourseGoalProps {
    title: string;
    description: string;
}

const CourseGoal: React.FC<CourseGoalProps> = ({title, description}) => {
    return (
        <article className="course-goal">
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <button>Delete</button>
            </div>
        </article>
    );
};

export { CourseGoal };