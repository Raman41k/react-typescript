import React, {PropsWithChildren} from 'react';

// interface CourseGoalProps {
//     title: string;
//     children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{ title: string; }>

const CourseGoal: React.FC<CourseGoalProps> = ({title, children}) => {
    return (
        <article className="course-goal">
            <div>
                <h2>{title}</h2>
                { children }
                <button>Delete</button>
            </div>
        </article>
    );
};

export { CourseGoal };