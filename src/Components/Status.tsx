import { TypeProps } from "../types/index.type";

type statusProps = TypeProps;
export default function Status({ status }: statusProps) {
  let message;

  if (status === "success") {
    message = "Success";
  } else if (status === "error") {
    message = "Error";
  } else {
    message = "loading";
  }
  return <div>Status of Data - {message}</div>;
}
