export default function BlogLayout(
  { children, }:
  { children: React.ReactNode }
) {
  return (
    <section className="container border border-green-200 border-solid">
      {children}
    </section>
  );
}