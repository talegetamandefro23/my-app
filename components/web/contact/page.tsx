"use client";

// import { useState } from "react";

// export default function ContactPage() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("");

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setStatus("Sending...");

//     const res = await fetch("/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     const result = await res.json();
//     setStatus(result.message || "Sent!");
//   }

//   return (
//     <section className="container mx-auto px-6 py-12 text-center">
//       <h1 className="text-4xl font-bold text-green-700 mb-8">Contact Us</h1>

//       <div className="max-w-lg mx-auto bg-white/90 p-8 rounded-xl shadow-md border-t-4 border-green-700">
//         <form onSubmit={handleSubmit} className="space-y-4 text-left">
//           <div>
//             <label className="block text-gray-700 mb-2">Name</label>
//             <input
//               type="text"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               className="w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-700"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               className="w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-700"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-2">Message</label>
//             <textarea
//               rows={4}
//               value={form.message}
//               onChange={(e) => setForm({ ...form, message: e.target.value })}
//               className="w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-700"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
//           >
//             Send Message
//           </button>
//         </form>
//         {status && <p className="text-center mt-4 text-gray-600">{status}</p>}
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { Mail, Phone, MapPin, FileAxis3D } from "lucide-react"; // 👈 Lucide icons

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section>
      <section className="container mx-auto px-20 py-12">
        <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
          Contact Us
        </h1>

        {/* GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* FORM SIDE */}
          <div className="bg-white/90 p-8 rounded-xl shadow-md border-t-4 border-green-700">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent successfully!");
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO SIDE */}
          <div className="text-gray-700 bg-white/90 p-8 rounded-xl shadow-md border-t-4 border-green-700 flex flex-col justify-center space-y-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-2">
              Get in Touch
            </h2>

            <div className="flex items-center space-x-3">
              <Mail className="text-green-700" />
              <p>
                <span className="font-medium">Email:</span>{" "}
                admin@weynamaba.com.et
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="text-green-700" />
              <p>
                <span className="font-medium">Phone:</span> +251 937 922 229
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="text-green-700" />
              <p>
                <span className="font-medium">Address:</span> Addis Ababa,
                Ethiopia
              </p>
            </div>
            {/* <div className="flex items-center space-x-3">
              <FileAxis3D className="text-green-700" />
              <p>
                <span className="font-medium">Fax:</span> +2510000000
              </p>
            </div> */}
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-12">
        <div className="mt-12 rounded-xl overflow-hidden shadow-md border border-gray-200">
          <iframe
            title="Weynam Aba Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.601394447057!2d38.75776051528366!3d9.01079309352659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b5a15d73f5%3A0xf1f912d5ac39a1e!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1696506600000!5m2!1sen!2set"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </section>
  );
}
