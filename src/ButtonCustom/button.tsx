import React, { CSSProperties, ReactElement } from "react";
import "./index.less";
import Icon, { LoadingOutlined } from "@ant-design/icons";
interface TCustomButtonProps {
  className?: string;
  style?: CSSProperties;
  onClick?: Function;
  dotted?: string;
  type?: "primary" | "warning" | "danger" | "default";
  disabled?: Boolean;
  ghost?: Boolean;
  size?: "large" | "middle" | "small";
  loading?: Boolean;
  radius?: Boolean;
  icon?: string | null;
}

const prefix = "ccp-custom";

const MyButton: React.FC<TCustomButtonProps> = (props): ReactElement => {
  const {
    style = {},
    className = "",
    type = "default",
    size = "middle",
    radius = false,
    disabled,
    loading,
    icon,
    onClick,
  } = props;

  // 计算类名
  const handleCalcClassNameText = (): string => {
    const classNames = [size, type, className];

    const optionalClassNames = [
      "ghost",
      "dotted",
      "disabled",
      "loading",
    ] as const;

    optionalClassNames.forEach((classNameText) => {
      if (props[classNameText]) {
        classNames.push(classNameText);
      }
    });
    if (radius) {
      classNames.push("radius");
    }
    return classNames.join(" ");
  };
  // 渲染loading
  const renderButtonLoadingContent = (): ReactElement | null => {
    if (!loading) {
      return null;
    }
    return <LoadingOutlined />;
  };
  const renderButtonIconContent = (): ReactElement | null => {
    if (!icon) return null;
    return <Icon type={icon} />;
  };

  // 处理事件
  const handleCustomButtonClick = () => {
    if (disabled || loading) {
      return;
    }
    onClick && onClick();
  };

  return (
    <div
      className={`${prefix}-container ${handleCalcClassNameText()} `}
      style={style}
      onClick={() => handleCustomButtonClick()}
    >
      {renderButtonLoadingContent()}
      {renderButtonIconContent()}
      <span>{props.children}</span>
    </div>
  );
};

export default MyButton;
