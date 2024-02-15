import React, { useCallback, useEffect } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import CourseSelectorNode from "../customNodes/CourseSelectorNode";
import { FlowProvider } from "../context/FlowContext";
import coursesArray from "../data/data.json";
import "reactflow/dist/style.css";

const postCourseDict = coursesArray.reduce((acc, course) => {
  acc[course.name] = course.postCoursesList;
  return acc;
}, {});

const nodeTypes = { customNode: CourseSelectorNode };

export default function PlayGround() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    createPostCourse(null, "Media & Intelligence");
  }, []);

  const createPostCourse = useCallback((prevCourseId, curCourse) => {
    const newNodeId = `${nodes.length + 1}`;
    const postCoursesList = postCourseDict[curCourse]
      ? postCourseDict[curCourse]
      : [];
    const prevCourseNode = prevCourseId
      ? nodes.find((node) => node.id === prevCourseId)
      : null;
    const { x: preX, y: preY } = prevCourseNode
      ? prevCourseNode.position
      : { x: 750, y: 100 };
    const newNode = {
      id: newNodeId,
      type: "customNode",
      position: {
        x: preX + 100,
        y: preY + 150,
      },
      data: { course: curCourse, postCourses: postCoursesList },
    };

    setNodes((nodes) => {
      return [...nodes, newNode];
    });

    setEdges((edges) => {
      return [
        ...edges,
        {
          id: `${prevCourseId}-${newNodeId}`,
          source: prevCourseId,
          target: newNodeId,
        },
      ];
    });
  });

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <FlowProvider createPostCourse={createPostCourse}>
      <button className="btn absolute top-24 right-10 bg-white z-3">
        Save
      </button>
      <div className="w-full h-[calc(100vh-4rem)]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    </FlowProvider>
  );
}
