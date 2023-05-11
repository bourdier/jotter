export default function Card() {
  return (
    <div className="card">
      <div className="card__header">
        <h2>Card title</h2>
      </div>
      <div className="card__content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="card__tags">
        <ul className="no-bullet">
          <li>Tags 1</li>
        </ul>
      </div>
    </div>
  )
}