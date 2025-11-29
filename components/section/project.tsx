import { projects } from "@/data";
import { Badge } from "../ui/badge";
import { ThreeDCard } from "../ThreeDCard";

export default function Project() {
    return (
        <section
            id="project"
            className="flex flex-col items-center justify-center max-w-7xl mx-auto px-2 py-20 sm:px-6 min-h-screen"
        >
            <Badge>Projects</Badge>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
                {projects.map((project) => (
                <ThreeDCard key={project.id} project={project} />
                ))}
            </div>

        </section>

    );
}
