import type { IconType } from "react-icons";
import { FaKey } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import {
  SiAnthropic,
  SiCircle,
  SiClaude,
  SiEthereum,
  SiFirefoxbrowser,
  SiGithub,
  SiGoogle,
  SiGooglechrome,
  SiNear,
  SiRust,
  SiSafari,
  SiSolidity,
  SiSui,
} from "react-icons/si";

type MarkProps = {
  className?: string;
  title?: string;
};

function BrandIcon({
  Icon,
  color,
  className,
  title,
}: {
  Icon: IconType;
  color: string;
  className?: string;
  title?: string;
}) {
  return (
    <Icon
      className={className}
      style={{ color }}
      aria-hidden={title ? undefined : true}
      title={title}
    />
  );
}

export function EthereumMark({ className }: MarkProps) {
  return <BrandIcon Icon={SiEthereum} color="#627EEA" className={className} title="Ethereum" />;
}

export function SolidityMark({ className }: MarkProps) {
  return <BrandIcon Icon={SiSolidity} color="#363636" className={className} title="Solidity" />;
}

export function RustMark({ className }: MarkProps) {
  return <BrandIcon Icon={SiRust} color="#DEA584" className={className} title="Rust" />;
}

export function MoveMark({ className }: MarkProps) {
  // Move/Sui ecosystem mark — colorful chain tooling cue
  return <BrandIcon Icon={SiSui} color="#4DA2FF" className={className} title="Move / Sui" />;
}

export function GitHubMark({ className }: MarkProps) {
  return <BrandIcon Icon={SiGithub} color="#181717" className={className} title="GitHub" />;
}

export function ChromeMark({ className }: MarkProps) {
  return (
    <BrandIcon Icon={SiGooglechrome} color="#4285F4" className={className} title="Chrome" />
  );
}

export function FirefoxMark({ className }: MarkProps) {
  return (
    <BrandIcon Icon={SiFirefoxbrowser} color="#FF7139" className={className} title="Firefox" />
  );
}

export function SafariMark({ className }: MarkProps) {
  return <BrandIcon Icon={SiSafari} color="#0FB5EE" className={className} title="Safari" />;
}

export function OpenAIMark({ className }: MarkProps) {
  // Claude / agent tooling stand-in with official Simple Icon
  return <BrandIcon Icon={SiClaude} color="#D97757" className={className} title="Claude" />;
}

export function AnthropicMark({ className }: MarkProps) {
  return <BrandIcon Icon={SiAnthropic} color="#D4A27F" className={className} title="Anthropic" />;
}

export function GoogleMark({ className }: MarkProps) {
  return <BrandIcon Icon={SiGoogle} color="#4285F4" className={className} title="Google" />;
}

export function NearMark({ className }: MarkProps) {
  return <BrandIcon Icon={SiNear} color="#00C08B" className={className} title="NEAR" />;
}

export function UsdcMark({ className }: MarkProps) {
  return <BrandIcon Icon={SiCircle} color="#2775CA" className={className} title="Circle / USDC" />;
}

export function KeyMark({ className }: MarkProps) {
  return <BrandIcon Icon={FaKey} color="#F59E0B" className={className} title="Keys" />;
}

export function CheckBlue({ className }: MarkProps) {
  return (
    <BrandIcon Icon={FaCircleCheck} color="#2563EB" className={className} title="Checked" />
  );
}
