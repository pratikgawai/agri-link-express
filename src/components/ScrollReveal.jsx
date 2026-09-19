import useScrollReveal from "../hooks/useScrollReveal";

/**
 * Wraps children in a fade/slide-up reveal that triggers once,
 * the first time the element enters the viewport.
 */
export default function ScrollReveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  ...rest
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
