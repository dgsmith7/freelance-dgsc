import React, { useState } from "react";

/**
 * Contact form component with validation and accessibility features
 * Allows users to submit inquiries with project details
 */
function Contact() {
  // Initial form state with empty fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    projectType: [],
    timeline: "",
    preferredContact: "email",
    details: "",
  });

  // Form state management for validation and submission
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    { id: "website", label: "Website" },
    { id: "webapp", label: "Web Application" },
    { id: "3d", label: "3D Graphics / WebGL" },
    { id: "blockchain", label: "Blockchain / Smart Contract" },
    { id: "ai", label: "AI Integration" },
    { id: "game", label: "Game Development" },
    { id: "api", label: "Custom API / Backend" },
  ];

  const budgetRanges = [
    { value: "under5k", label: "Under $5,000" },
    { value: "5k-10k", label: "$ 5,000 - $10,000" },
    { value: "10k-20k", label: "$10,000 - $20,000" },
    { value: "20k-50k", label: "$20,000 - $50,000" },
    { value: "over50k", label: "Over $50,000" },
    { value: "undecided", label: "Not sure yet" },
  ];

  const timelineOptions = [
    { value: "asap", label: "As soon as possible" },
    { value: "1month", label: "Within 1 month" },
    { value: "3months", label: "Within 3 months" },
    { value: "flexible", label: "Flexible / No rush" },
  ];

  /**
   * Validates form data before submission
   * Checks required fields and proper formatting
   * @returns {boolean} Whether form data is valid
   */
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      valid = false;
    }

    // Email validation with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    // Project type validation
    if (formData.projectType.length === 0) {
      newErrors.projectType = "Please select at least one project type";
      valid = false;
    }

    // Limit details length for security
    if (formData.details.length > 1000) {
      newErrors.details = "Message is too long (maximum 1000 characters)";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  /**
   * Sanitizes user input to prevent XSS attacks
   * @param {string} input - Raw user input to sanitize
   * @returns {string} Sanitized input string
   */
  const sanitizeInput = (input) => {
    // Basic sanitization: remove HTML tags
    return typeof input === "string"
      ? input.replace(/<\/?[^>]+(>|$)/g, "")
      : input;
  };

  const sanitizeFormData = (data) => {
    const sanitized = {};

    // Sanitize each field
    Object.keys(data).forEach((key) => {
      if (Array.isArray(data[key])) {
        sanitized[key] = data[key].map((item) => sanitizeInput(item));
      } else {
        sanitized[key] = sanitizeInput(data[key]);
      }
    });

    return sanitized;
  };

  /**
   * Handles form input changes and clears associated errors
   * @param {Event} e - Input change event
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  /**
   * Handles checkbox input changes for multi-select fields
   * @param {Event} e - Checkbox change event
   */
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        projectType: [...formData.projectType, value],
      });
    } else {
      setFormData({
        ...formData,
        projectType: formData.projectType.filter((type) => type !== value),
      });
    }

    // Clear error when user selects an option
    if (errors.projectType) {
      setErrors({ ...errors, projectType: null });
    }
  };

  /**
   * Handles form submission with validation and API call
   * Includes security measures and error handling
   * @param {Event} e - Form submission event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Prepare minimal data for email
      const emailData = {
        name: formData.name,
        email: formData.email,
        message: formData.details || "No message provided",
        // Include other fields if needed
        company: formData.company,
        projectType: formData.projectType,
        budget: formData.budget,
      };

      console.log("Sending form data:", emailData);

      // Make the API call with a timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Process response
      const contentType = response.headers.get("content-type");
      let result;

      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const text = await response.text();
        console.log("Non-JSON response:", text);
        result = { message: text };
      }

      if (!response.ok) {
        throw new Error(result.details || result.error || "Server error");
      }

      console.log("Success response:", result);
      setSubmitted(true);

      // Reset form data
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        projectType: [],
        timeline: "",
        preferredContact: "email",
        details: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);

      // Show specific error message depending on type
      if (error.name === "AbortError") {
        setErrors({
          submission: "Request timed out. Server may be unavailable.",
        });
      } else {
        setErrors({
          submission: `Error: ${error.message || "Something went wrong."}`,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-8 bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-2">Contact Me</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Ready to discuss your project? Let me know what you're looking for.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10">
          {submitted ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Your message has been received. I'll get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {errors.submission && (
                <div className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-4 rounded-lg">
                  {errors.submission}
                </div>
              )}

              {/* Add form error summary for screen readers */}
              {Object.keys(errors).length > 0 && (
                <div
                  className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg mb-6"
                  role="alert"
                  aria-live="assertive"
                >
                  <h4 className="text-red-600 dark:text-red-400 font-medium">
                    Please correct the following errors:
                  </h4>
                  <ul className="list-disc pl-5 mt-2">
                    {Object.entries(errors).map(([field, message]) => (
                      <li
                        key={field}
                        className="text-red-600 dark:text-red-400"
                      >
                        {message}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Name{" "}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-700"
                    } bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary`}
                    required
                    aria-required="true"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Email{" "}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-700"
                    } bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary`}
                    required
                    aria-required="true"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company Field */}
                <div>
                  <label
                    htmlFor="company"
                    className="block mb-2 text-sm font-medium"
                  >
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Budget Range Field */}
                <div>
                  <label
                    htmlFor="budget"
                    className="block mb-2 text-sm font-medium"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Type Checkboxes */}
              <div>
                <span className="block mb-3 text-sm font-medium">
                  What type of project do you need?
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {projectTypes.map((type) => (
                    <label key={type.id} className="flex items-center">
                      <input
                        type="checkbox"
                        name="projectType"
                        value={type.id}
                        checked={formData.projectType.includes(type.id)}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:bg-gray-700 dark:border-gray-600"
                      />
                      <span className="ml-2 text-sm">{type.label}</span>
                    </label>
                  ))}
                </div>
                {errors.projectType && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.projectType}
                  </p>
                )}
              </div>

              {/* Timeline Field */}
              <div>
                <label
                  htmlFor="timeline"
                  className="block mb-2 text-sm font-medium"
                >
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">When do you need this completed?</option>
                  {timelineOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Contact Method */}
              <div>
                <span className="block mb-3 text-sm font-medium">
                  Preferred Contact Method
                </span>
                <div className="flex flex-wrap gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === "email"}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary focus:ring-primary"
                    />
                    <span className="ml-2">Email</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === "phone"}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary focus:ring-primary"
                    />
                    <span className="ml-2">Phone</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="zoom"
                      checked={formData.preferredContact === "zoom"}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary focus:ring-primary"
                    />
                    <span className="ml-2">Zoom/Video Call</span>
                  </label>
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <label
                  htmlFor="details"
                  className="block mb-2 text-sm font-medium"
                >
                  Additional Details (Optional)
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Share any specific requirements or questions you have..."
                ></textarea>
                {errors.details && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.details}
                  </p>
                )}
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-white font-medium text-lg rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
