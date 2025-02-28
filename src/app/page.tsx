"use client";

import { useState, useEffect } from "react";
import { Prompt } from "../types/prompt";
import { motion } from "framer-motion";

export default function Home() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [filteredPrompts, setFilteredPrompts] = useState<Prompt[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Alle");
  const [copyMessage, setCopyMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/prompts.json")
      .then((res) => res.json())
      .then((data: Prompt[]) => {
        setPrompts(data);
        setFilteredPrompts(data);

        const uniqueCategories = [
          "Alle",
          ...new Set(data.map((prompt) => prompt.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
    setFilteredPrompts(category === "Alle" ? prompts : prompts.filter((p) => p.category === category));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopyMessage("Prompt erfolgreich kopiert! ✅");

    setTimeout(() => setCopyMessage(null), 2000);
  };

  return (
    <div className="relative max-w-4xl p-6 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">Prompt Manager</h1>

      <p className="max-w-2xl mx-auto mb-6 text-center text-gray-600">
        Der Prompt Manager bietet eine kuratierte Sammlung von <b>ChatGPT-Prompts</b>,
        die in Kategorien unterteilt sind. Nutzer können Prompts durchsuchen,
        direkt mit einem spezialisierten GPT testen oder den Prompt für eigene Zwecke
        in die Zwischenablage kopieren. Ideal für effiziente AI-Workflows und
        kreative Inspiration!
      </p>

      {/* Categories */}
      <div className="flex mb-6 space-x-2 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => filterByCategory(category)}
            className={`px-4 py-2 rounded-lg cursor-pointer text-sm ${selectedCategory === category ? "bg-green-800 text-white" : "bg-gray-200"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Prompt Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredPrompts.map((prompt, index) => {
          const isLinkValid = prompt.gpt_link.trim().length > 0;

          return (
            <div key={index} className="p-4 border rounded-lg shadow">
              <h2 className="text-lg font-bold">{prompt.title}</h2>
              <p className="text-gray-700">{prompt.description}</p>
              <div className="flex mt-3 space-x-2">
                <button
                  onClick={() => copyToClipboard(prompt.prompt)}
                  className="px-4 py-2 bg-white border-green-800 rounded cursor-pointer border-1"
                >
                  Kopieren
                </button>

                <a
                  href={isLinkValid ? prompt.gpt_link : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded ${isLinkValid
                    ? "bg-green-800 text-white cursor-pointer"
                    : "bg-green-100 text-gray-500 cursor-not-allowed"
                    }`}
                  onClick={(e) => !isLinkValid && e.preventDefault()}
                >
                  Testen
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Snackbar / Toast Notification */}
      {copyMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed px-4 py-2 text-white transform -translate-x-1/2 bg-green-500 rounded-lg shadow-lg bottom-5 left-1/2"
        >
          {copyMessage}
        </motion.div>
      )}
    </div>
  );
}