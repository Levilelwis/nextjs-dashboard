export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>LAYOUT DO DASHBOARD</h1>
      {children}
    </div>
  );
}