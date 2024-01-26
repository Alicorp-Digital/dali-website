"use client";
import { FC, ReactNode } from "react";
import { Header } from "components";
import "./styles.scss";
import { DlSidebar } from "@alicorpdigital/dali-react-sidebar";

type Props = {
  children: ReactNode;
};

const LayoutMain: FC<Props> = (props) => {
  const { children } = props;

  const items = [
    {
      label: "Item 1",
      key: "item1",
      // icon: <DlIcon name='package' />,
      children: [
        { label: "subItem 1", key: "subItem1" },
        { label: "subItem 2", key: "subItem2" },
      ],
    },
    {
      label: "Item 2",
      key: "item2",
      // icon: <DlIcon name='package' />,
      children: [
        { label: "subItem 1", key: "subItem11" },
        { label: "subItem 2", key: "subItem22" },
      ],
    },
    {
      label: "Item 3",
      key: "item3",
      // icon: <DlIcon name='package' />,
      disabled: true,
    },
    {
      label: "Item 4",
      key: "item4",
      // icon: <DlIcon name='package' />,
    },
  ];
  return (
    <div className="dali-layout-main">
      <Header />
      <div className="dali-layout-main__content">
        <DlSidebar items={items} />

        <div className="dali-layout-main__children">{children}</div>
      </div>
    </div>
  );
};

export default LayoutMain;
