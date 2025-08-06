import Container from "../components/container";
import { NavLink, Outlet } from "react-router";
import Text from "../components/text";

export default function LayoutMain(){
    return (
      <>
        <Container as="header" className="mt-3 md:mt20">Ola mundo - Header</Container>
        <main className="mt-4 md-mt8">
            <Outlet />
        </main>
        <footer className="my-5 md:my-10">
          <nav className="flex items-center justify-center gap-4">
            <NavLink to="/">
              <Text variant="body-sm-bold" className="text-gray-300">
                tarefas
              </Text>
            </NavLink>
            <NavLink to="/componentes">
              <Text variant="body-sm-bold" className="text-gray-300">
                tarefas
              </Text>
            </NavLink>
          </nav>
        </footer>
      </>
    );

}