import React, { useState, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges
} from "reactflow";
import "reactflow/dist/style.css";
import CircleNode from "./CircleNode";

const nodeTypes = {
  circle: CircleNode
};

const initialNodes = [
  {
    id: "1",
    data: { label: "test1" },
    position: { x: 0, y: 0 },
    type: "circle"
  },
  {
    id: "2",
    data: { label: "test2" },
    position: { x: 100, y: 100 },
    type: "circle"
  },
  {
    id: "3",
    data: { label: "test3" },
    position: { x: 0, y: 350 },
    type: "circle"
  },
  {
    id: "4",
    data: { label: "test4" },
    position: { x: 332, y: 253 },
    type: "circle"
  },
  {
    id: "5",
    data: { label: "test5" },
    position: { x: 245, y: 20 },
    type: "circle"
  },
  {
    id: "6",
    data: { label: "test6" },
    position: { x: 478, y: 400 },
    type: "circle"
  },
  {
    id: "7",
    data: { label: "test7" },
    position: { x: 564, y: 312 },
    type: "circle"
  }
];

const initialEdges = [
    { id: "1-2", source: "1", target: "2", label: "USD", type: "straight" },
    { id: "1-5", source: "1", target: "5", label: "BTC", type: "straight" },
    { id: "2-3", source: "2", target: "3", label: "FFF", type: "straight" },
    { id: "2-4", source: "2", target: "4", label: "ABC", type: "straight" },
    { id: "3-1", source: "3", target: "1", label: "BTC", type: "straight" },
    { id: "3-5", source: "3", target: "5", label: "DOG", type: "straight" },
    { id: "4-7", source: "4", target: "7", label: "BTC", type: "straight" },
    { id: "5-7", source: "5", target: "7", label: "CAT", type: "straight" },
    { id: "6-7", source: "7", target: "6", label: "CAT", type: "straight" }
];

const onNodeClick = (event, node) => {
  console.log("Node clicked:", node.id);
};

const onEdgeClick = (event, edge) => {
  console.log("Edge clicked:", edge.id);
};


const App = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  return (
    <div style={{ height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        onEdgeClick={onEdgeClick}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;