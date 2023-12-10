export type ScreenSizesType = {
    width: string;
    height: string;
    padding: string;
    borderRadius: string;
};

export enum DeploySteps {
    Initialization,
    Development,
    Testing,
    Deploy,
}

export type MobileProjectType = {
    id: string;
    title: string;
    description: string;
    step: DeploySteps;
    lastUpdate: Date;
}