import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, User } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    freelancer: string;
    status: "in_progress" | "on_hold" | "completed";
    progress: number;
    dueDate: string;
    budget: number;
  };
  onViewDetails: (id: string) => void;
}

const statusConfig = {
  in_progress: { label: "In Progress", color: "bg-status-progress text-white" },
  on_hold: { label: "On Hold", color: "bg-status-hold text-white" },
  completed: { label: "Completed", color: "bg-status-completed text-white" },
};

export const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  const status = statusConfig[project.status];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
        <Badge className={status.color}>{status.label}</Badge>
      </div>

      <div className="space-y-4">
        <div className="flex items-center text-gray-600">
          <User className="w-4 h-4 mr-2" />
          <span>{project.freelancer}</span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-2" />
        </div>

        <div className="flex items-center justify-between text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{project.dueDate}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 mr-1" />
            <span>{project.budget.toLocaleString()}</span>
          </div>
        </div>

        <Button 
          onClick={() => onViewDetails(project.id)}
          className="w-full bg-primary hover:bg-primary-hover active:bg-primary-active"
        >
          View Details
        </Button>
      </div>
    </div>
  );
};