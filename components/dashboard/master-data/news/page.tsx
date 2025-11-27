"use client";

import * as React from "react";
import { useState,useEffect } from "react";
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
import * as newsAPI from "@/server/query/news";

export default function NewsPage() {
  const [newsList, setNewsList] = useState<newsAPI.News[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedNews, setSelectedNews] = useState<newsAPI.News | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<"view" | "edit" | "add">(
    "view"
  );

  const [deleteNews, setDeleteNews] = useState<newsAPI.News | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
 
 useEffect(() => {
    async function loadNews() {
      setLoading(true);
      try {
        const data = await newsAPI.fetchNews();
        setNewsList(data);
      } catch (error) {
        console.error(" Faild to load News", error);
      } finally {
        setLoading(false);
      }
    }
    loadNews();
  }, []);

  // Table columns
  const columns: ColumnDef<newsAPI.News>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "title", header: "Title" },
    { accessorKey: "author", header: "Author" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "date", header: "Date" },
    {
      id: "media",
      header: "Media",
      cell: ({ row }) => {
        const media = row.original.media;
        if (!media) return <span className="text-gray-400">No Media</span>;
        return media.endsWith(".mp4") ? (
          <video src={media} className="w-24 h-16" controls />
        ) : (
          <img
            src={media}
            className="w-24 h-16 object-cover rounded"
            alt="media"
          />
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const news = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-gray-100">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleView(news)}>
                <Eye className="w-4 h-4 mr-2" /> View
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleEdit(news)}>
                <Pencil className="w-4 h-4 mr-2" /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-600"
                onClick={() => {
                  setDeleteNews(news);
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

  const table = useReactTable({
    data: newsList,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // Handlers
  const handleAdd = () => {
    setSelectedNews({
      id: 0,
      title: "",
      author: "",
      status: "Draft",
      date: new Date().toISOString().split("T")[0],
      content: "",
      media: "",
    });
    setDialogMode("add");
    setIsDialogOpen(true);
  };

  const handleEdit = (news: newsAPI.News) => {
    setSelectedNews(news);
    setDialogMode("edit");
    setIsDialogOpen(true);
  };

  const handleView = (news: newsAPI.News) => {
    setSelectedNews(news);
    setDialogMode("view");
    setIsDialogOpen(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !selectedNews) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedNews({ ...selectedNews, media: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    if (!selectedNews) return;

    if (dialogMode === "add") {
      const newNews = await newsAPI.addNews({
        title: selectedNews.title,
        author: selectedNews.author,
        status: selectedNews.status,
        date: selectedNews.date,
        content: selectedNews.content,
        media: selectedNews.media,
      });
      setNewsList((prev) => [...prev, newNews]);
    } else if (dialogMode === "edit") {
      const updatedNews = await newsAPI.updateNews(selectedNews);
      setNewsList((prev) =>
        prev.map((n) => (n.id === updatedNews.id ? updatedNews : n))
      );
    }

    setIsDialogOpen(false);
  };

  const handleConfirmDelete = async () => {
    if (!deleteNews) return;
    await newsAPI.deleteNews(deleteNews.id);
    setNewsList((prev) => prev.filter((n) => n.id !== deleteNews.id));
    setDeleteNews(null);
    setIsDeleteDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Search + Add */}
      <div className="flex justify-between items-center">
        <Input
          placeholder="Search news..."
          className="w-72"
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        <Button onClick={handleAdd} className="bg-gray-700 hover:bg-green-800">
          + Add News
        </Button>
      </div>

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
                    <TableHead
                      key={header.id}
                      className="cursor-pointer"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
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
                    No news found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex justify-between items-center p-4">
            <p className="text-sm text-gray-600">
              Showing {table.getRowModel().rows.length} of {newsList.length}{" "}
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
      {/* View/Edit/Add Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {dialogMode === "view"
                ? "View News"
                : dialogMode === "edit"
                ? "Edit News"
                : "Add News"}
            </DialogTitle>
          </DialogHeader>

          {selectedNews && (
            <div className="space-y-4">
              <Input
                placeholder="Title"
                value={selectedNews.title}
                disabled={dialogMode === "view"}
                onChange={(e) =>
                  setSelectedNews({ ...selectedNews, title: e.target.value })
                }
              />
              <Input
                placeholder="Author"
                value={selectedNews.author}
                disabled={dialogMode === "view"}
                onChange={(e) =>
                  setSelectedNews({ ...selectedNews, author: e.target.value })
                }
              />
              <Input
                placeholder="Status"
                value={selectedNews.status}
                disabled={dialogMode === "view"}
                onChange={(e) =>
                  setSelectedNews({
                    ...selectedNews,
                    status: e.target.value as "Published" | "Draft",
                  })
                }
              />
              <Input
                type="date"
                value={selectedNews.date}
                disabled={dialogMode === "view"}
                onChange={(e) =>
                  setSelectedNews({ ...selectedNews, date: e.target.value })
                }
              />
              <Input
                placeholder="Content"
                value={selectedNews.content}
                disabled={dialogMode === "view"}
                onChange={(e) =>
                  setSelectedNews({ ...selectedNews, content: e.target.value })
                }
              />
              {dialogMode !== "view" && (
                <Input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                />
              )}
              {selectedNews.media && (
                <div className="mt-2">
                  {selectedNews.media.endsWith(".mp4") ? (
                    <video
                      src={selectedNews.media}
                      className="w-48 h-32"
                      controls
                    />
                  ) : (
                    <img
                      src={selectedNews.media}
                      className="w-48 h-32 object-cover rounded"
                      alt="media"
                    />
                  )}
                </div>
              )}
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
                {dialogMode === "add" ? "Add News" : "Save Changes"}
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
          <p>Are you sure you want to delete {deleteNews?.title}?</p>
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
