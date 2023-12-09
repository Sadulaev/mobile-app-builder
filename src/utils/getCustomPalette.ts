type Palette = {
    whiteContrast: {
        red: string,
        blue: string,
        yellow: string,
        orange: string,
        green: string,
        turkoiz: string,
        violet: string,
        gray: string,
    }
    appStoreBlue: string,
    androidGreen: string,
}

export default function (): Palette {
    return {
        whiteContrast: {
            red: "#e74c3c",
            blue: "#3498db",
            yellow: "#f1c40f",
            orange: "#e67e22",
            green: "#2ecc71",
            turkoiz: "#1abc9c",
            violet: "#9b59b6",
            gray: "#6c6c6c",
        },
        appStoreBlue: "#007AFF",
        androidGreen: "#A3C639",
    }
}