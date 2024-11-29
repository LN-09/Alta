type PropsCSS = {
  styles: React.CSSProperties;
};

export default function Container(props: PropsCSS) {
  return <div style={props.styles}>This is Container</div>;
}
