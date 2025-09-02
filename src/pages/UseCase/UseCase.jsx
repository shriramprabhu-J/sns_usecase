import React, { useState } from "react";
import Sidebar from "../../components/Sidebar.jsx";

export const Categories = () => {
  const [activeSubtopic, setActiveSubtopic] = useState(null);

  // Data for subtopics and cards
  const categoryCards = {
    processing: [
      {
        title: "Document Indexing",
        description: "Organize and index documents for fast retrieval and access.",
      },
      {
        title: "Workflow Automation",
        description: "Automate document processing with AI-driven workflows.",
      },
      {
        title: "Knowledge Graphs",
        description: "Connect and structure knowledge for improved decision-making.",
      },
    ],
    retrieval: [
      {
        title: "Smart Search",
        description: "Find documents instantly using semantic and keyword search.",
      },
      {
        title: "Information Extraction",
        description: "Extract entities, facts, and insights from documents.",
      },
      {
        title: "Search Analytics",
        description: "Track and analyze document access and retrieval patterns.",
      },
    ],
    maintenance: [
      {
        title: "Version Control",
        description: "Maintain and track multiple versions of critical documents.",
      },
      {
        title: "Archiving",
        description: "Preserve important files with secure archiving solutions.",
      },
      {
        title: "Data Cleanup",
        description: "Ensure data integrity with automated cleanup and validation.",
      },
    ],
    summarization: [
      {
        title: "Text Summarization",
        description: "Condense long documents into short, readable summaries.",
      },
      {
        title: "Content Routing",
        description: "Route summaries to the right systems or departments.",
      },
      {
        title: "Adaptive Summaries",
        description: "Generate summaries tailored to user roles and needs.",
      },
    ],
    chatbots: [
      {
        title: "Virtual Agents",
        description: "Deploy AI-powered chatbots for customer support.",
      },
      {
        title: "Voice Assistance",
        description: "Enable voice-driven support and task automation.",
      },
      {
        title: "Multilingual Bots",
        description: "Assist users worldwide with multilingual capabilities.",
      },
    ],
    analytics: [
      {
        title: "Forecasting",
        description: "Predict trends with AI-driven forecasting models.",
      },
      {
        title: "Market Analysis",
        description: "Gain insights with real-time market and competitor analysis.",
      },
      {
        title: "Performance Dashboards",
        description: "Visualize KPIs and metrics in interactive dashboards.",
      },
    ],
    compliance: [
      {
        title: "Risk Assessment",
        description: "Evaluate and mitigate compliance risks proactively.",
      },
      {
        title: "System Security",
        description: "Protect sensitive data with robust system security.",
      },
      {
        title: "Regulatory Adherence",
        description: "Stay aligned with industry regulations and audits.",
      },
    ],
    storage: [
      {
        title: "Data Lakes",
        description: "Store structured and unstructured data at scale.",
      },
      {
        title: "Cloud Storage",
        description: "Enable secure, scalable, and accessible storage solutions.",
      },
      {
        title: "Backup & Recovery",
        description: "Ensure business continuity with reliable data recovery.",
      },
    ],
  };

  return (
    <div className="flex bg-white min-h-screen w-full">
      {/* Sidebar */}
      <Sidebar setActiveSubtopic={setActiveSubtopic} />

      {/* Right Content */}
      <div className="flex-1 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Foundational Categories
        </h2>
        <p className="text-sm text-gray-600 mb-8">
          Task-focused building blocks for extraction, summarization, routing, and orchestration.
        </p>

        {/* Show cards based on subtopic */}
        {activeSubtopic ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryCards[activeSubtopic]?.map((card, idx) => (
              <div
                key={idx}
                className="relative bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition"
              >
                {/* Blue badge */}
                <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center">
                  7
                </div>

                <h3 className="text-md font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{card.description}</p>
                <button className="text-sm font-medium text-blue-600 hover:underline">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Select a subtopic to view details.</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
