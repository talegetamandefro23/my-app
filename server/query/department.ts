// "use server";

// export type Department = {
//   id: number;
//   name: string;
//   head: string;
//   employees: number;
//   status: "Active" | "Inactive";
//   description: string;
// };

// export async function fetchDepartments(): Promise<Department[]> {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/departments`, { cache: "no-store" });
//   return res.json();
// }

// export async function addDepartment(dept: Omit<Department, "id">): Promise<Department> {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/departments`, {
//     method: "POST",
//     body: JSON.stringify(dept),
//     headers: { "Content-Type": "application/json" },
//   });
//   return res.json();
// }

// export async function updateDepartment(dept: Department): Promise<Department> {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/departments`, {
//     method: "PUT",
//     body: JSON.stringify(dept),
//     headers: { "Content-Type": "application/json" },
//   });
//   return res.json();
// }

// export async function deleteDepartment(id: number): Promise<{ success: boolean }> {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/departments`, {
//     method: "DELETE",
//     body: JSON.stringify({ id }),
//     headers: { "Content-Type": "application/json" },
//   });
//   return res.json();
// }

"use server";

// ✅ Department Type
export type Department = {
  id: number;
  name: string;
  head: string;
  employees: number;
  status: "Active" | "Inactive";
  description: string;
};

// ✅ In-memory "database"
let departments: Department[] = [
  {
    id: 1,
    name: "IT ",
    head: "Some One.",
    employees: 12,
    status: "Active",
    description: "Responsible for software and technical systems.",
  },
  {
    id: 2,
    name: "Finance",
    head: "Mekdes G.",
    employees: 8,
    status: "Active",
    description: "Handles budgets, payroll, and company finances.",
  },
  {
    id: 3,
    name: "HR",
    head: "Samuel N.",
    employees: 6,
    status: "Inactive",
    description: "Manages employee relations and hiring.",
  },
];

// ✅ Fetch all departments
export async function fetchDepartments(): Promise<Department[]> {
  // simulate network delay
  await new Promise((r) => setTimeout(r, 300));
  return [...departments];
}

// ✅ Add a new department
export async function addDepartment(
  dept: Omit<Department, "id">
): Promise<Department> {
  const newDept: Department = {
    ...dept,
    id: departments.length ? Math.max(...departments.map((d) => d.id)) + 1 : 1,
  };
  departments.push(newDept);
  await new Promise((r) => setTimeout(r, 300));
  return newDept;
}

// ✅ Update an existing department
export async function updateDepartment(dept: Department): Promise<Department> {
  const index = departments.findIndex((d) => d.id === dept.id);
  if (index === -1) throw new Error("Department not found");
  departments[index] = { ...dept };
  await new Promise((r) => setTimeout(r, 300));
  return departments[index];
}

// ✅ Delete a department
export async function deleteDepartment(
  id: number
): Promise<{ success: boolean }> {
  const index = departments.findIndex((d) => d.id === id);
  if (index === -1) throw new Error("Department not found");
  departments.splice(index, 1);
  await new Promise((r) => setTimeout(r, 300));
  return { success: true };
}
