import { View, Text } from "react-native";
import Frame from "../../src/ui/box/Frame";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { projectsQueryOptions } from "../../src/data/Projects.Data";

export default function Projects() {
  const queryClient = useQueryClient()

  // Carga de data PROYECTS
  const projectsQuery = useQuery(projectsQueryOptions)
  const projects = projectsQuery.data
  console.log(projects);


  return (
    <Frame>
      <Text>Gestión de Proyectos</Text>
    </Frame>
  );
}