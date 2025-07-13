// AddButton.jsx
import { useNavigate } from "react-router-dom";

export default function AddButtonCard() {
  const navigate = useNavigate();

  return (
    <div
      id="create-btn"
      className="w-40 h-40 bg-gray-300 rounded-md flex items-center justify-center cursor-pointer"
      onClick={() => navigate("/add")}
    >
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
        <span className="text-3xl text-gray-600">+</span>
      </div>
    </div>
  );
}
