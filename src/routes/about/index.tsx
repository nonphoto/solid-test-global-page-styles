import { createRouteData, useRouteData } from "solid-start";

export function routeData() {
  return createRouteData(
    () =>
      new Promise<boolean>((resolve) => setTimeout(() => resolve(true), 5000))
  );
}

export default function () {
  const data = useRouteData<typeof routeData>();

  return <div>{data()?.toString()}</div>;
}
