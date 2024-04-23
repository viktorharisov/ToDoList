import { DeleteIcon } from "@chakra-ui/icons";
import { Button} from "@chakra-ui/react";

const TasksDelete = ({ status, setTasks, tasks }) => {
    const tabText = () => {
        switch (status) {
            case 'done':
                return 'выполненных';
            case 'important':
                return 'важных';
            default:
                return 'всех задач';
        }
    };

    const hasTasksForStatus = () => {
        switch (status) {
            case 'important':
                return tasks.some(task => task.isImportant);
            case 'done':
                return tasks.some(task => task.isDone);
            default:
                return tasks.length > 0;
        }
    };

    const deleteTasksByStatus = () => {
        switch (status) {
            case 'important':
                return setTasks((prev) => prev.filter((item) => !item.isImportant));
            case 'done':
                return setTasks((prev) => prev.filter((item) => !item.isDone));
            default:
                return setTasks([]);
        }
    };
    return (

        <div className='delete__status'>
            {hasTasksForStatus() ? (
                <Button onClick={deleteTasksByStatus}>
                    Очистить список из {tabText()}
                    <DeleteIcon ms={1}/>
                </Button>
            ) : (
                <p>Задачи с {tabText()} не найдены</p>
            )
            }
        </div>
    );

};

export default TasksDelete;