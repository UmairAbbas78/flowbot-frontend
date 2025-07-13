import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendRecord } from "../../store/features/demoSlice"; // Adjust the path if needed

export default function AddProject() {
  const dispatch = useDispatch();
  const { status, result, error } = useSelector((state) => state.record);

  const [url, setUrl] = useState("");
  const [appName, setAppName] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {
    if (!url || !appName || !prompt) {
      alert("Please fill in all fields.");
      return;
    }

    dispatch(sendRecord({ url, prompt, appName }));
  };

  return (
    <div className="min-h-screen bg-white px-6 py-8 font-poppins text-sm">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Create New Demo</h1>
            <p className="text-gray-500">
              Add the details below to create a new demo video.
            </p>
          </div>
          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="px-6 py-2 bg-[#E5E5E5] hover:bg-gray-300 rounded disabled:opacity-50"
          >
            {status === "loading" ? "Processing..." : "Go"}
          </button>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <InputField
            label="URL"
            placeholder="Enter the URL to the app"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <InputField
            label="App Name"
            placeholder="Enter the name of your project"
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
          />
          <InputField
            label="Prompt"
            placeholder="Enter steps the AI must take in the demo"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            isTextArea
          />
        </div>

        {/* Demo Video Section */}
        <div className="mt-10">
          <h2 className="font-semibold mb-2">Demo Video</h2>
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded text-center px-4">
            {status === "loading" && (
              <p className="text-lg font-medium">Processing...</p>
            )}
            {status === "succeeded" && result?.videoUrl ? (
              <video
                controls
                className="w-full h-full object-cover rounded"
                src={result.videoUrl}
              />
            ) : status === "succeeded" ? (
              <p className="text-green-600 font-medium">
                Success! (No video URL returned)
              </p>
            ) : status === "failed" ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <p className="text-gray-400">Your demo will appear here.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable input component
function InputField({ label, placeholder, value, onChange, isTextArea }) {
  return (
    <div>
      <label className="block font-semibold mb-1">{label}</label>
      {isTextArea ? (
        <textarea
          rows="3"
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded resize-none focus:outline-none"
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded focus:outline-none"
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
