{/* Progress / Stats Section */}
import { useEffect, useState } from "react";

function AnimatedProgress() {
  const [progress, setProgress] = useState({
    companies: 0,
    employees: 0,
    branches: 0,
  });

  useEffect(() => {
    const targets = { companies: 20, employees: 250, branches: 13 };
    const duration = 2000;
    const interval = 30;
    const steps = duration / interval;
    let step = 0;

    const animation = setInterval(() => {
      step++;
      setProgress({
        companies: Math.min(
          Math.floor((targets.companies * step) / steps),
          targets.companies
        ),
        employees: Math.min(
          Math.floor((targets.employees * step) / steps),
          targets.employees
        ),
        branches: Math.min(
          Math.floor((targets.branches * step) / steps),
          targets.branches
        ),
      });

      if (step >= steps) clearInterval(animation);
    }, interval);

    return () => clearInterval(animation);
  }, []);

  const items = [
    { label: "Partner Companies", value: progress.companies, color: "text-green-700", max: 60 },
    { label: "Dedicated Employees", value: progress.employees, color: "text-green-700", max: 800 },
    { label: "Global Branches", value: progress.branches, color: "text-green-700", max: 15 },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-24 py-16 bg-gray-50 rounded-2xl mt-12 text-center">
      {/* <h2 className="text-3xl font-semibold mb-8 text-green-800">
        Our Growth at a Glance
      </h2> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center items-center">
        {items.map((item, index) => {
          const percentage = Math.min((item.value / item.max) * 100, 100);
          const radius = 64;
          const circumference = 2 * Math.PI * radius;
          const offset = circumference - (percentage / 100) * circumference;

          return (
            <div key={index} className="flex flex-col items-center">
              {/* Circular progress */}
              <div className="relative w-36 h-36">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="72"
                    cy="72"
                    r={radius}
                    stroke="#e5e7eb"
                    strokeWidth="12"
                    fill="transparent"
                  />
                  <circle
                    cx="72"
                    cy="72"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    className={`${item.color} transition-all duration-200 ease-out`}
                  />
                </svg>

                {/* Center number */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-green-700">
                    {item.value}+
                  </span>
                </div>
              </div>

              {/* Label */}
              <p className="mt-4 text-gray-600 text-lg font-medium">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AnimatedProgress;
