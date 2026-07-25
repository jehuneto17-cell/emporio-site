function EmpHistory({ go }) {
  const { Button, Card, Tabs, TabsList, TabsContent } = window.EmpRioCoisasDeMinasDesignSystem_3a51f4;
  const sectionPad = { padding: "112px 5%" };
  const years = [
    { value: "2015", label: "2015", title: "O primeiro tacho no fogão a lenha", text: "Tudo começou na cozinha de casa, com uma receita de família e o desejo de compartilhar o sabor verdadeiro. O fogo brando fez o resto." },
    { value: "2017", label: "2017", title: "As portas se abrem para a serra", text: "O empório físico nasceu em Passos de Minas, um cantinho para receber quem busca o autêntico." },
    { value: "2019", label: "2019", title: "Mãos que se unem às nossas", text: "Famílias produtoras da Canastra se tornaram parceiras, levando o leite, a fruta e a pimenta da terra para muito mais mesas." },
    { value: "2021", label: "2021", title: "O mundo cabe na palma da mão", text: "Lançamos o aplicativo para encurtar o caminho entre o tacho e a sua casa." },
    { value: "2023", label: "2023", title: "Mais de oitenta motivos para se orgulhar", text: "Hoje são mais de 80 produtos no app, todos feitos com a mesma paciência do primeiro pote." },
  ];
  return (
    <div>
      <section className="scheme-3" style={sectionPad}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontWeight: 600, marginBottom: 16 }}>Origem</p>
          <h1 style={{ marginBottom: 24 }}>Nossa história</h1>
          <p className="text-medium" style={{ marginBottom: 32 }}>Da terra vermelha da Canastra para a sua mesa, cada pote carrega o tempo, o fogo brando e a memória afetiva de Minas Gerais.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <Button onClick={() => go("Produtos")}>Produtos</Button>
            <Button variant="secondary">Peça pelo app</Button>
          </div>
        </div>
      </section>

      <section className="scheme-1" style={sectionPad}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p style={{ fontWeight: 600, marginBottom: 16 }}>Raiz</p>
            <h2 style={{ marginBottom: 24 }}>O fogo brando que vem da serra</h2>
            <p className="text-medium" style={{ marginBottom: 32 }}>Tudo começa com as mãos de quem conhece a terra. A mesma paciência do fogão a lenha está em cada receita que chega até você.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div><h6 style={{ marginBottom: 12 }}>Parceiros</h6><p>Famílias que transformam o leite, a fruta e a pimenta em pura memória afetiva.</p></div>
              <div><h6 style={{ marginBottom: 12 }}>Feito à mão</h6><p>Nenhum pote é igual ao outro, cada um carrega o tempo certo e o carinho de Minas.</p></div>
            </div>
          </div>
          <div style={{ width: "100%", height: 420, borderRadius: "var(--radius-image)", background: "var(--color-neutral-lighter)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-neutral-dark)", fontSize: 13 }}>Relume placeholder image</div>
        </div>
      </section>

      <section className="scheme-4" style={sectionPad}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Tabs defaultValue="2015">
            <TabsList items={years.map((y) => ({ value: y.value, label: y.label }))} />
            {years.map((y) => (
              <TabsContent key={y.value} value={y.value} style={{ gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
                <div>
                  <h3 style={{ marginBottom: 12 }}>{y.value}</h3>
                  <h4 style={{ marginBottom: 24 }}>{y.title}</h4>
                  <p className="text-medium">{y.text}</p>
                </div>
                <div style={{ height: 280, borderRadius: "var(--radius-image)", background: "var(--color-neutral-darkest)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-white-20)" }}>foto do período</div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="scheme-1" style={sectionPad}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 480, margin: "0 auto 80px", textAlign: "center" }}>
            <p style={{ fontWeight: 600, marginBottom: 16 }}>Essência</p>
            <h2 style={{ marginBottom: 24 }}>O que nos move</h2>
            <p className="text-medium">Três pilares simples que sustentam cada pote que chega até você.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 32 }}>
            <Card style={{ gridRow: "span 2", padding: 48, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ height: 200, borderRadius: "var(--radius-image)", background: "var(--color-neutral-lighter)", marginBottom: 24 }} />
              <p className="text-small" style={{ fontWeight: 600, marginBottom: 8 }}>Feito à mão</p>
              <h3 style={{ fontSize: 28, marginBottom: 24 }}>Nenhum pote é igual ao outro</h3>
              <p>O que nos move</p>
              <div style={{ marginTop: 32, display: "flex", gap: 16 }}>
                <Button variant="secondary">Produtos</Button>
                <Button variant="link" size="link" iconRight={<span>›</span>}>Produtos</Button>
              </div>
            </Card>
            <Card style={{ padding: 48 }}>
              <img src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/bento.svg" width="48" style={{ marginBottom: 24 }} />
              <h3 style={{ fontSize: 28, marginBottom: 24 }}>O terroir fala mais alto</h3>
              <p>Três pilares simples que sustentam cada pote que chega até você.</p>
              <div style={{ marginTop: 32, display: "flex", gap: 16 }}>
                <Button variant="secondary">Produtos</Button>
                <Button variant="link" size="link" iconRight={<span>›</span>}>Produtos</Button>
              </div>
            </Card>
            <Card style={{ padding: 48 }}>
              <img src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/bento.svg" width="48" style={{ marginBottom: 24 }} />
              <h3 style={{ fontSize: 28, marginBottom: 24 }}>O terroir fala mais alto</h3>
              <p>Três pilares simples que sustentam cada pote que chega até você.</p>
              <div style={{ marginTop: 32, display: "flex", gap: 16 }}>
                <Button variant="secondary">Produtos</Button>
                <Button variant="link" size="link" iconRight={<span>›</span>}>Produtos</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="scheme-2" style={sectionPad}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ marginBottom: 24 }}>A mesa espera por você</h2>
          <p className="text-medium" style={{ marginBottom: 32 }}>Explore nossos antepastos, geleias e doces. A história continua no seu próximo pedido, direto no aplicativo.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <Button onClick={() => go("Produtos")}>Produtos</Button>
            <Button variant="secondary">Peça pelo app</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
window.EmpHistory = EmpHistory;
