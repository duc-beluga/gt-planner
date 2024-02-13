import { Handle, Position, useNodeId } from "reactflow";
import { useFlow } from "./FlowProvider";
export default function CourseSelectorNode({ data }) {
  const { course, postCourses } = data;

  const { createPostCourse } = useFlow();
  const nodeId = useNodeId();

  const handleCourseSelected = (event) => {
    const selectedCourse = event.target.value;

    createPostCourse(nodeId, selectedCourse);
  };

  return (
    <div className="bg-white p-2 border-2 rounded-lg">
      <Handle type="target" position={Position.Top} />
      <div className="flex flex-col ">
        <label className="text-center m-1">{course}</label>
        {postCourses.length !== 0 && (
          <select
            className="select select-bordered select-sm w-full max-w-xs"
            name="courses"
            id="courses"
            onChange={handleCourseSelected}
          >
            <option></option>
            {postCourses.map((pc) => (
              <option key={pc} value={pc}>
                {pc}
              </option>
            ))}
          </select>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
