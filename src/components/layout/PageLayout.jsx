import Container from "./Container";

function PageLayout({ children }) {
  return (
    <main className="main-content">
    <Container>
      {children}
    </Container>
    </main>
  );
}

export default PageLayout;