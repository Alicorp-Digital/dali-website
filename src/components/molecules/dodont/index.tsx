import "./styles.scss";
import Image from "next/image";

export default function DoDontComponent(props: any) {
  return (
    <>
      <ul className="d-flex justify-content-between usage-list mb-0 flex-wrap">
        {props.usage.map((item: any, index: number) => (
          <li className="usage-list-item" key={index}>
            <figure className={"mb-0 usage-" + item.action}>
              <Image
                width={343}
                height={160}
                src={item.image}
                alt={item.action}
              />
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
