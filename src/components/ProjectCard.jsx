import { useNavigate } from "react-router-dom";

export default function ProjectCard({ projName, des, id }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer w-full max-w-xs"
      onClick={() => navigate(`/project/${id}`)}
    >
      {/* Header with emoji */}
      <div className="bg-gradient-to-tr from-indigo-400 to-purple-500 text-white flex justify-center items-center py-6 rounded-t-xl">
        <span className="text-5xl">😊 🥐</span>
      </div>

      {/* Content */}
      <div className="px-5 py-4">
        <h2 className="font-semibold text-xl text-gray-800 mb-1 truncate">{projName}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{des}</p>
      </div>
    </div>
  );
}
