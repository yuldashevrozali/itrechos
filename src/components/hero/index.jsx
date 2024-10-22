import "./index.css"
export default function Hero({ title, text }) {
  return (
    <div className="hero-nav1">
      <div className="hero-nav2">
        <h1> {title}</h1>
        <span>Home/{text}</span>
      </div>
    </div>
  );
}
