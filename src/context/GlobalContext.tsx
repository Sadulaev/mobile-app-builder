"use client";

import { FC, createContext } from "react";
import { DeploySteps, MobileProjectType } from "../types/MobileModels";
import { v4 as uuidv4 } from "uuid";

type ContextObjectType = {
  projects: MobileProjectType[];
};

const contextObject: ContextObjectType = {
  projects: [
    {
      id: uuidv4(),
      title: `ПК "ГГНТУ"`,
      description:
        "Приложение для приемной комиссии. В списке функций: информация об обитуриентах, итоги экзаменов, полезная информация для поступающих.",
      lastUpdate: new Date(),
      step: DeploySteps.Development,
    },
    {
      id: uuidv4(),
      title: `ПК "Гарвард"`,
      description:
        "Приложение для приемной комиссии. В списке функций: информация об обитуриентах, итоги экзаменов, полезная информация для поступающих.",
      lastUpdate: new Date(),
      step: DeploySteps.Development,
    },
    {
      id: uuidv4(),
      title: `ПК "ЧГПУ"`,
      description:
        "Приложение для приемной комиссии. В списке функций: информация об обитуриентах, итоги экзаменов, полезная информация для поступающих.",
      lastUpdate: new Date(),
      step: DeploySteps.Deploy,
    },
    {
      id: uuidv4(),
      title: `ПК "ЧГУ"`,
      description:
        "Приложение для приемной комиссии. В списке функций: информация об обитуриентах, итоги экзаменов, полезная информация для поступающих.",
      lastUpdate: new Date(),
      step: DeploySteps.Deploy,
    },
    {
      id: uuidv4(),
      title: `ПК "РУДН"`,
      description:
        "Приложение для приемной комиссии. В списке функций: информация об обитуриентах, итоги экзаменов, полезная информация для поступающих.",
      lastUpdate: new Date(),
      step: DeploySteps.Deploy,
    },
    {
      id: uuidv4(),
      title: `ПК "МГУ"`,
      description:
        "Приложение для приемной комиссии. В списке функций: информация об обитуриентах, итоги экзаменов, полезная информация для поступающих.",
      lastUpdate: new Date(),
      step: DeploySteps.Deploy,
    },
    {
      id: uuidv4(),
      title: `Онлайн магазин`,
      description:
        "Магазин спортивных товаров с возможностью просмотра, добавления в корзину, заказа и др.",
      lastUpdate: new Date(),
      step: DeploySteps.Testing,
    },
    {
      id: uuidv4(),
      title: `Служба доставки`,
      description:
        "Приложение службы доставки, с картой города, с возможностью проложить маршрут и вычислить время прибытия.",
      lastUpdate: new Date(),
      step: DeploySteps.Initialization,
    },
  ],
};

export const GlobalContext = createContext(contextObject);

const GlobalContextLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <GlobalContext.Provider value={contextObject}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextLayout;
