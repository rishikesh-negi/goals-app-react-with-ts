import { useRef, type FC, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal: FC<NewGoalProps> = function ({ onAddGoal }) {
  // Extracting form data using useRef requires calling the hook as a generic function and passing extra type information about the input elements into the hook's type parameter:
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // new FormData(e.currentTarget); // One way to get form data from the form. Requires inputs to have the "name" attribute and the FormEvent<T> type to accept HTMLFormElement type as argument for its type parameter

    // We use the TS non-null assertion (!) here because we're 100% certain that the refs will not be null in this function, and we need to let TS know that as well:
    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;

    e.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal:</label>
        <input type="text" name="goal" id="goal" ref={goalRef} />
      </p>

      <p>
        <label htmlFor="summary">Short summary:</label>
        <input type="text" name="summary" id="summary" ref={summaryRef} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
