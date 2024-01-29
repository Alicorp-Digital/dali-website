import "./styles.scss";

export default function DoDontComponent(props: any) {
  return (
    <>
      <h3 className="dl-title-xs my-4 py-3 ">Do & Dont's</h3>
      <ul className="d-flex justify-content-between usage-list flex-wrap">
        {props.usage.map((item, index) => (
          <li className="usage-list-item" key={index}>
            <figure className={"usage-" + item.action}>
              <img src={item.image} alt="" />
              <figcaption className="p-3">
                <span className="d-flex align-items-center text-capitalize dl-body-xxs">
                  <i
                    className={`
                        justify-content-center
                        align-items-center
                        d-flex
                        text-light
                        usage-list-icon
                        dl-icon
                        dli-check-regular
                        dl-icon-md
                        rounded-circle
                        mr-3
                        ${
                          item.action === "positive"
                            ? "dli-check-regular"
                            : "dli-x-regular"
                        }
                      `}
                  ></i>
                  {item.action === "positive" ? "Do" : "Don't"}
                </span>
                <p className="dl-body-xxs mt-2 mb-0">{item.description}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
}
