import React from "react";

export default function SingleProject() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white font-poppins">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-bold text-black mb-1">Croissantlly</h2>
          <p className="text-gray-600 text-sm">A simple croissant menu app.</p>
        </div>
        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm flex items-center gap-1">
          Edit ✏️
        </button>
      </div>

      {/* URL Field */}
      <div className="mb-6">
        <label className="block text-black font-semibold mb-2">URL</label>
        <input
          type="text"
          value="localhost:3000"
          readOnly
          className="w-full p-3 bg-gray-200 border-0 rounded text-gray-700"
        />
      </div>

      {/* App Name Field */}
      <div className="mb-6">
        <label className="block text-black font-semibold mb-2">App Name</label>
        <input
          type="text"
          value="Croissantlly"
          readOnly
          className="w-full p-3 bg-gray-200 border-0 rounded text-gray-700"
        />
      </div>

      {/* Prompt Section */}
      <div className="mb-6">
        <label className="block text-black font-semibold mb-2">Prompt</label>
        <div className="text-sm text-gray-700 space-y-1">
          <div>
            • This is an app where user can order cosmic croissants from various
            parts of galaxy
          </div>
          <div>
            • Click on the [data-demo] = "Cosmic button"] and it will open up a
            portal to reveal the secret of the universe. 🌌 "Hello World!"
          </div>
          <div>
            • Explain to the users how this is the sentence that started all of
            this.
          </div>
        </div>
      </div>

      {/* Demo Video Section */}
      <div>
        <label className="block text-black font-semibold mb-2">
          Demo Video
        </label>
        <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[12px] border-y-transparent ml-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
