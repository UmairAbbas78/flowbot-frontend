import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectById } from "../../store/features/projectSlice";
import { useParams } from "react-router-dom";

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
    return <div className="p-8 text-center text-indigo-500 text-lg animate-pulse">Loading project...</div>;
  }

  if (singleStatus === "failed") {
    return <div className="p-8 text-center text-red-600 font-medium">Error: {error}</div>;
  }

  if (!project) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 font-poppins">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">{project.appName}</h1>
          <p className="text-gray-500 text-sm">{project.description || "No description available."}</p>
        </div>
      </div>

      {/* URL */}
      <div className="mb-6">
        <label className="block text-gray-800 font-semibold mb-2">App URL</label>
        <input
          type="text"
          value={project.url || ""}
          readOnly
          className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 font-mono"
        />
      </div>

      {/* App Name */}
      <div className="mb-6">
        <label className="block text-gray-800 font-semibold mb-2">App Name</label>
        <input
          type="text"
          value={project.appName || ""}
          readOnly
          className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 font-medium"
        />
      </div>

      {/* Prompt */}
      <div className="mb-8">
        <label className="block text-gray-800 font-semibold mb-2">Prompt</label>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">
          {project.prompt || "No prompt available."}
        </div>
      </div>

      {/* Demo Video */}
      <div>
        <label className="block text-gray-800 font-semibold mb-2">Demo Video</label>
        <div className="w-full h-max bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
          {project.videoPath ? (
            <video
              controls
              className="rounded"
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
