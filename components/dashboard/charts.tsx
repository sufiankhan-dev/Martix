"use client";

import React from "react";

export function BarChart() {
  return (
    <div className="w-full h-full">
      <div className="flex items-end justify-between h-full">
        {months.map((month, i) => (
          <div key={month} className="flex flex-col items-center gap-2 w-full">
            <div className="relative w-full flex justify-center group">
              <div
                className="w-8 bg-primary/20 rounded-sm"
                style={{ height: `${desktopData[i]}%` }}
              ></div>
              <div
                className="w-8 bg-primary rounded-sm absolute bottom-0"
                style={{ height: `${mobileData[i]}%` }}
              ></div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                D: {desktopData[i]}k<br />
                M: {mobileData[i]}k
              </div>
            </div>
            <span className="text-xs text-muted-foreground">{month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LineChart() {
  return (
    <div className="w-full h-full relative">
      <svg
        viewBox="0 0 100 40"
        className="w-full h-full stroke-[0.5] -mx-1"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 Q25,5 50,25 T100,15"
          fill="none"
          stroke="currentColor"
          className="stroke-primary"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0,25 Q35,30 50,15 T100,20"
          fill="none"
          stroke="currentColor"
          className="stroke-muted"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="flex justify-between mt-2 px-1 text-xs text-muted-foreground">
        {months.map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>
    </div>
  );
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const desktopData = [65, 90, 85, 45, 55, 75];
const mobileData = [40, 55, 40, 70, 45, 60];
