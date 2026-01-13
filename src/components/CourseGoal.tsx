// import type { ReactNode } from "react";
import type { FC, PropsWithChildren } from "react";

// Defining a type for the component's props object:
// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

// Alternative way:
type CourseGoalProps = PropsWithChildren<{
  title: string;
  onDelete: (id: number) => void;
  id: number;
}>;

// export default function CourseGoal({ title, children }: CourseGoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//         <button>Delete</button>
//       </div>
//     </article>
//   );
// }

// A concise alternative syntax for writing React functional components:
const CourseGoal: FC<CourseGoalProps> = ({ title, onDelete, id, children }) => (
  <article>
    <div>
      <h2>{title}</h2>
      {children}
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  </article>
);
// FC, PropsWithChildren, and ReactNode are built-in generic types in the "@types/react" package

export default CourseGoal;
