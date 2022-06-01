import { createEffect, createSignal } from "solid-js";
import { styled } from "solid-styled-components";
import DeleteIcon from "../DeleteIcon/DeleteIcon";

const Todo = styled("div")`
  padding: ".25rem";
  height: "3rem";
`;

const IconLink = styled("a")`
  position: "relative";
  left: "50px";
  width: "150px";
`;

const TodoInput = styled("input")`
  display: inline;
`;

export default function Todo(props) {
  const [toggleEdit, setToggleEdit] = createSignal(false);
  const [toggleDelete, setToggleDelete] = createSignal(false);
  const [modifiedText, setModifiedText] = createSignal(props.text);

  let todoRef;
  function onBodyClick(event) {
    if (event.target !== todoRef) {
      setToggleEdit(false);
      document.removeEventListener("click", onBodyClick);
    }
  }

  createEffect(() => {
    toggleEdit() && document.addEventListener("click", onBodyClick);
  });

  const toggleEditField = (e) => {
    if (e.detail === 2) {
      setToggleEdit((prev) => !prev);
    }
  };

  const submitTodoEdit = (e) => {
    e.preventDefault();
    setToggleEdit((prev) => !prev);
    props.dispatch({
      type: "EDIT_TODO",
      payload: { id: props.id, newText: modifiedText() },
    });
  };

  const canShowDeleteIcon = () => {
    return toggleEdit() !== true && toggleDelete() === true;
  };

  return (
    <Todo>
      <p onClick={toggleEditField}>
        <span
          style={{
            "text-decoration": props.completed ? "line-through" : "none",
          }}
        >
          {toggleEdit() ? (
            <form onSubmit={submitTodoEdit}>
              <TodoInput
                style={{ display: "inline" }}
                type="text"
                value={modifiedText()}
                onInput={(e) => setModifiedText(e.target.value)}
                ref={todoRef}
              />
            </form>
          ) : (
            <div
              onMouseEnter={() => setToggleDelete(true)}
              onMouseLeave={() => setToggleDelete(false)}
            >
              <input
                type="checkbox"
                checked={props.completed}
                onChange={() =>
                  props.dispatch({
                    type: "TOGGLE_TODO",
                    payload: { id: props.id },
                  })
                }
              />
              {props.text}
              {canShowDeleteIcon() && (
                <IconLink
                  href="#"
                  style={{
                    position: "relative",
                    left: "50px",
                    width: "150px",
                  }}
                  onClick={() =>
                    props.dispatch({
                      type: "DELETE_TODO",
                      payload: { id: props.id },
                    })
                  }
                >
                  <DeleteIcon />
                </IconLink>
              )}
            </div>
          )}
        </span>
      </p>
    </Todo>
  );
}
