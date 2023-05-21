import { useQuery } from "@apollo/client";
import Spinner from "./Spinner";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectsCard from "./ProjectsCard";

function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong please try again</p>;
  return (
    <>
      {data.projects.length > 0 ? (
        <div className="'row mt-4">
          {data.projects.map((project) => (
            <ProjectsCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
}

export default Projects;
