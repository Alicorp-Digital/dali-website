import "./styles.scss";

export default function ColorItem(props: any) {
  return (
    <li className="color-container d-flex flex-column">
      <p
        className="
          align-self-start 
          px-3 py-1 
          dl-comp-text-xxs 
          color-title 
          mb-4 rounded"
      >
        {props.title}
      </p>
      <p className="dl-body-text mb-0 color-description">{props.description}</p>
    </li>
  );
}
