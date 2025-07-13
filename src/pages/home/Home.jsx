import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../../store/features/projectSlice";
import ProjectCard from "../../components/ProjectCard";
import AddButtonCard from "../../components/AddProjectCard";

function Home() {
  const dispatch = useDispatch();
  const { list: projectList, status, error } = useSelector((state) => state.projects);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProjects());
    }
    console.log(projectList);
  }, [status, dispatch, projectList]);

  const renderProjectGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-6">
      {projectList?.map((item, index) => (
        <ProjectCard
          key={index}
          projName={item.appName}
          des={item.url}
          id={item._id}
        />
      ))}
      <AddButtonCard />
    </div>
  );

  const renderEmptyState = () => (
    <div className="py-12 text-center text-gray-600">
      <p className="mb-6 text-lg">🚀 No projects yet. Let’s build something awesome!</p>
      <div className="flex justify-center">
        <AddButtonCard />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfbfb] to-[#ebedee] px-4 pt-12 font-poppins">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-[#1a202c] mb-8">
          Welcome 👋🏻
        </h1>

        <div className="bg-white rounded-[12px] p-8 shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-[2.2rem] font-semibold text-[#2d3748] mb-6 border-b pb-2 border-gray-200">
            Your Projects
          </h2>

          {/* Loading */}
          {status === "loading" && (
            <div className="text-center text-indigo-500 animate-pulse text-lg">
              Loading your projects...
            </div>
          )}

          {/* Error */}
          {status === "failed" && (
            <p className="text-center text-red-500 font-medium text-lg">
              Error: {error}
            </p>
          )}

          {/* Success */}
          {status === "succeeded" && (
            <>
              {projectList && projectList.length > 0
                ? renderProjectGrid()
                : renderEmptyState()}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
