import { Box } from "@mui/material";
import HeadSection from "./components/HeadSection";
import Kanban from "./kanban";

function App() {
  return (
    <Box sx={{ bgcolor: "secondary.dark", height: "100vh", padding: 3 }}>
      <HeadSection />
      <Kanban />
    </Box>
  );
}

export default App;
