import Dashboard from "../components/Dashboard";
import Tools from "../components/Tools";

export default function Editor() {
  const editor = true;

  return (
    <Tools editor={editor} />
  )
}