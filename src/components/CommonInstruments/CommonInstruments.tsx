import React, { useEffect, useMemo, useRef, useState } from "react";
import { Segmented, Slider, Typography } from "antd";
import { useWorkspace } from "../../context/WorkSpaceContext";
import getCustomPalette from "../../utils/getCustomPalette";
const { Text } = Typography;

const CommonInstruments = () => {
  const { state, dispatch } = useWorkspace();
  const { zoom, mode } = state;
  const palette = useMemo(() => getCustomPalette(), []);
  // State to open or close switch mode block
  const [isOpenModeSelect, setIsOpenModeSelect] = useState<boolean>(false);
  // ref to watch after switch mode block
  const switchModeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        switchModeRef.current &&
        !switchModeRef.current.contains(e.target as Node)
      ) {
        setIsOpenModeSelect(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [switchModeRef, setIsOpenModeSelect]);

  const modeStrings = {
    dev: "Разработка",
    watch: "Просмотр",
  };

  const modeColors = {
    dev: palette.androidGreen,
    watch: palette.appStoreBlue,
  };

  return (
    <>
      {/* Mode switcher */}
      <div
        className={`absolute top-[-5rem] transition-[0.2s] w-[20rem] flex flex-col justify-center z-20`}
        style={{
          transform: `translateY(${isOpenModeSelect ? "3.5rem" : "0"})`,
        }}
        ref={switchModeRef}
      >
        <div className="opacity-0 w-full h-6" />
        <Segmented
          className="font-semibold"
          style={{ background: modeColors[mode] }}
          size="large"
          defaultValue={mode}
          options={[
            { label: modeStrings.dev, value: "dev" },
            { label: modeStrings.watch, value: "watch" },
          ]}
          onChange={(e: "dev" | "watch") =>
            dispatch({ type: "UPDATE_WORKSPACE", payload: { mode: e } })
          }
          block
        />
        <div className="flex justify-center">
          <Text
            className="text-center font-bold py-1 px-4 rounded-br-md rounded-bl-md bg-white cursor-pointer"
            onClick={() => setIsOpenModeSelect(!isOpenModeSelect)}
          >
            Peжим просмотра
          </Text>
        </div>
      </div>
      {/* Zoom control */}
      <div className="absolute left-0 top-0 w-[20rem] h-[5.5rem] bg-white rounded-lg p-2">
        <Text className="font-medium">Увеличение</Text>
        <Slider
          defaultValue={zoom}
          min={50}
          max={100}
          onChange={(e) =>
            dispatch({ type: "UPDATE_WORKSPACE", payload: { zoom: e - 2 } })
          }
        />
      </div>
    </>
  );
};

export default CommonInstruments;
