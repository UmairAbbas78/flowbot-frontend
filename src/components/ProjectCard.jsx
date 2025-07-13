// ProjectCard.jsx
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ projName, des, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="w-64 rounded-xl  overflow-hidden shadow-sm hover:cursor-pointer"
      onClick={() => navigate(`/project/${id}`)}
    >
      <div className="bg-white flex justify-center items-center py-6">
        <span className="text-5xl">😊 🥐</span>
      </div>

      <div className="bg-gray-200 px-4 py-3">
        <h2 className="font-bold text-lg text-black">{projName}</h2>
        <p className="text-sm text-gray-700">{des}</p>
      </div>
    </div>
  );
}
