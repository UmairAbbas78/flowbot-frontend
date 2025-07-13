import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendRecord } from "../../store/features/demoSlice";

export default function AddProject() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, result, error } = useSelector((state) => state.record);

  const [url, setUrl] = useState("");
  const [appName, setAppName] = useState("");
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    if (status === "succeeded" && result?.id) {
      navigate(`/project/${result.id}`);
    }
  }, [status, result, navigate]);

  const handleSubmit = () => {
    if (!url || !appName || !prompt) {
      alert("Please fill in all fields.");
      return;
    }

    dispatch(sendRecord({ url, prompt, appName }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 px-6 py-10 font-poppins text-sm">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-1">Create New Demo</h1>
            <p className="text-gray-500">Fill in the details below to generate your app demo video.</p>
          </div>
          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-md shadow-md hover:shadow-lg transition disabled:opacity-60"
          >
            {status === "loading" ? "Processing..." : "Go 🚀"}
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          <InputField
            label="URL"
            placeholder="https://your-app-url.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <InputField
            label="App Name"
            placeholder="My AI App"
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
          />
          <InputField
            label="Prompt"
            placeholder="e.g. Login, click generate, wait, copy result..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            isTextArea
          />
        </div>

        {/* Demo Video Status */}
        <div className="mt-10">
          <h2 className="font-semibold text-lg text-gray-800 mb-2">Demo Video</h2>
          <div className="w-full h-64 rounded-md bg-gray-100 border border-gray-300 flex items-center justify-center text-center px-6">
            {status === "loading" ? (
              <p className="text-indigo-500 font-medium animate-pulse">Processing your demo...</p>
            ) : status === "failed" ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <p className="text-gray-400">Once ready, your demo will appear here.</p>
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
      <label className="block text-gray-700 font-semibold mb-2">{label}</label>
      {isTextArea ? (
        <textarea
          rows="4"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 border border-gray-300 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 border border-gray-300 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
      )}
    </div>
  );
}
