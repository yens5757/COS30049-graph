import React from "react";
import { Handle } from "reactflow";

const CircleNode = ({ data }) => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#fff",
        border: "1px solid #000",
        color: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        fontSize: "14px"
      }}
    >
      {data.label}
      <Handle type="target" isConnectable={false} />
      <Handle type="source" isConnectable={false} />
    </div>
  );
};

export default CircleNode;
