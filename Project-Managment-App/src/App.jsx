import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectsState(prevState=>{
      const taskId = Math.random();
      const NewTask = {
        text:text,
        projectId:prevState.selectedProjectId,
        id:taskId
      }
      return {
        ...prevState,
        tasks:[NewTask,...prevState.tasks]
      }
    })
  }
  function handleDeleteTask() {

  }
  function handleStartAddProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: null
    }));

  }
  function handleCancelProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined
    }));

  }

  function handleSelectedProject(id) {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: id
    }));
  }

  function handleDeleteProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
    }));
  }

  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random()
    };
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject]
    }));
  }
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  let content = <SelectedProject project={selectedProject} 
  onDelete={handleDeleteProject} 
  onAddTask={handleAddTask} 
  onDeleteTask={handleDeleteTask}
  tasks={projectsState.tasks}/>;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectedProject={handleSelectedProject} />
      {content}
    </main>
  );
}

export default App;
