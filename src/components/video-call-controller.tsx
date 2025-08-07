"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Video } from "lucide-react";
import VideoCallDialog from "./video-call-dialog";
import { BuyVideoPackageDialog } from "./buy-video-package-dialog";
import { useToast } from "@/hooks/use-toast";

export default function VideoCallController() {
  const [hasVideoPackage, setHasVideoPackage] = useState(false);
  const { toast } = useToast();

  const handleBuyPackage = () => {
    setHasVideoPackage(true);
    toast({
      title: "Pagamento Aprovado!",
      description: "Seu pacote de videochamada foi ativado.",
      variant: "default",
    });
  };

  if (hasVideoPackage) {
    return (
      <VideoCallDialog>
        <Button variant="ghost" size="icon">
          <Video className="h-5 w-5 text-muted-foreground" />
        </Button>
      </VideoCallDialog>
    );
  }

  return (
    <BuyVideoPackageDialog onConfirm={handleBuyPackage}>
        <Button variant="ghost" size="icon">
            <Video className="h-5 w-5 text-muted-foreground" />
        </Button>
    </BuyVideoPackageDialog>
  );
}
