import { Outlet, Style, Title } from "solid-start";

export default function () {
  return (
    <main>
      <Title>About</Title>
      <h1>About</h1>
      <Style>{`html { background-color: lightblue }`}</Style>
      <Outlet />
    </main>
  );
}
