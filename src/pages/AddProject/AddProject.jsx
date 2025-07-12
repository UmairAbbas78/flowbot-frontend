import { useState } from "react";

export default function AddProject() {
  const [url, setUrl] = useState("");
  const [appName, setAppName] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = () => {
    setIsProcessing(true);
    // Simulate API or logic
    setTimeout(() => {
      alert("Processing complete!");
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-8 font-poppins text-xs">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">Create new demo</h1>
            <p className="text-gray-500 mb-5">
              Add the details to the app to create a new demo video
            </p>
          </div>
          <div className=" text-right">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 !bg-[#E5E5E5] hover:bg-gray-300 rounded"
            >
              Go
            </button>
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <div>
            <label className="block font-semibold">URL</label>
            <input
              type="text"
              placeholder="Enter url to the app."
              className="w-full px-4 py-2 mt-1 border border-gray-300 bg-gray-100 rounded focus:outline-none"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold">App Name</label>
            <input
              type="text"
              placeholder="Enter name of your project"
              className="w-full px-4 py-2 mt-1 border border-gray-300 bg-gray-100 rounded focus:outline-none"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold">Prompt</label>
            <textarea
              rows="3"
              placeholder="Enter steps the ai must take in the demo."
              className="w-full px-4 py-2 mt-1 border border-gray-300 bg-gray-100 rounded resize-none focus:outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
        </div>

        {/* Demo Video Section */}
        <div className="mt-10">
          <h2 className="font-semibold mb-2">Demo Video</h2>
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded">
            {isProcessing ? (
              <p className="text-lg font-medium">Processing ......</p>
            ) : (
              <p className="text-gray-400">Your demo will appear here.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
