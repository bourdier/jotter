import Tabs from "../components/Tabs";
import Tools from "../components/Tools";

export default function Editor() {
  const editor = true;

  return (
    <Tabs>
      <Tools editor={editor} />
    </Tabs>
  )
}