function EmpHome({ go }) {
  const { Button, Card } = window.EmpRioCoisasDeMinasDesignSystem_3a51f4;
  const sectionPad = { padding: "112px 5%" };
  const Placeholder = ({ h = 320, label }) => (
    <div style={{ width: "100%", height: h, borderRadius: "var(--radius-image)", background: "var(--color-neutral-lighter)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-neutral-dark)", fontSize: 13 }}>{label || "Relume placeholder image"}</div>
  );
  return (
    <div>
      {/* 2. Seção de Cabeçalho Principal — header-01 — scheme 3 */}
      <section className="scheme-3 emp-section-pad" style={sectionPad}>
        <div className="emp-grid-2" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <h1 className="emp-hero-title" style={{ marginBottom: 24 }}>O sabor de Minas na sua mesa</h1>
            <p className="text-medium">Direto da Serra da Canastra, produtos feitos com a calma e o capricho de quem conhece a terra.</p>
            <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Button>Peça pelo App</Button>
              <Button variant="secondary" onClick={() => go("Nossa história")}>Conheça nossa história</Button>
            </div>
          </div>
          <Placeholder h={420} />
        </div>
      </section>

      {/* 3. Seção da Lista de Recursos — layout-375 — scheme 4 */}
      <section className="scheme-4 emp-section-pad" style={sectionPad}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 480, margin: "0 auto 80px", textAlign: "center" }}>
            <p style={{ fontWeight: 600, marginBottom: 16 }}>Categorias</p>
            <h2 style={{ marginBottom: 24 }}>Nossos sabores</h2>
            <p className="text-medium">Escolha o que combina com o seu momento.</p>
          </div>
          <div className="emp-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }}>
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} style={{ background: "var(--color-neutral-darkest)", display: "flex", flexDirection: "column" }}>
                <Placeholder h={140} label={`Relume placeholder image ${i}`} />
                <div style={{ padding: 24 }}>
                  <p className="text-small" style={{ fontWeight: 600, marginBottom: 8 }}>Artesanal</p>
                  <h3 style={{ fontSize: 20, marginBottom: 8 }}>Antepastos e Patês</h3>
                  <p>Sabores intensos para abrir o apetite com perfeição.</p>
                  <div style={{ marginTop: 20 }}><Button variant="link" size="link" iconRight={<span>›</span>}>Ver</Button></div>
                </div>
              </Card>
            ))}
            <Card style={{ gridColumn: "span 2", gridRow: "span 2", background: "var(--color-neutral-darkest)", display: "flex", flexDirection: "column" }}>
              <Placeholder h={220} label="Relume placeholder image 5" />
              <div style={{ padding: "24px 32px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p className="text-small" style={{ fontWeight: 600, marginBottom: 8 }}>Selecionado</p>
                <h3 style={{ fontSize: 28, marginBottom: 16 }}>Vinhos</h3>
                <p>Rótulos escolhidos a dedo para brindar os sabores de Minas.</p>
                <div style={{ marginTop: 24 }}><Button variant="secondary">Ver todos</Button></div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Seção de Benefícios — layout-378 — scheme 1 */}
      <section className="scheme-1 emp-section-pad" style={sectionPad}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 480, margin: "0 auto 80px", textAlign: "center" }}>
            <p style={{ fontWeight: 600, marginBottom: 16 }}>Destaques</p>
            <h2 style={{ marginBottom: 24 }}>Os favoritos da casa</h2>
            <p className="text-medium">Selecionamos o que há de melhor saindo do nosso tacho.</p>
          </div>
          <div className="emp-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }}>
            <Card className="emp-card-split" style={{ gridColumn: "span 2", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div style={{ padding: 24, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p className="text-small" style={{ fontWeight: 600, marginBottom: 8 }}>Novidade</p>
                <h3 style={{ fontSize: 20, marginBottom: 8 }}>Pasta de alho negro da Canastra</h3>
                <p>Intensa e aveludada, feita com alho negro artesanal.</p>
                <div style={{ marginTop: 20 }}><Button variant="link" size="link" iconRight={<span>›</span>}>Ver no app</Button></div>
              </div>
              <Placeholder h="100%" />
            </Card>
            <Card style={{ padding: 24 }}>
              <img src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/cake.svg" width="48" style={{ marginBottom: 16 }} />
              <h3 style={{ fontSize: 20, marginBottom: 8 }}>Doce de leite com cumaru no ponto de corte</h3>
              <p>A madeira nobre encontra o leite da melhor procedência.</p>
              <div style={{ marginTop: 20 }}><Button variant="link" size="link" iconRight={<span>›</span>}>Ver no app</Button></div>
            </Card>
            <Card style={{ padding: 24 }}>
              <img src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/cake.svg" width="48" style={{ marginBottom: 16 }} />
              <h3 style={{ fontSize: 20, marginBottom: 8 }}>Doce de leite com cumaru no ponto de corte</h3>
              <p>A madeira nobre encontra o leite da melhor procedência.</p>
              <div style={{ marginTop: 20 }}><Button variant="link" size="link" iconRight={<span>›</span>}>Ver no app</Button></div>
            </Card>
            <Card className="emp-card-split" style={{ gridColumn: "span 2", gridRow: "span 2", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div style={{ padding: 24, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p className="text-small" style={{ fontWeight: 600, marginBottom: 8 }}>Premium</p>
                <h3 style={{ fontSize: 28, marginBottom: 16 }}>Antepasto de berinjela defumada</h3>
                <p>O sabor da brasa em uma receita que atravessa gerações na Serra da Canastra.</p>
                <div style={{ marginTop: 24 }}><Button variant="link" size="link" iconRight={<span>›</span>}>Ver no app</Button></div>
              </div>
              <Placeholder h="100%" />
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Seção de Como Funciona — layout-237 — scheme 3 */}
      <section className="scheme-3 emp-section-pad" style={sectionPad}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ maxWidth: 480, margin: "0 auto 80px", textAlign: "center" }}>
            <p style={{ fontWeight: 600, marginBottom: 16 }}>Simples</p>
            <h2 style={{ marginBottom: 24 }}>Como receber o sabor de Minas</h2>
            <p className="text-medium">É rápido e fácil. O caminho mais curto entre a Serra da Canastra e a sua mesa.</p>
          </div>
          <div className="emp-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 48, width: "100%" }}>
            {[
              { icon: "apps", title: "Peça no app", text: "Escolha seus produtos favoritos e monte a cesta perfeita." },
              { icon: "select", title: "Escolha entrega ou retirada", text: "Você decide se recebe em casa ou busca no nosso empório." },
              { icon: "code", title: "Receba ou retire com código", text: "Prático e seguro, seu pedido chega até você sem complicação." },
            ].map((s) => (
              <div key={s.title} style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={`https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/${s.icon}.svg`} width="48" style={{ marginBottom: 20 }} />
                <h3 style={{ fontSize: 24, marginBottom: 20 }}>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 80, display: "flex", gap: 16 }}>
            <Button variant="secondary">Baixar o App</Button>
            <Button variant="link" size="link" iconRight={<span>›</span>}>Ver como funciona</Button>
          </div>
        </div>
      </section>

      {/* 6. Seção Sobre — layout-192 — scheme 1 */}
      <section className="scheme-1 emp-section-pad" style={sectionPad}>
        <div className="emp-grid-2" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <Placeholder h={420} />
          <div>
            <p style={{ fontWeight: 600, marginBottom: 16 }}>Essência</p>
            <h2 style={{ marginBottom: 24 }}>Feito em Minas, feito com carinho</h2>
            <p className="text-medium">Nossas receitas nascem na Serra da Canastra, do encontro da terra boa com as mãos de quem respeita o tempo. Cada pote carrega a memória de um fogão a lenha e o orgulho de ser mineiro.</p>
            <div style={{ marginTop: 32, display: "flex", gap: 16 }}>
              <Button variant="secondary">História</Button>
              <Button variant="link" size="link" iconRight={<span>›</span>}>Ler</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Seção de Depoimentos — testimonial-17 — scheme 2 */}
      <section className="scheme-2 emp-section-pad" style={sectionPad}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 480, margin: "0 auto 80px", textAlign: "center" }}>
            <h2 style={{ marginBottom: 24 }}>Quem provou</h2>
            <p className="text-medium">A palavra de quem já recebeu um pedacinho de Minas.</p>
          </div>
          <div className="emp-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32 }}>
            {[
              { name: "Ana Clara", city: "Cliente de São Paulo", img: "depoimento-ana-clara.jpg", quote: "O antepasto de berinjela defumada me levou direto para a roça. Sabor de comida feita com calma." },
              { name: "João Pedro", city: "Cliente de Uberlândia", img: null, quote: "A geleia de pimenta biquinho com cachaça é um espetáculo. Combina com tudo, do queijo ao churrasco." },
              { name: "Mariana Souza", city: "Cliente de Belo Horizonte", img: "depoimento-mariana.jpg", quote: "Presenteei minha família com a cesta de doces. O doce de leite com cumaru é inesquecível." },
            ].map((t) => (
              <Card key={t.name} style={{ padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <p style={{ marginBottom: 24, color: "var(--color-van-cleef)" }}>★★★★★</p>
                <h5 style={{ fontWeight: 400, fontSize: 20, marginBottom: 24 }}>"{t.quote}"</h5>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  {t.img ? (
                    <img src={`../../assets/images/${t.img}`} style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover" }} />
                  ) : (
                    <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--color-neutral-lighter)" }} />
                  )}
                  <div><p style={{ fontWeight: 600 }}>{t.name}</p><p>{t.city}</p></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Seção de CTA — cta-40 — scheme 2 */}
      <section className="scheme-2 emp-section-pad" style={sectionPad}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Card className="emp-card-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div style={{ padding: 64 }}>
              <h2 style={{ marginBottom: 24 }}>Baixe o app e fique por dentro de tudo</h2>
              <p className="text-medium" style={{ marginBottom: 32 }}>Acompanhe seus pedidos, receba promoções exclusivas e saiba das novidades antes de todo mundo.</p>
              <NewsletterForm />
            </div>
            <Placeholder h="100%" />
          </Card>
        </div>
      </section>
    </div>
  );
}

function NewsletterForm() {
  const { Input, Button } = window.EmpRioCoisasDeMinasDesignSystem_3a51f4;
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("idle"); // idle | sending | sent | error
  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === "sending") return;
    const trimmed = email.trim();
    if (!trimmed) {
      setError("Digite seu e-mail para continuar.");
      setStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Esse e-mail não parece válido. Confira e tente de novo.");
      setStatus("error");
      return;
    }
    setError("");
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setEmail("");
    }, 500);
  };

  return (
    <div style={{ maxWidth: 380 }}>
      <form onSubmit={handleSubmit} noValidate style={{ display: "flex", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 200px" }}>
          <Input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (status === "error") { setStatus("idle"); setError(""); } }}
            aria-invalid={status === "error"}
            aria-describedby={status === "error" ? "newsletter-error" : undefined}
            maxLength={254}
          />
        </div>
        <Button size="sm" disabled={status === "sending"}>
          {status === "sending" ? "Enviando…" : status === "sent" ? "Enviado!" : "Baixar"}
        </Button>
      </form>
      {status === "error" && (
        <p id="newsletter-error" role="alert" style={{ color: "var(--color-van-cleef)", fontSize: "var(--text-small)", marginBottom: 8 }}>{error}</p>
      )}
      {status === "sent" && (
        <p role="status" style={{ color: "var(--color-van-cleef)", fontSize: "var(--text-small)", marginBottom: 8 }}>Recebemos seu e-mail! Fique de olho na caixa de entrada.</p>
      )}
      <p className="text-tiny">Ao se inscrever, você concorda em receber nossas novidades e está de acordo com nossa Política de Privacidade.</p>
    </div>
  );
}

window.EmpHome = EmpHome;
