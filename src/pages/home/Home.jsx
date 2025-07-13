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

  const renderProjectGrid = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
        {projectList?.map((item, index) => (
          <ProjectCard key={index} projName={item.appName} des={item.url} id={item._id} />
        ))}
        <AddButtonCard />
      </div>
    );
  };

  const renderEmptyState = () => {
    return (
      <div className="py-8 text-center text-gray-500">
        <p className="mb-4">No projects found. Start by creating one!</p>
        <div className="flex justify-center">
          <AddButtonCard />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-white pt-10 px-4 font-poppins">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-semibold text-black mb-6">Welcome 👋🏻</h1>

        <div className="bg-[#F4F4F4] rounded-[10px] py-8 px-6 shadow-sm">
          <h2 className="text-[2rem] font-medium mb-4 text-black">Projects</h2>

          {/* Loading */}
          {status === "loading" && (
            <div className="text-gray-500 animate-pulse">Loading projects...</div>
          )}

          {/* Error */}
          {status === "failed" && (
            <p className="text-red-500 font-medium">Error: {error}</p>
          )}

          {/* Success */}
          {status === "succeeded" && (
            <>
              {projectList && projectList?.length > 0 ? renderProjectGrid() : renderEmptyState()}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
