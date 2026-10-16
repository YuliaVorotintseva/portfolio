import Image from "next/image";

type ProjectVisualProps = {
  type: string;
  className?: string;
};

export function ProjectVisual({ type, className = "" }: ProjectVisualProps) {
  const desktopShots = {
    kanban: {
      src: "/projects/taskflow-board.png",
      alt: "TaskFlow Kanban board with project filters, task columns, and activity feed",
    },
    chart: {
      src: "/projects/finance-dashboard.png",
      alt: "Finance Tracker dashboard showing income, expenses, balance, and spending by category",
    },
  } as const;

  if (type === "map") {
    return (
      <div className={`project-visual screenshot-visual travel-screens ${className}`}>
        <Image src="/projects/travel-map.png" alt="TravelTracker route map in Paris" width={922} height={2048} sizes="(max-width: 820px) 27vw, 15vw" />
        <Image src="/projects/travel-route.png" alt="TravelTracker drag-and-drop route planner" width={922} height={2048} sizes="(max-width: 820px) 27vw, 15vw" />
        <Image src="/projects/travel-dark-map.png" alt="TravelTracker map in dark mode" width={922} height={2048} sizes="(max-width: 820px) 27vw, 15vw" />
      </div>
    );
  }

  const shot = desktopShots[type as keyof typeof desktopShots] ?? desktopShots.kanban;
  return (
    <div className={`project-visual screenshot-visual ${type}-visual ${className}`}>
      <Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 820px) 100vw, 55vw" />
    </div>
  );
}
