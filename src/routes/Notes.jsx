import Tools from "../components/Tools";

export default function Notes() {

  let editor = false;

  return (
    <div className="notes">
      <Tools editor={editor} />
    </div>
  )
}