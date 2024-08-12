"use client";
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import React from "react";

const GetSegments = () => {
  const segments = useSelectedLayoutSegment();
  return <div>Segments: {segments}</div>;
};

export default GetSegments;
