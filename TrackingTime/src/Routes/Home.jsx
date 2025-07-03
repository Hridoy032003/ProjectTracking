import React, { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { Plus } from "lucide-react";
import { BookUser } from "lucide-react";
import { CalendarFold } from "lucide-react";
import { FilePenLine } from "lucide-react";
import { FileDown } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogFooter
} from "@/components/ui/dialog"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Nevbar from "../components/ui/Nevbar";

import { Label } from "@/components/ui/label"

const Home = () => {
  const [selectedView, setSelectedView] = useState("project");

  const handleButtonClick = (view) => {
    setSelectedView(view);
  };

  return (
    <>
    <Nevbar/>
          <div className="flex min-h-screen flex-col items-center bg-gray-100 px-4">
              <h1 className="py-10 text-3xl font-semibold text-center">
                  Track Your Project Work
              </h1>
              <section className="mb-10">
                  <div className="flex gap-4 justify-center">
                      <button
                          className="w-60 py-2 border rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                          onClick={() => handleButtonClick("project")}
                      >
                          Project
                      </button>
                      <button
                          className="w-60 py-2 border rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                          onClick={() => handleButtonClick("summary")}
                      >
                          Summary Project
                      </button>
                  </div>
              </section>

              <div className="flex flex-col items-center w-full">
                  {selectedView === "project" && (
                      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg p-8">
                          <div className="flex justify-between items-center mb-6">
                              <h2 className="text-xl font-semibold">Project</h2>
                              <Dialog>
                                  <DialogTrigger asChild>
                                      <Button className="bg-blue-600 text-white hover:bg-blue-700">
                                          <Plus /> Add Project
                                      </Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                      <DialogHeader>
                                          <DialogTitle>Add New Project</DialogTitle>
                                          <DialogDescription>
                                              <form className="space-y-4">
                                                  <div>
                                                      <label className="block text-sm font-medium text-gray-700">
                                                          Project Name
                                                      </label>
                                                      <Input
                                                          type="text"
                                                          placeholder="Enter project name"
                                                          className="mt-1 block w-full"
                                                      />
                                                  </div>
                                                  <div>
                                                      <label className="block text-sm font-medium text-gray-700">
                                                          Description
                                                      </label>
                                                      <Input
                                                          type="text"
                                                          placeholder="Enter project description"
                                                          className="mt-1 block w-full"
                                                      />
                                                  </div>
                                                  <div className="flex gap-4">
                                                      <div>
                                                          <label className="block text-sm font-medium text-gray-700">
                                                              Task Skill
                                                          </label>
                                                          <Input
                                                              type="text"
                                                              placeholder="Project Skill"
                                                              className="mt-1 block w-full"
                                                          />
                                                      </div>
                                                      <div>
                                                          <label className="block text-sm font-medium text-gray-700 mb-1">
                                                              Status
                                                          </label>
                                                          <Select>
                                                              <SelectTrigger className="w-full">
                                                                  <SelectValue placeholder="Select status" />
                                                              </SelectTrigger>
                                                              <SelectContent>
                                                                  <SelectItem value="active">Active</SelectItem>
                                                                  <SelectItem value="paused">Paused</SelectItem>
                                                                  <SelectItem value="completed">
                                                                      Completed
                                                                  </SelectItem>
                                                              </SelectContent>
                                                          </Select>
                                                      </div>
                                                  </div>
                                                  <Button type="submit" className="w-full mt-5">
                                                      Add Project
                                                  </Button>
                                              </form>
                                          </DialogDescription>
                                      </DialogHeader>
                                  </DialogContent>
                              </Dialog>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                              {Array(4)
                                  .fill()
                                  .map((_, index) => (
                                      <Card
                                          key={index}
                                          className="w-full bg-white rounded-lg shadow-md"
                                      >
                                          <CardHeader>
                                              <div className="flex justify-between items-center">
                                                  <CardTitle>Project Name {index + 1}</CardTitle>
                                                  <p className="bg-green-300 p-1 rounded-lg px-2 text-md -mt-1">
                                                      Active
                                                  </p>
                                              </div>
                                              <CardDescription className="-mt-2 text-sm">
                                                  Project Description
                                              </CardDescription>
                                          </CardHeader>
                                          <CardContent className="space-y-2">
                                            
                                              <div className="flex items-center ">
                                                  <div>
                                                      {" "}
                                                      <BookUser className="h-5 w-5" />
                                                  </div>
                                                  <span>userNmae</span>
                                              </div>
                                              <div className="flex ">
                                                  {" "}
                                                  <div>
                                                      <CalendarFold className="h-5 w-5" />
                                                  </div>
                                                  <span>3-10-2003</span>
                                              </div>
                                          </CardContent>
                                          <CardFooter className="flex justify-between gap-1">
                                              <Button className="w-4/5 text-white">
                                                  <Dialog>
                                                      <form>
                                                          <DialogTrigger asChild>
                                                              <Button className="w-4/5 text-white"><FilePenLine /> Edit </Button>
                                                          </DialogTrigger>
                                                          <DialogContent className="sm:max-w-[425px]">
                                                              <DialogHeader>
                                                                  <DialogTitle>Edit profile</DialogTitle>
                                                                  <DialogDescription>
                                                                      Make changes to your profile here. Click save when you&apos;re
                                                                      done.
                                                                  </DialogDescription>
                                                              </DialogHeader>
                                                              <div className="grid gap-4">
                                                                  <div className="grid gap-3">
                                                                      <Label htmlFor="name-1">Name</Label>
                                                                      <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                                                                  </div>
                                                                  <div className="grid gap-3">
                                                                      <Label htmlFor="username-1">Username</Label>
                                                                      <Input id="username-1" name="username" defaultValue="@peduarte" />
                                                                  </div>
                                                              </div>
                                                              <DialogFooter>
                                                                  <DialogClose asChild>
                                                                      <Button variant="outline">Cancel</Button>
                                                                  </DialogClose>
                                                                  <Button type="submit">Save changes</Button>
                                                              </DialogFooter>
                                                          </DialogContent>
                                                      </form>
                                                  </Dialog>
                                              </Button>
                                              <Button
                                                  variant="destructive"
                                                  className="w-1/5 text-white"
                                              >
                                                 
                                                  <AlertDialog>
                                                      <AlertDialogTrigger> <Trash2 /></AlertDialogTrigger>
                                                      <AlertDialogContent>
                                                          <AlertDialogHeader>
                                                              <AlertDialogTitle>Are you absolutely sure ?</AlertDialogTitle>
                                                              <AlertDialogDescription>
                                                                  This action cannot be undone. This will permanently delete your Project
                                                                   from our servers.
                                                              </AlertDialogDescription>
                                                          </AlertDialogHeader>
                                                          <AlertDialogFooter>
                                                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                              <AlertDialogAction>Continue</AlertDialogAction>
                                                          </AlertDialogFooter>
                                                      </AlertDialogContent>
                                                  </AlertDialog>
                                              </Button>
                                          </CardFooter>
                                      </Card>
                                  ))}
                          </div>
                      </div>
                  )}

                  {selectedView === "summary" && (
                      <>
                          <div className="flex justify-between items-center mb-6 w-full max-w-7xl mt-5 text-center">
                              <h1 className="text-2xl">Project data:</h1>{" "}
                              <div className="flex gap-4">
                                  <Select>
                                      <SelectTrigger className="w-full">
                                          <SelectValue placeholder="Select status" />
                                      </SelectTrigger>
                                      <SelectContent>
                                          <SelectItem value="active">PDF</SelectItem>
                                          <SelectItem value="paused">CSV</SelectItem>
                                      </SelectContent>
                                  </Select>
                                  <Button>
                                      {" "}
                                      <FileDown /> Download{" "}
                                  </Button>
                              </div>
                          </div>
                          <div>
                              {" "}
                              <Table>
                                  <TableCaption>A list of your recent invoices.</TableCaption>
                                  <TableHeader>
                                      <TableRow>
                                          <TableHead className="w-[100px]">Index</TableHead>
                                          <TableHead>Project Name</TableHead>
                                          <TableHead>Skills</TableHead>
                                          <TableHead className="text-right">Time Spend </TableHead>
                                          <TableHead>Satus </TableHead>
                                          <TableHead>StartTime </TableHead>
                                          <TableHead>EndTime </TableHead>
                                      </TableRow>
                                  </TableHeader>
                                  <TableBody>

                                      <TableRow >
                                          <TableCell className="font-medium">

                                          </TableCell>
                                          <TableCell></TableCell>
                                          <TableCell></TableCell>
                                          <TableCell className="text-right">

                                          </TableCell>
                                      </TableRow>

                                  </TableBody>

                              </Table>
                          </div>
                      </>
                  )}
              </div>
          </div></>
  );
};

export default Home;
