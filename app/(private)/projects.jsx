import { View, Text, ScrollView } from "react-native";
import Frame from "../../src/ui/box/Frame";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { projectsQueryOptions } from "../../src/data/Projects.Data";
import CardProject from "../../src/modules/projects/Card.Projects";

export default function Projects() {
  const queryClient = useQueryClient()

  // Carga de data PROYECTS
  const projectsQuery = useQuery(projectsQueryOptions)
  const projects = projectsQuery.data
  console.log(projects);


  return (
    <Frame>
      <ScrollView>
        <Text className="text-3xl font-semibold">Gestión de Proyectos</Text>
        <View className="gap-4 p-2">
          {projects?.map((project) => (
            <CardProject key={project._id} item={project} />
          ))}
        </View>
      </ScrollView>
    </Frame>
  );
}