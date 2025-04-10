import ProjectInfo from "@/utils/data/projectData/projects";
import ProjectCarousel from "./components/ProjectCarousel";

export default function Projects() {
    return (
        <main className="text-white">
            <h1 className="text-white text-center text-4xl lg:text-5xl font-bold italic my-10 z-20">
                Projects
            </h1>
            <ProjectCarousel data={ProjectInfo} />
        </main>
    );
}
