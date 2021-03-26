import { useState } from "react";

interface SpandableProps {
  id: string | number;
  content: any;
}
export const Spandable = (props: SpandableProps) => {
  const { content } = props;
  const id = "spandable-" + props.id;
  const [open, setOpen] = useState(false);
  return (
    <div className="group p-4  bg-red-300 rounded-md ">
      <input
        className="hidden"
        type="checkbox"
        id={id}
        onChange={(e) => {
          console.log(typeof e.target.checked);
          setOpen(e.target.checked);
        }}
      />
      <label className="flex" htmlFor={id}>
        {content}
      </label>
      {open && (
        <div className="group-check:text-blue-600">hello ~{content}</div>
      )}
    </div>
  );
};
