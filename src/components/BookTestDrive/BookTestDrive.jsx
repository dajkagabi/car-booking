import { useState } from "react"
import {
  CalendarMonth,
  AccessTime,
  Person,
  Phone,
  DirectionsCar
} from "@mui/icons-material"

export default function BookTestDrive() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    car: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Test drive booked:", form)
    alert(`Test drive booked for ${form.car}! We'll contact you soon.`)
  }

  const carOptions = [
    "Tesla Model 3",
    "Ford Ranger",
    "Porsche Taycan",
    "Oldtimer Classic"
  ]

  return (
    <div className="max-w-5xl mx-auto mt-16 p-6">
      <div className="bg-white rounded-md shadow-md border border-gray-200 flex flex-col md:flex-row overflow-hidden">
        
       
        <div className="md:w-1/2 p-8 bg-[#f0fdfa] flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-[#009689]">Book a Test Drive</h2>
          <p className="text-black mb-6">
            Choose your vehicle, date, and time — and we’ll take care of the rest. Real cars, real experience.
          </p>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• Tesla, Porsche, and more available</li>
            <li>• Fast confirmation</li>
            <li>• No strings attached</li>
          </ul>
        </div>

        
        <div className="md:w-1/2 p-8 bg-white">
          <form onSubmit={handleSubmit} className="space-y-4">

            
            <div className="flex items-center gap-3 border rounded-md px-4 py-2">
              <Person className="text-black" />
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="w-full outline-none bg-transparent"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 border rounded-md px-4 py-2">
              <Phone className="text-gray-500" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="w-full outline-none bg-transparent"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Car  */}
            <div className="flex items-center gap-3 border rounded-md px-4 py-2">
              <DirectionsCar className="text-gray-500" />
              <select
                name="car"
                className="w-full bg-transparent outline-none text-gray-800"
                value={form.car}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select vehicle</option>
                {carOptions.map((car, idx) => (
                  <option key={idx} value={car}>{car}</option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div className="flex items-center gap-3 border rounded-md px-4 py-2">
              <CalendarMonth className="text-gray-500" />
              <input
                type="date"
                name="date"
                className="w-full outline-none bg-transparent"
                value={form.date}
                onChange={handleChange}
                required
              />
            </div>

            {/* Time */}
            <div className="flex items-center gap-3 border rounded-md px-4 py-2">
              <AccessTime className="text-gray-500" />
              <input
                type="time"
                name="time"
                className="w-full outline-none bg-transparent"
                value={form.time}
                onChange={handleChange}
                required
              />
            </div>

          
            <button
              type="submit"
              className="w-full bg-[#009689] hover:bg-[#007f75] text-white font-semibold py-2 px-4 rounded-md transition"
              disabled={!form.car}
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
