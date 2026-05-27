"use client"

import { useState } from "react"
import { PageHeader } from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"
import { Download, Clock, BookOpen } from "lucide-react"

const grades = ["Grade 9", "Grade 10", "Grade 11", "Grade 12"]
const sections = ["Section A", "Section B", "Section C"]

const scheduleData = [
  { time: "8:00 - 8:45", mon: { subject: "Mathematics", teacher: "Mr. Johnson", room: "Room 201", color: "bg-blue-100 text-blue-800" }, tue: { subject: "English", teacher: "Ms. Smith", room: "Room 105", color: "bg-green-100 text-green-800" }, wed: { subject: "Physics", teacher: "Dr. Brown", room: "Lab 1", color: "bg-purple-100 text-purple-800" }, thu: { subject: "Mathematics", teacher: "Mr. Johnson", room: "Room 201", color: "bg-blue-100 text-blue-800" }, fri: { subject: "Chemistry", teacher: "Ms. Davis", room: "Lab 2", color: "bg-orange-100 text-orange-800" } },
  { time: "8:50 - 9:35", mon: { subject: "English", teacher: "Ms. Smith", room: "Room 105", color: "bg-green-100 text-green-800" }, tue: { subject: "Physics", teacher: "Dr. Brown", room: "Lab 1", color: "bg-purple-100 text-purple-800" }, wed: { subject: "Mathematics", teacher: "Mr. Johnson", room: "Room 201", color: "bg-blue-100 text-blue-800" }, thu: { subject: "Biology", teacher: "Dr. Wilson", room: "Lab 3", color: "bg-teal-100 text-teal-800" }, fri: { subject: "English", teacher: "Ms. Smith", room: "Room 105", color: "bg-green-100 text-green-800" } },
  { time: "9:40 - 10:25", mon: { subject: "Chemistry", teacher: "Ms. Davis", room: "Lab 2", color: "bg-orange-100 text-orange-800" }, tue: { subject: "History", teacher: "Mr. Adams", room: "Room 302", color: "bg-amber-100 text-amber-800" }, wed: { subject: "English", teacher: "Ms. Smith", room: "Room 105", color: "bg-green-100 text-green-800" }, thu: { subject: "Physics", teacher: "Dr. Brown", room: "Lab 1", color: "bg-purple-100 text-purple-800" }, fri: { subject: "Mathematics", teacher: "Mr. Johnson", room: "Room 201", color: "bg-blue-100 text-blue-800" } },
  { time: "10:25 - 10:45", mon: { subject: "Break", teacher: "", room: "", color: "bg-gray-100 text-gray-600" }, tue: { subject: "Break", teacher: "", room: "", color: "bg-gray-100 text-gray-600" }, wed: { subject: "Break", teacher: "", room: "", color: "bg-gray-100 text-gray-600" }, thu: { subject: "Break", teacher: "", room: "", color: "bg-gray-100 text-gray-600" }, fri: { subject: "Break", teacher: "", room: "", color: "bg-gray-100 text-gray-600" } },
  { time: "10:45 - 11:30", mon: { subject: "Biology", teacher: "Dr. Wilson", room: "Lab 3", color: "bg-teal-100 text-teal-800" }, tue: { subject: "Mathematics", teacher: "Mr. Johnson", room: "Room 201", color: "bg-blue-100 text-blue-800" }, wed: { subject: "History", teacher: "Mr. Adams", room: "Room 302", color: "bg-amber-100 text-amber-800" }, thu: { subject: "Chemistry", teacher: "Ms. Davis", room: "Lab 2", color: "bg-orange-100 text-orange-800" }, fri: { subject: "Physics", teacher: "Dr. Brown", room: "Lab 1", color: "bg-purple-100 text-purple-800" } },
  { time: "11:35 - 12:20", mon: { subject: "History", teacher: "Mr. Adams", room: "Room 302", color: "bg-amber-100 text-amber-800" }, tue: { subject: "Biology", teacher: "Dr. Wilson", room: "Lab 3", color: "bg-teal-100 text-teal-800" }, wed: { subject: "Chemistry", teacher: "Ms. Davis", room: "Lab 2", color: "bg-orange-100 text-orange-800" }, thu: { subject: "English", teacher: "Ms. Smith", room: "Room 105", color: "bg-green-100 text-green-800" }, fri: { subject: "History", teacher: "Mr. Adams", room: "Room 302", color: "bg-amber-100 text-amber-800" } },
  { time: "12:20 - 1:00", mon: { subject: "Lunch", teacher: "", room: "", color: "bg-gray-100 text-gray-600" }, tue: { subject: "Lunch", teacher: "", room: "", color: "bg-gray-100 text-gray-600" }, wed: { subject: "Lunch", teacher: "", room: "", color: "bg-gray-100 text-gray-600" }, thu: { subject: "Lunch", teacher: "", room: "", color: "bg-gray-100 text-gray-600" }, fri: { subject: "Lunch", teacher: "", room: "", color: "bg-gray-100 text-gray-600" } },
  { time: "1:00 - 1:45", mon: { subject: "Art", teacher: "Ms. Taylor", room: "Art Studio", color: "bg-pink-100 text-pink-800" }, tue: { subject: "Music", teacher: "Mr. Lee", room: "Music Room", color: "bg-indigo-100 text-indigo-800" }, wed: { subject: "PE", teacher: "Coach Miller", room: "Gymnasium", color: "bg-red-100 text-red-800" }, thu: { subject: "Art", teacher: "Ms. Taylor", room: "Art Studio", color: "bg-pink-100 text-pink-800" }, fri: { subject: "Music", teacher: "Mr. Lee", room: "Music Room", color: "bg-indigo-100 text-indigo-800" } },
]

