"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2, Eye, MoreHorizontal, Loader2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as deptAPI from "@/server/query/department";
import { useState, useEffect } from "react";

export default function DepartmentPage() {
  const [departments, setDepartments] = useState<deptAPI.Department[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedDept, setSelectedDept] = useState<deptAPI.Department | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<"view" | "edit" | "add">("view");
  const [deleteDept, setDeleteDept] = useState<deptAPI.Department | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  // ✅ NEW: loading state
  const [loading, setLoading] = useState(true);

  // ✅ Load Departments from API
  useEffect(() => {
    async function loadDepartments() {
      setLoading(true);
      try {
        const data = await deptAPI.fetchDepartments();
        setDepartments(data);
      } catch (error) {
        console.error("Failed to load departments", error);
      } finally {
        setLoading(false);
      }
    }
    loadDepartments();
  }, []);

  // ✅ Table Columns
  const columns: ColumnDef<deptAPI.Department>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Department Name" },
    { accessorKey: "head", header: "Department Head" },
    { accessorKey: "employees", header: "Employees" },
    { accessorKey: "description", header: "Description" },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <span
            className={`px-2 py-1 text-xs rounded-full ${
              status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {status}
          </span>
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const department = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-gray-100">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleView(department)}>
                <Eye className="w-4 h-4 mr-2" /> View
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleEdit(department)}>
                <Pencil className="w-4 h-4 mr-2" /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-600"
                onClick={() => {
                  setDeleteDept(department);
                  setIsDeleteDialogOpen(true);
                }}
              >
                <Trash2 className="w-4 h-4 mr-2" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  // ✅ React Table Instance
  const table = useReactTable({
    data: departments,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // ✅ Handlers
  const handleAdd = () => {
    setSelectedDept({
      id: 0,
      name: "",
      head: "",
      employees: 0,
      status: "Inactive",
      description: "",
    });
    setDialogMode("add");
    setIsDialogOpen(true);
  };

  const handleEdit = (dept: deptAPI.Department) => {
    setSelectedDept(dept);
    setDialogMode("edit");
    setIsDialogOpen(true);
  };

  const handleView = (dept: deptAPI.Department) => {
    setSelectedDept(dept);
    setDialogMode("view");
    setIsDialogOpen(true);
  };

  const handleSave = async () => {
    if (!selectedDept) return;

    if (dialogMode === "add") {
      const newDept = await deptAPI.addDepartment({
        name: selectedDept.name,
        head: selectedDept.head,
        employees: selectedDept.employees,
        status: selectedDept.status,
        description: selectedDept.description,
      });
      setDepartments((prev) => [...prev, newDept]);
    } else if (dialogMode === "edit") {
      const updatedDept = await deptAPI.updateDepartment(selectedDept);
      setDepartments((prev) =>
        prev.map((d) => (d.id === updatedDept.id ? updatedDept : d))
      );
    }

    setIsDialogOpen(false);
  };

  const handleConfirmDelete = async () => {
    if (!deleteDept) return;
    await deptAPI.deleteDepartment(deleteDept.id);
    setDepartments((prev) => prev.filter((d) => d.id !== deleteDept.id));
    setDeleteDept(null);
    setIsDeleteDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Search + Add */}
      <div className="flex justify-between items-center">
        <Button onClick={handleAdd} className="bg-gray-700 hover:bg-green-800">
          + Add New
        </Button>
        <Input
          placeholder="Search departments..."
          className="w-72"
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </div>

      {/* Table or Loader */}
      {loading ? (
        <div className="flex justify-center items-center py-20 text-gray-600">
          <Loader2 className="w-10 h-10 mr-2 animate-spin" />
          Loading ...
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="text-center text-gray-500 py-4"
                  >
                    No departments found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex justify-between items-center p-4">
            <p className="text-sm text-gray-600">
              Showing {table.getRowModel().rows.length} of {departments.length}{" "}
              entries
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {dialogMode === "view"
                ? "View Department"
                : dialogMode === "edit"
                ? "Edit Department"
                : "Add Department"}
            </DialogTitle>
          </DialogHeader>

          {selectedDept && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Department Name
                </label>
                <Input
                  value={selectedDept.name}
                  disabled={dialogMode === "view"}
                  onChange={(e) =>
                    setSelectedDept({ ...selectedDept, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Department Head
                </label>
                <Input
                  value={selectedDept.head}
                  disabled={dialogMode === "view"}
                  onChange={(e) =>
                    setSelectedDept({ ...selectedDept, head: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Description
                </label>
                <Input
                  value={selectedDept.description}
                  disabled={dialogMode === "view"}
                  onChange={(e) =>
                    setSelectedDept({
                      ...selectedDept,
                      description: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          )}

          <DialogFooter className="mt-4">
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
              className="mr-2"
            >
              Close
            </Button>
            {dialogMode !== "view" && (
              <Button
                className="bg-green-700 hover:bg-green-800"
                onClick={handleSave}
              >
                {dialogMode === "add" ? "Add Department" : "Save Changes"}
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to delete {deleteDept?.name}?</p>
          <DialogFooter className="mt-4">
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
              className="mr-2"
            >
              Cancel
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={handleConfirmDelete}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
