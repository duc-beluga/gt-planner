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
import "reactflow/dist/style.css";

import toast from "react-hot-toast";
import axios from "axios";

import CourseSelectorNode from "../customNodes/CourseSelectorNode";
import coursesArray from "../data/data.json";

import { FlowProvider } from "../context/FlowContext";
import { useAuth } from "../context/AuthContext";

import DownloadButton from "./DownloadButton";
import PlanNamePopUp from "./PlanNamePopUp";

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
  const [planName, setPlanName] = useState(projectName);

  const { currentUser } = useAuth();

  useEffect(() => {
    if (initialNodes.length === 0) {
      createPostCourse(null, "Media & Intelligence");
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
    if (planName === "") {
      document.getElementById("plan-name").showModal();
    } else {
      if (rfInstance && currentUser) {
        const flow = rfInstance.toObject();
        axios
          .put(
            `${import.meta.env.VITE_SERVER_URL}/api/user/${
              currentUser.uid
            }/plans/${planName}`,
            {
              newPlan: {
                name: planName,
                content: JSON.stringify(flow),
              },
            }
          )
          .then((result) => toast.success(result.data.message))
          .catch((error) => toast.error(error.response.data.message));
      }
    }
  }, [rfInstance, planName]);

  return (
    <FlowProvider createPostCourse={createPostCourse}>
      <div className="h-[calc(100vh-4rem)] w-full">
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
              <button className="btn z-20 bg-white" onClick={onSave}>
                Save
              </button>
            </Panel>
          )}
          <Panel position="top-center">
            <h2 className="btn bg-white">{planName}</h2>
          </Panel>
          <DownloadButton />
        </ReactFlow>
        <PlanNamePopUp
          rfInstance={rfInstance}
          currentUser={currentUser}
          onSave={onSave}
          setPlanName={setPlanName}
        />
      </div>
    </FlowProvider>
  );
}
