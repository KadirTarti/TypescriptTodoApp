import { IconButton, ListItem, ListItemText } from "@mui/material";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

interface ITodoListItem extends ITodoListFn {
  todo: ITodoType;
}

const TodoListItem: React.FC<ITodoListItem> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <ListItem
      disableGutters
      sx={{ padding: "1rem", cursor: "pointer" }}
      secondaryAction={
        <IconButton
          onClick={() => deleteTodo(todo.id)}
          sx={{ "&:hover": { color: "#c3195d", background: "#feffdf" } }}
          aria-label="delete"
        >
          <RemoveCircleIcon/>
        </IconButton>
      }
    >
      <ListItemText
        onClick={() => toggleTodo(todo)}
        sx={{ wordWrap: "break-word" }}
        primary={todo.task}
      />
    </ListItem>
  );
};

export default TodoListItem;
