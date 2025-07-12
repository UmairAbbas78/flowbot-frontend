import ProjectCard from "../../components/ProjectCard";
import AddButtonCard from "../../components/AddProjectCard";

function Home() {
  const projectlist = [
    {
      projName: "Croissantlly",
      des: "A simple croissant menu app",
    },
    {
      projName: "Baguette Bliss",
      des: "An app for baguette enthusiasts",
    },
    {
      projName: "Roll Revealer",
      des: "Discover a variety of bread rolls",
    },
    {
      projName: "Sourdough Secrets",
      des: "Explore the world of sourdough baking",
    },
    {
      projName: "Pretzel Paradise",
      des: "Your guide to perfect pretzels",
    },
    {
      projName: "Pastry Perfection",
      des: "Master the art of pastries",
    },
  ];

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="font-poppins   w-[90%] h-[95%] ">
        <h1 className="text-black font-normal text-[3.875rem] py-6">
          Welcome <span className="font-bold">Ali</span> 👋🏻!
        </h1>
        <div className=" w-full">
          <div className="bg-[#F4F4F4] rounded-[10px] py-6 px-6">
            <h2 className="text-[2.625rem] font-noraml">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 space-y-4 py-4">
              {projectlist.map((item, index) => (
                <ProjectCard
                  key={index}
                  projName={item.projName}
                  des={item.des}
                />
              ))}
              <AddButtonCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
