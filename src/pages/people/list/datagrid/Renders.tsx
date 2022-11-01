import { Avatar, Center } from "@mantine/core";
import { IconCircle } from "@tabler/icons";

function AvatarRenderer(value: any, align?: string) {
  if (align === "center") {
    return (
      <Center>
        <Avatar src={value} size={28} radius={100} />
      </Center>
    );
  }

  return <Avatar src={value} size={28} />;
}

function BooleanRender(value: any, align?: string) {
  if (value) {
    return <IconCircle color="green" />;
  }

  return <IconCircle color="red" />;
}

function SimpleRender(value: any, align?: string) {
  return <>{value}</>;
}

function resolveRender(type: string | undefined): Render {
  switch (type) {
    case "avatar":
      return AvatarRenderer;
    case "boolean":
      return BooleanRender;
    default:
      return SimpleRender;
  }
}

export type Render = (value: any, align?: string) => React.ReactElement;

export { AvatarRenderer, SimpleRender, resolveRender };
