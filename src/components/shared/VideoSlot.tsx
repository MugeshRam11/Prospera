import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────────────────────────────────
   VIDEO SLOT — blank placeholder until videos are added manually.
   Usage: <VideoSlot src={myVideo} />  →  drop files in src/assets/videos/
   and import them where the slot is used. Empty src renders the placeholder.
   ────────────────────────────────────────────────────────────────────────── */

interface VideoSlotProps {
  src?: string;
  className?: string;
  dark?: boolean;
}

const VideoSlot = ({ src, className, dark = false }: VideoSlotProps) => {
  if (src) {
    return (
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className={cn("w-full h-full object-cover", className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "w-full h-full flex flex-col items-center justify-center gap-3",
        dark
          ? "bg-[hsl(224,45%,13%)]"
          : "bg-[hsl(33,18%,90%)]",
        className,
      )}
    >
      <span
        className={cn(
          "w-12 h-12 rounded-full border flex items-center justify-center",
          dark ? "border-white/15" : "border-foreground/15",
        )}
      >
        <Play
          size={16}
          className={dark ? "text-white/40" : "text-foreground/30"}
        />
      </span>
      <span
        className={cn(
          "text-[9px] font-vayu uppercase tracking-[0.18em]",
          dark ? "text-white/30" : "text-foreground/30",
        )}
      >
        Video slot
      </span>
    </div>
  );
};

export default VideoSlot;
