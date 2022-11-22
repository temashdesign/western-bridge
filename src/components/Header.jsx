import { Container } from './Container'
import { Logo } from './Logo'

export function Header() {
  return (
    <header>
      <Container className="relative z-50  py-8 text-center">
        <Logo />
      </Container>
    </header>
  )
}
