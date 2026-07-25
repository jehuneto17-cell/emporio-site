function EmpProducts({ go }) {
  const { Button, Card } = window.EmpRioCoisasDeMinasDesignSystem_3a51f4;
  const sectionPad = { padding: "112px 5%" };
  const cats = [
    { tag: "Doce", title: "Doces em geral", desc: "Doce de leite, compotas e frutas cristalizadas em calda." },
    { tag: "Doce", title: "Geleia de pimenta", desc: "O equilíbrio perfeito entre doce e picante." },
    { tag: "Salgado", title: "Pimentas e molhos", desc: "Fermentados e temperados no ponto mineiro." },
    { tag: "Padaria", title: "Torradas e pães", desc: "Crocância artesanal para acompanhar qualquer pote." },
  ];
  return (
    <div>
      <section className="scheme-3" style={sectionPad}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontWeight: 600, marginBottom: 16 }}>Artesanal</p>
          <h1 style={{ marginBottom: 24 }}>Nossos produtos</h1>
          <p className="text-medium" style={{ marginBottom: 32 }}>Sabores autênticos da Serra da Canastra feitos com ingredientes selecionados e aquele carinho que só Minas Gerais tem.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <Button>Peça</Button>
            <Button variant="secondary" onClick={() => go("Nossa história")}>História</Button>
          </div>
        </div>
      </section>

      <section className="scheme-4" style={sectionPad}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 480, margin: "0 auto 80px", textAlign: "center" }}>
            <p style={{ fontWeight: 600, marginBottom: 16 }}>Categorias</p>
            <h2 style={{ marginBottom: 24 }}>Escolha o seu sabor</h2>
            <p className="text-medium">Cada pote carrega a tradição da Serra da Canastra.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 32 }}>
            <Card style={{ gridRow: "span 2", padding: 48, background: "var(--color-neutral-darkest)", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
              <p className="text-small" style={{ fontWeight: 600 }}>Artesanal</p>
              <h3 style={{ fontSize: 28 }}>Antepastos e patês cremosos da cozinha mineira</h3>
              <p>Berinjela, alcachofra e tomate seco temperados com ervas frescas e azeite de oliva.</p>
              <div style={{ display: "flex", gap: 16 }}><Button variant="secondary">Comprar</Button><Button variant="link" size="link" iconRight={<span>›</span>}>App</Button></div>
            </Card>
            {cats.map((c) => (
              <Card key={c.title} style={{ padding: 24, background: "var(--color-neutral-darkest)", display: "flex", flexDirection: "column", gap: 8 }}>
                <p className="text-small" style={{ fontWeight: 600 }}>{c.tag}</p>
                <h3 style={{ fontSize: 20 }}>{c.title}</h3>
                <p>{c.desc}</p>
                <Button variant="link" size="link" iconRight={<span>›</span>}>App</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="scheme-1" style={sectionPad}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p style={{ fontWeight: 600, marginBottom: 16 }}>Curadoria</p>
            <h2 style={{ marginBottom: 24 }}>Mais de 80 motivos para abrir o apetite</h2>
            <p className="text-medium" style={{ marginBottom: 32 }}>Cada produto é escolhido a dedo, direto dos produtores da Serra da Canastra. A tradição mineira cabe no seu bolso, dentro do app.</p>
            <div style={{ display: "flex", gap: 16 }}><Button variant="secondary">Explorar</Button><Button variant="link" size="link" iconRight={<span>›</span>}>App</Button></div>
          </div>
          <div style={{ display: "grid", gap: 32 }}>
            <Card style={{ padding: 32 }}><p style={{ fontSize: 56, fontWeight: 700, marginBottom: 8 }}>+120</p><h3 style={{ fontSize: 18 }}>Produtos no app</h3><p>De geleias a vinhos, tudo em um só lugar.</p></Card>
            <Card style={{ padding: 32 }}><p style={{ fontSize: 56, fontWeight: 700, marginBottom: 8 }}>100%</p><h3 style={{ fontSize: 18 }}>Feito artesanalmente</h3><p>Produção pequena, sabor grande e atenção a cada detalhe.</p></Card>
          </div>
        </div>
      </section>

      <section className="scheme-2" style={sectionPad}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ marginBottom: 24 }}>O app está te esperando</h2>
          <p className="text-medium" style={{ marginBottom: 32 }}>Mais de 80 produtos mineiros esperam por você no nosso app. Baixe agora e explore todos.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 48 }}>
            <Button>Baixar</Button>
            <Button variant="secondary">História</Button>
          </div>
          <div style={{ maxWidth: 1280, margin: "0 auto", height: 320, borderRadius: "var(--radius-image)", background: "var(--color-neutral-lighter)" }} />
        </div>
      </section>
    </div>
  );
}
window.EmpProducts = EmpProducts;
