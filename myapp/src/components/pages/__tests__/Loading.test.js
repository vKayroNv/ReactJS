import { render } from "@testing-library/react";
import Loading from "../Loading";

it('matches snapshot with no article', () => {
  const component = render(
    <Loading />
  );
  expect(component).toMatchSnapshot();
});