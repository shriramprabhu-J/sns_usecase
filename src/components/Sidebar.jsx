import React, { useState } from "react";

const Sidebar = ({ setActiveSubtopic }) => {
  const [openCategory, setOpenCategory] = useState("document");

  const categories = [
    {
      id: "document",
      label: "Document & Knowledge Management",
      subtopics: [
        { id: "processing", label: "Processing" },
        { id: "retrieval", label: "Retrieval" },
        { id: "maintenance", label: "Maintenance" },
      ],
    },
    {
      id: "summarization",
      label: "Summarization & Content Handling",
      subtopics: [
        { id: "summarization", label: "Text Summarization" },
      ],
    },
    {
      id: "communication",
      label: "Communication & Assistance",
      subtopics: [
        { id: "chatbots", label: "Chatbots & Virtual Agents" },
      ],
    },
    {
      id: "business",
      label: "Business Intelligence & Analysis",
      subtopics: [
        { id: "analytics", label: "Analytics & Forecasting" },
      ],
    },
    {
      id: "compliance",
      label: "Compliance & Security",
      subtopics: [
        { id: "compliance", label: "Risk & Security" },
      ],
    },
    {
      id: "data",
      label: "Data Management",
      subtopics: [
        { id: "storage", label: "Storage & Lifecycle" },
      ],
    },
  ];

  return (
    <div className="w-72 min-w-72 bg-white border-r border-gray-200 p-6 overflow-y-auto">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Categories
      </h2>
      <p className="text-xs text-gray-500 mb-6">Browse relevant agents</p>

      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.id}>
            {/* Main category */}
            <button
              onClick={() =>
                setOpenCategory(openCategory === category.id ? null : category.id)
              }
              className={`flex justify-between items-center w-full text-left p-2 rounded-md ${
                openCategory === category.id
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.label}
              <span className="text-gray-400">
                {openCategory === category.id ? "−" : "+"}
              </span>
            </button>

            {/* Subtopics */}
            {openCategory === category.id && (
              <div className="ml-4 mt-2 space-y-2">
                {category.subtopics.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubtopic(sub.id)}
                    className="block text-sm text-gray-600 hover:text-blue-600"
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
