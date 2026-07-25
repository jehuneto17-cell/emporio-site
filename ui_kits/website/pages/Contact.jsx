function EmpContact() {
  const { Card, Button, Accordion, AccordionItem, AccordionTrigger, AccordionContent } = window.EmpRioCoisasDeMinasDesignSystem_3a51f4;
  const sectionPad = { padding: "112px 5%" };
  const Placeholder = ({ h = 200 }) => (
    <div style={{ width: "100%", aspectRatio: "3/2", borderRadius: "var(--radius-image)", background: "var(--color-neutral-lighter)" }} />
  );
  const faqs = [
    { q: "Como faço um pedido", a: "Todos os pedidos são feitos pelo nosso aplicativo. Baixe na Play Store, escolha seus produtos favoritos e finalize por lá. É rápido e seguro." },
    { q: "Vocês entregam em todo Brasil", a: "Entregamos para todo o país com cuidado para que os produtos cheguem inteiros e frescos. O prazo varia conforme a região." },
    { q: "Posso retirar na loja", a: "Sim. Ao fazer o pedido no app, escolha a opção de retirada. Você recebe um código e é só buscar no nosso endereço em Passos de Minas." },
    { q: "Os produtos são artesanais mesmo", a: "Cada pote e cada pão saem de mãos mineiras, com receitas da Serra da Canastra. Não usamos produção em massa." },
    { q: "Como acompanho meu pedido", a: "Pelo próprio aplicativo você acompanha cada etapa. Da separação dos produtos até a saída para entrega, está tudo lá." },
  ];
  return (
    <div>
      {/* 2. Seção de Localizações — contact-28 — scheme 3 */}
      <section className="scheme-3" style={sectionPad}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 480, marginBottom: 80 }}>
            <p style={{ fontWeight: 600, marginBottom: 16 }}>Visite</p>
            <h2 style={{ marginBottom: 24 }}>Onde estamos</h2>
            <p className="text-medium">Venha sentir o cheiro de Minas de perto.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
            <div>
              <div style={{ marginBottom: 24 }}><Placeholder /></div>
              <h3 style={{ fontSize: 24, marginBottom: 12 }}>Passos de Minas</h3>
              <p>Rua Serra da Canastra, 450, Centro, Passos de Minas, MG</p>
              <div style={{ marginTop: 20 }}><Button variant="link" size="link" iconRight={<span>›</span>}>Ver no mapa</Button></div>
            </div>
            <div>
              <div style={{ marginBottom: 24 }}><Placeholder /></div>
              <h3 style={{ fontSize: 24, marginBottom: 12 }}>Horários</h3>
              <p>Segunda a sexta, das 9h às 18h. Sábado, das 9h às 13h.</p>
              <div style={{ marginTop: 20 }}><Button variant="link" size="link" iconRight={<span>›</span>}>Ver no mapa</Button></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Seção de Contato — contact-19 — scheme 1 */}
      <section className="scheme-1" style={sectionPad}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 480, marginBottom: 80 }}>
            <p style={{ fontWeight: 600, marginBottom: 16 }}>Fale</p>
            <h2 style={{ marginBottom: 24 }}>Canais diretos</h2>
            <p className="text-medium">Escolha o melhor caminho para um papo reto e mineiro.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 48 }}>
            {[
              { icon: "mail", title: "E-mail", text: "Mande sua mensagem e responderemos com o carinho de sempre.", link: "@emporiocoisasdeminas.com.br" },
              { icon: "call", title: "WhatsApp", text: "Prefere um café virtual? Chame a gente por aqui.", link: "35 99898-7421" },
              { icon: "location_on", title: "Instagram", text: "Acompanhe os bastidores e as novidades da cozinha.", link: "@EMPORIOCOISASDEMINASPASSOS" },
            ].map((c) => (
              <div key={c.title}>
                <img src={`https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/${c.icon}.svg`} width="48" style={{ marginBottom: 20 }} />
                <h3 style={{ fontSize: 24, marginBottom: 12 }}>{c.title}</h3>
                <p style={{ marginBottom: 20 }}>{c.text}</p>
                <a href="#" style={{ textDecoration: "underline" }}>{c.link}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Seção para Perguntas Frequentes — faq-05 — scheme 2 */}
      <section className="scheme-2" style={sectionPad}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ marginBottom: 24 }}>Dúvidas</h2>
          <p className="text-medium" style={{ marginBottom: 48 }}>Se a sua pergunta não estiver aqui, é só chamar no WhatsApp.</p>
          <Accordion defaultOpen={["q0"]}>
            <div style={{ display: "grid", gap: 16 }}>
              {faqs.map((f, i) => (
                <Card key={i}><AccordionItem value={"q" + i}><div style={{ padding: "0 24px" }}>
                  <AccordionTrigger value={"q" + i}>{f.q}</AccordionTrigger>
                  <AccordionContent value={"q" + i}><p>{f.a}</p></AccordionContent>
                </div></AccordionItem></Card>
              ))}
            </div>
          </Accordion>
        </div>
      </section>

      {/* 5. Seção de Cabeçalho — header-62 — scheme 3 */}
      <section className="scheme-3" style={sectionPad}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontWeight: 600, marginBottom: 16 }}>Contato</p>
          <h1 style={{ marginBottom: 24 }}>Fale com a gente</h1>
          <p className="text-medium" style={{ marginBottom: 32 }}>Um pedaço de Minas está a uma mensagem de distância. Conte com a gente para o que precisar.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <Button>WhatsApp</Button>
            <Button variant="secondary">App</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
window.EmpContact = EmpContact;
