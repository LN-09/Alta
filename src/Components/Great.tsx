export type props = {
  name: string;
  messageCount: number;
  isLogin: boolean;
};
export default function Great(props: props) {
  return (
    <h2>
      {props.isLogin
        ? `Hi ${props.name} u have ${props.messageCount} unread messages `
        : `Welcome Guest`}
    </h2>
  );
}
