import type { FC, ReactNode } from "react";

// The InfoBox can have a "hint" or "warning" mode via the "mode" prop. If the mode is "warning", the props objects needs to have a "severity" prop. So, the "severity" prop cannot be made optional.
// At the same time, if the mode is "hint", then TS will raise a compilation error if the "severity" prop is not passed, so we would have to pass it as a redundant, extra prop.
// So, we need to conditionally add the "severity" prop to the props object. That cn be done using a discriminated union in the following way, without destructuring the props object in the function signature:

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox: FC<InfoBoxProps> = function (props) {
  switch (props.mode) {
    case "hint":
      return (
        <aside className="infobox infobox-hint">
          <p>{props.children}</p>
        </aside>
      );
    case "warning":
      return (
        <aside className={`infobox infobox-warning warning--${props.severity}`}>
          <h2>Warning</h2>
          <p>{props.children}</p>
        </aside>
      );
    default:
      throw new Error(`Unknown info box type`);
  }
};

export default InfoBox;
