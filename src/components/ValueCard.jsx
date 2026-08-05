import { useReveal } from "../hooks/useReveal";

export default function ValueCard({ title, desc, index }) {
  const { ref, visible } = useReveal(index * 90);
  return (
    <li ref={ref} className={visible ? "in" : ""}>
      <strong>{title}</strong>
      <span className="d">{desc}</span>
    </li>
  );
}
