import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTasks }) {
	return (
		<div className="tasks">
			{tasks.map((list) => (
				<Task
					key={list.text}
					text={list.text}
					deleteTasks={deleteTasks}
					category={list.category}
				/>
			))}
		</div>
	);
}

export default TaskList;