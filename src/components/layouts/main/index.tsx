"use client";
import { FC, ReactNode } from "react";
import { Header } from "components";
import "./styles.scss";
import { DlSidebar } from "@alicorpdigital/dali-react-sidebar";
import { DlIcon } from "@alicorpdigital/dali-react-icon";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
};

const LayoutMain: FC<Props> = (props) => {
  const router = useRouter();
  const { children } = props;

  const items = [
    {
      label: "Primeros pasos",
      key: "first-steps",
      icon: <DlIcon name="education" />,
      children: [
        { label: "Introducción", key: "Introducción", href: "/primeros-pasos" },
        {
          label: "Para Diseño",
          key: "Para Diseño",
          href: "/primeros-pasos/para-diseno",
        },
        {
          label: "Para Desarrollo",
          key: "Para Desarrollo",
          href: "/primeros-pasos/para-desarrollador",
        },
      ],
    },
    {
      label: "Brand",
      key: "brand",
      icon: <DlIcon name="agenda" />,
      children: [
        { label: "Introducción", key: "Introducción" },
        { label: "Para Diseño", key: "Para Diseño" },
        { label: "Para Desarrollo", key: "Para Desarrollo" },
      ],
    },
    {
      label: "Fundamentos",
      key: "fundaments",
      icon: <DlIcon name="thunder" />,
      href: "/fundamentos",
      children: [
        { label: "Color", key: "Color", href: "/fundamentos/color" },
        {
          label: "Accesibilidad",
          key: "Accesibilidad",
          href: "/fundamentos/accesibilidad",
        },
        // {label: 'Ilustración', key: 'Ilustración', href: '/fundamentos/ilustracion' },
        // {label: 'Espaciados', key: 'Espaciados', href: '/fundamentos/espaciados' },
        {
          label: "Tipografías",
          key: "Tipografias",
          href: "/fundamentos/tipografia",
        },
        {
          label: "Iconografía",
          key: "iconografia",
          href: "/fundamentos/iconografia",
        },
      ],
    },
    {
      label: "Tokens",
      key: "tokens",
      icon: <DlIcon name="tree-view" />,
      children: [
        { label: "Introducción", key: "Introducción" },
        { label: "Para Diseño", key: "Para Diseño" },
        { label: "Para Desarrollo", key: "Para Desarrollo" },
      ],
    },
    {
      label: "Componentes",
      key: "components",
      icon: <DlIcon name="star" />,
    },
    {
      label: "Patrones",
      key: "patters",
      icon: <DlIcon name="package" />,
    },
    {
      label: "Soporte",
      key: "support",
      icon: <DlIcon name="education" />,
    },
  ];
  return (
    <div className="dali-layout-main">
      <Header />
      <div className="dali-layout-main__content">
        <DlSidebar
          items={items}
          onClick={(event) => event.href && router.push(event.href)}
        />

        <div className="dali-layout-main__children">{children}</div>
      </div>
    </div>
  );
};

export default LayoutMain;
