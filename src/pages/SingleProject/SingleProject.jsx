import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectById } from "../../store/features/projectSlice";
import { useParams } from "react-router-dom";

// Environment variable for API base URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export default function SingleProject() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { single: project, singleStatus, error } = useSelector((state) => state.projects);

  useEffect(() => {
    if (id) {
      dispatch(fetchProjectById(id));
    }
  }, [id, dispatch]);

  if (singleStatus === "loading") {
    return <div className="p-6 text-center text-gray-500">Loading project...</div>;
  }

  if (singleStatus === "failed") {
    return <div className="p-6 text-center text-red-500">Error: {error}</div>;
  }

  if (!project) return null;

  console.log(project);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white font-poppins">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-bold text-black mb-1">{project.appName}</h2>
          <p className="text-gray-600 text-sm">{project.description || "No description available."}</p>
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
          value={project.url || ""}
          readOnly
          className="w-full p-3 bg-gray-200 border-0 rounded text-gray-700"
        />
      </div>

      {/* App Name Field */}
      <div className="mb-6">
        <label className="block text-black font-semibold mb-2">App Name</label>
        <input
          type="text"
          value={project.appName || ""}
          readOnly
          className="w-full p-3 bg-gray-200 border-0 rounded text-gray-700"
        />
      </div>

      {/* Prompt Section */}
      <div className="mb-6">
        <label className="block text-black font-semibold mb-2">Prompt</label>
        <div className="text-sm text-gray-700 space-y-1 whitespace-pre-line">
          {project.prompt || "No prompt available."}
        </div>
      </div>

      {/* Demo Video Section */}
      <div>
        <label className="block text-black font-semibold mb-2">Demo Video</label>
        <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
          {project.videoPath ? (
            <video
              controls
              className="w-full h-full object-cover rounded"
              src={`${API_BASE_URL}${project.videoPath}`}
            />
          ) : (
            <p className="text-gray-500">No video available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
