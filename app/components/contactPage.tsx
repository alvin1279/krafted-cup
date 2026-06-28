// Contact.tsx
import { useActionState } from "react";
import Footer from "~/components/footer";
import Header from "~/components/header";

// 1. Define your action outside the component (or in a separate file)
async function submitContactMessage(prevState: any, formData: FormData) {
  // Extract data natively using FormData
  const data = Object.fromEntries(formData.entries());

  // Your submission logic goes here (e.g., fetch API)
  console.log("Submitting:", data);

  // Simulating network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Return the new state (React uses this to update the UI)
  return { success: true, message: "Thanks! We'll get back to you soon." };
}

export default function Contact() {
  // 2. useActionState handles the state, form action binding, and pending status
  const [state, formAction, isPending] = useActionState(
    submitContactMessage,
    null,
  );

  return (
    <>
      <Header />
      <section className="contact-hero bg-amber-grad-t min-h-[20dvh] flex flex-col justify-center pl-3 md:pl-9">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-medium text-black">
          Contact Us
        </h1>
        <p className="text-black/70 mt-2 max-w-md">
          Got a question, custom order, or just want to say hi? We'd love to
          hear from you.
        </p>
      </section>

      <section className="contact-body min-h-[50dvh] bg-slate-950 px-6 py-10 md:px-16 flex flex-col md:flex-row gap-10">
        {/* 3. Pass the formAction directly to the form */}
        <form
          action={formAction}
          className="flex-1 flex flex-col gap-4 max-w-xl"
        >
          {/* 4. Separated labels and uncontrolled inputs (no value= or onChange=) */}
          <div className="flex flex-col gap-1 text-amber-200">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              required
              className="bg-gray-100 rounded-full px-4 py-2 text-black"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1 text-amber-200">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              required
              className="bg-gray-100 rounded-full px-4 py-2 text-black"
              type="email"
            />
          </div>

          <div className="flex flex-col gap-1 text-amber-200">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="bg-gray-100 rounded-2xl px-4 py-2 text-black resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="relative bg-amber-grad-t text-amber-50 font-medium rounded-full px-6 py-2.5 w-fit mt-2
            transition-all duration-200 ease-out
            hover:brightness-110 hover:shadow-lg hover:shadow-amber-700/30
            active:translate-x-0.5 active:scale-y-105
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:brightness-100 disabled:hover:shadow-none disabled:active:translate-x-0 disabled:active:scale-y-100
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <span
              className={`flex items-center gap-2 transition-opacity ${isPending ? "opacity-0" : "opacity-100"}`}
            >
              Send Message
            </span>
            {isPending && (
              <span className="absolute inset-0 flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending...
              </span>
            )}
          </button>

          {/* 5. Render server/action response */}
          {state?.success && (
            <p className="text-amber-400 mt-1">{state.message}</p>
          )}
        </form>

        {/* Info panel */}
        <div className="flex-1 text-amber-200 flex flex-col gap-3">
          <h2 className="text-xl font-medium text-amber-500">Visit Us</h2>
          <p>The Krafted Cup</p>
          <p>296 Talbot St N,</p>
          <p>Essex, ON</p>
          <p>N8M 2E1</p>

          <h2 className="text-xl font-medium text-amber-500 mt-4">
            Get in Touch
          </h2>
          <a href="mailto:hello@thekraftedcup.com" className="hover:underline">
            hello@thekraftedcup.com
          </a>
          <a href="tel:+15195551234" className="hover:underline">
            (519) 555-1234
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
