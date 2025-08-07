"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Video } from "lucide-react";
import VideoCallDialog from "./video-call-dialog";
import { BuyVideoPackageDialog } from "./buy-video-package-dialog";
import { useToast } from "@/hooks/use-toast";
import { purchaseVideoPackage } from "@/app/actions";

export default function VideoCallController() {
  const [hasVideoPackage, setHasVideoPackage] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const { toast } = useToast();

  const handleBuyPackage = async () => {
    setIsBuying(true);
    try {
      const result = await purchaseVideoPackage();
      if (result.success) {
        setHasVideoPackage(true);
        toast({
          title: "Pagamento Aprovado!",
          description: "Seu pacote de videochamada foi ativado.",
          variant: "default",
        });
      } else {
        toast({
          title: "Erro no Pagamento",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
       toast({
          title: "Erro",
          description: "Não foi possível processar a compra. Tente novamente.",
          variant: "destructive",
        });
    } finally {
        setIsBuying(false);
    }
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
    <BuyVideoPackageDialog onConfirm={handleBuyPackage} isBuying={isBuying}>
        <Button variant="ghost" size="icon">
            <Video className="h-5 w-5 text-muted-foreground" />
        </Button>
    </BuyVideoPackageDialog>
  );
}
