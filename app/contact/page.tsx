"use client"

import { useState } from "react"
import { PageHeader } from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Send, GraduationCap, BookOpen, Users } from "lucide-react"

const departments = [
  {
    icon: GraduationCap,
    title: "Admissions Office",
    description: "For enrollment inquiries and applications",
    email: "admissions@hilltopeducation.edu",
    phone: "(555) 123-4568"
  },
  {
    icon: BookOpen,
    title: "Academic Affairs",
    description: "For curriculum and academic inquiries",
    email: "academics@hilltopeducation.edu",
    phone: "(555) 123-4569"
  },
  {
    icon: Users,
    title: "Student Services",
    description: "For student support and counseling",
    email: "students@hilltopeducation.edu",
    phone: "(555) 123-4570"
  },
]

const subjectOptions = [
  "General Inquiry",
  "Admissions",
  "Academic Programs",
  "Financial Aid",
  "Campus Visit",
  "Other"
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <PageHeader 
        title="Contact Us"
        description="We'd love to hear from you. Reach out to us with any questions or inquiries."
      />

      {/* Contact Form & Info */}
      <section className="py-16 bg-[#f4f9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#062c15] mb-6">Get in Touch</h2>
                <p className="text-[#4a7c5f] mb-8">
                  Have questions about our programs, admissions, or campus life? 
                  We&apos;re here to help. Reach out using the information below or fill out the contact form.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0f5132] rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#062c15] mb-1">Address</h3>
                    <p className="text-[#4a7c5f]">
                      123 Education Avenue<br />
                      Learning City, LC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0f5132] rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#062c15] mb-1">Phone</h3>
                    <p className="text-[#4a7c5f]">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0f5132] rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#062c15] mb-1">Email</h3>
                    <p className="text-[#4a7c5f]">info@hilltopeducation.edu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0f5132] rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#062c15] mb-1">Office Hours</h3>
                    <p className="text-[#4a7c5f]">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 border border-[#d1e7d8] shadow-sm">
              <h2 className="text-2xl font-bold text-[#062c15] mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#062c15] mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-[#f4f9f5] border border-[#d1e7d8] rounded-lg text-[#062c15] placeholder:text-[#4a7c5f]/60 focus:outline-none focus:ring-2 focus:ring-[#0f5132] focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#062c15] mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-[#f4f9f5] border border-[#d1e7d8] rounded-lg text-[#062c15] placeholder:text-[#4a7c5f]/60 focus:outline-none focus:ring-2 focus:ring-[#0f5132] focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#062c15] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-[#f4f9f5] border border-[#d1e7d8] rounded-lg text-[#062c15] placeholder:text-[#4a7c5f]/60 focus:outline-none focus:ring-2 focus:ring-[#0f5132] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#062c15] mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-[#f4f9f5] border border-[#d1e7d8] rounded-lg text-[#062c15] placeholder:text-[#4a7c5f]/60 focus:outline-none focus:ring-2 focus:ring-[#0f5132] focus:border-transparent"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#062c15] mb-1.5">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-[#f4f9f5] border border-[#d1e7d8] rounded-lg text-[#062c15] focus:outline-none focus:ring-2 focus:ring-[#0f5132] focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    {subjectOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#062c15] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 bg-[#f4f9f5] border border-[#d1e7d8] rounded-lg text-[#062c15] placeholder:text-[#4a7c5f]/60 focus:outline-none focus:ring-2 focus:ring-[#0f5132] focus:border-transparent resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#062c15] hover:bg-[#0f5132] text-white font-semibold py-3"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#e8f5ed] rounded-xl h-80 flex items-center justify-center border border-[#d1e7d8]">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[#0f5132] mx-auto mb-3" />
              <p className="text-[#4a7c5f] font-medium">Interactive map would be integrated here</p>
              <p className="text-sm text-[#4a7c5f]/70">Google Maps or similar service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-[#f4f9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#062c15] mb-8 text-center">Department Contacts</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-[#d1e7d8] hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#e8f5ed] rounded-lg flex items-center justify-center mb-4">
                  <dept.icon className="w-6 h-6 text-[#0f5132]" />
                </div>
                <h3 className="text-lg font-semibold text-[#062c15] mb-1">{dept.title}</h3>
                <p className="text-sm text-[#4a7c5f] mb-4">{dept.description}</p>
                <div className="space-y-2">
                  <p className="text-sm flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#7dd3a8]" />
                    <a href={`mailto:${dept.email}`} className="text-[#0f5132] hover:underline">
                      {dept.email}
                    </a>
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#7dd3a8]" />
                    <span className="text-[#4a7c5f]">{dept.phone}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