const subjectLegend = [
  { name: "Mathematics", color: "bg-blue-500" },
  { name: "English", color: "bg-green-500" },
  { name: "Physics", color: "bg-purple-500" },
  { name: "Chemistry", color: "bg-orange-500" },
  { name: "Biology", color: "bg-teal-500" },
  { name: "History", color: "bg-amber-500" },
  { name: "Art", color: "bg-pink-500" },
  { name: "Music", color: "bg-indigo-500" },
  { name: "PE", color: "bg-red-500" },
]

export default function TimetablePage() {
  const [selectedGrade, setSelectedGrade] = useState("Grade 10")
  const [selectedSection, setSelectedSection] = useState("Section A")

  return (
    <>
      <PageHeader 
        title="Class Timetable"
        description="View and download your weekly class schedule."
      />

      {/* Filter Bar */}
      <section className="bg-white border-b border-[#d1e7d8] sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <label htmlFor="grade" className="text-sm font-medium text-[#062c15]">Filter by:</label>
                <select
                  id="grade"
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  className="px-3 py-2 bg-[#f4f9f5] border border-[#d1e7d8] rounded-lg text-sm text-[#062c15] focus:outline-none focus:ring-2 focus:ring-[#0f5132]"
                >
                  {grades.map((grade) => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="px-3 py-2 bg-[#f4f9f5] border border-[#d1e7d8] rounded-lg text-sm text-[#062c15] focus:outline-none focus:ring-2 focus:ring-[#0f5132]"
              >
                {sections.map((section) => (
                  <option key={section} value={section}>{section}</option>
                ))}
              </select>
            </div>
            <Button className="bg-[#062c15] hover:bg-[#0f5132] text-white">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-8 bg-[#f4f9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-[#d1e7d8] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="bg-[#062c15] text-white">
                    <th className="px-4 py-4 text-left text-sm font-semibold w-28">Time</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold">Monday</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold">Tuesday</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold">Wednesday</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold">Thursday</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold">Friday</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.map((row, index) => (
                    <tr key={index} className="border-t border-[#d1e7d8]">
                      <td className="px-4 py-3 text-sm font-medium text-[#062c15] bg-[#f4f9f5] whitespace-nowrap">
                        {row.time}
                      </td>
                      {[row.mon, row.tue, row.wed, row.thu, row.fri].map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-3 py-2">
                          <div className={`rounded-lg p-2.5 ${cell.color}`}>
                            <p className="font-semibold text-sm">{cell.subject}</p>
                            {cell.teacher && (
                              <>
                                <p className="text-xs opacity-80">{cell.teacher}</p>
                                <p className="text-xs opacity-70">{cell.room}</p>
                              </>
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6">
            <p className="text-sm font-medium text-[#062c15] mb-3">Subject Legend</p>
            <div className="flex flex-wrap gap-3">
              {subjectLegend.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
                  <span className="text-sm text-[#4a7c5f]">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Class Timings */}
            <div className="bg-[#f4f9f5] rounded-xl p-6 border border-[#d1e7d8]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#0f5132] rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#062c15]">Class Timings</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#4a7c5f]">
                <li className="flex justify-between">
                  <span>School Hours</span>
                  <span className="font-medium">8:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Period Duration</span>
                  <span className="font-medium">45 minutes</span>
                </li>
                <li className="flex justify-between">
                  <span>Morning Break</span>
                  <span className="font-medium">10:25 AM - 10:45 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Lunch Break</span>
                  <span className="font-medium">12:20 PM - 1:00 PM</span>
                </li>
              </ul>
            </div>

            {/* General Guidelines */}
            <div className="bg-[#f4f9f5] rounded-xl p-6 border border-[#d1e7d8]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#0f5132] rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#062c15]">General Guidelines</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#4a7c5f]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#7dd3a8] rounded-full mt-1.5 shrink-0"></span>
                  <span>Students should arrive at least 10 minutes before classes begin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#7dd3a8] rounded-full mt-1.5 shrink-0"></span>
                  <span>Bring all required materials and textbooks to each class</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#7dd3a8] rounded-full mt-1.5 shrink-0"></span>
                  <span>Lab sessions require proper safety equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#7dd3a8] rounded-full mt-1.5 shrink-0"></span>
                  <span>Contact your homeroom teacher for schedule changes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
