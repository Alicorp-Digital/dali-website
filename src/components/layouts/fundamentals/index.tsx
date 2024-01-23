"use client";
import { FC, ReactNode } from "react";
import { Header } from "components";
import "./styles.scss";
import { DlSidebar } from "@alicorpdigital/dali-react-sidebar";

type Props = {
  children: ReactNode;
};

const LayoutFundamentals: FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <div
        className="
          d-flex 
          w-100 
          align-items-center 
          fundamentals-title
          dl-subtitle-xs"
      >
        Fundamentos
      </div>
      <div className="wrapper">{children}</div>
    </>
  );
};

export default LayoutFundamentals;
