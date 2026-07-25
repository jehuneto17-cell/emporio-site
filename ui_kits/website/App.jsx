function EmpApp() {
  const [page, setPage] = React.useState("Início");
  const { Navbar, Footer } = window.EmpRioCoisasDeMinasDesignSystem_3a51f4;
  const pages = { "Início": window.EmpHome, "Nossa história": window.EmpHistory, "Produtos": window.EmpProducts, "Contato": window.EmpContact };
  const Page = pages[page];
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    window.EmpAnim && window.EmpAnim.reset();
    const t = setTimeout(() => window.EmpAnim && window.EmpAnim.runAll(), 60);
    return () => clearTimeout(t);
  }, [page]);
  return (
    <div>
      <Navbar active={page} onNavigate={setPage} />
      <div style={{ paddingTop: 0 }}>
        <Page go={setPage} />
      </div>
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<EmpApp />);
