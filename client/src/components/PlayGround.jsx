import React, { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
} from "reactflow";

import CourseSelectorNode from "../customNodes/CourseSelectorNode";
import { FlowProvider } from "../context/FlowContext";
import coursesArray from "../data/data.json";
import "reactflow/dist/style.css";
import DownloadButton from "./DownloadButton";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const postCourseDict = coursesArray.reduce((acc, course) => {
  acc[course.name] = course.postCoursesList;
  return acc;
}, {});

const nodeTypes = { customNode: CourseSelectorNode };

export default function PlayGround({
  projectName,
  initialNodes,
  initialEdges,
}) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [rfInstance, setRfInstance] = useState(null);
  const { currentUser } = useAuth();
  useEffect(() => {
    if (initialNodes.length === 0) {
      createPostCourse(null, "Media & Intelligence");
    } else {
      setNodes(initialNodes);
      setEdges(initialEdges);
    }
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

  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem(projectName, JSON.stringify(flow));
      axios.post(`${import.meta.env.VITE_SERVER_URL}/api/user/addPlan`, {
        email: currentUser.email,
        newPlan: {
          name: projectName,
          content: JSON.stringify(flow),
        },
      });
      toast.success("Added New Plan Sucessful");
    }
  }, [rfInstance]);

  return (
    <FlowProvider createPostCourse={createPostCourse}>
      <div className="w-full h-[calc(100vh-4rem)]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          onInit={setRfInstance}
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
          {currentUser && (
            <Panel position="top-right">
              <button className="btn bg-white z-20" onClick={onSave}>
                Save
              </button>
            </Panel>
          )}
          <Panel position="top-center">
            <h2 className="btn bg-white">{projectName}</h2>
          </Panel>
          <DownloadButton />
        </ReactFlow>
      </div>
    </FlowProvider>
  );
}
